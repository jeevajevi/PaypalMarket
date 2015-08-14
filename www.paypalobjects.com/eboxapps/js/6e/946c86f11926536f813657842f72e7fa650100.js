/**
 * @name PayPal Video Player 2.0
 * @author Jason Gabriele <jgabriele@paypal.com> (With some parts from v1)
 *
 * @fileOverview
 * This adds the standard controls or a flash wrapper for HTML5 videos.
 *
 * Limitations:
 *   - IE 9 won't show posters if preload != none
 *   - On mobile (<=568px), the lightbox will not show. Instead it goes directly to the video
 *
 * The flash player is forked from mediaelement here: https://github.com/niveus/mediaelement
 *
 * @url https://confluence.paypal.com/cnfl/display/mpp/Video
 *
 * @example
 *   <video width="640" height="360" id="pp-app-video" preload="none"
 *          src="https://www.paypalobjects.com/webstatic/mktg/consumer/videos/paypal_app_9_5_2.mp4"
 *          poster="https://www.paypalobjects.com/webstatic/mktg/cashforregisters/bl-bg.jpg">Your browser does not support video</video>
 *
 *   new PAYPAL.Marketing.Video("#pp-app-video");
 *
 *   -or-
 *
 *   <a href="https://www.paypalobjects.com/webstatic/mktg/consumer/videos/beacon.mp4" id="lb-video">Show Video in Lightbox</a>
 *
 *   new PAYPAL.Marketing.VideoLightBox('#lb-video',
 *                                      640,
 *                                      360,
 *                                      "https://www.paypalobjects.com/webstatic/mktg/beacon/bottom-video-words2.jpg");
 */

(function() {
    "use strict";

    $.fn.namespace("PAYPAL.Marketing");
    // var clickEvent = ($(document.documentElement).data('device-type') === 'mobile') ? 'touchstart' : 'click';
    var clickEvent = 'click';

    // SWF wrapper for videos
    var VIDEO_SWF = "https://www.paypalobjects.com/webstatic/mktg/kb/pp_video_player.swf",
        INITIAL_VOLUME = 0.5;

    // Minimum size for lightbox video
    var LIGHTBOX_MIN_WIDTH = 300,
        LIGHTBOX_MIN_HEIGHT = 200;

    /**
     * @constructor
     * @this Video
     */
    PAYPAL.Marketing.Video = function(video) {
        var dt = $(document.documentElement).data("device-type");

        // Check whether to use flash wrapper
        this._useHTML5 = !(typeof(Modernizr) === "undefined" || Modernizr.video === false || Modernizr.video.h264 === '');
        this._$htmlVideo = $(video);

        // Full window
        this._inFullScreen = false;

        // This uses the default controls for iPad and on iPhone launches the video full screen
        if ((typeof(dt) !== 'undefined' && dt !== 'dedicated') ||
            (typeof(dt) === 'undefined' && Modernizr.touch)) {
            // Make sure controls are there
            this._$htmlVideo.attr('controls', 'controls');
            // Always preload metadata
            this._$htmlVideo.attr('preload', 'none');
        }
        // Add controls to HTML5 video
        else if (this._useHTML5) {
            // Always preload metadata except for IE (IE9 has problem with posters)
            // TODO: Turn back on when ppo has separate domains
            if ( /*@cc_on!@*/ 1) this._$htmlVideo.attr('preload', 'none');
 
            this._addControls();
        }
        // Replace with flash version
        else {
            // Get MP4
            this._videoSrc = this._$htmlVideo.attr('src');

            // Put in flash video
            var vidId = this._$htmlVideo.attr('id');

            this._flashContainer = $('<div></div>');
            this._flashContainer.attr('id', vidId + '-video-container');
            this._flashContainer.addClass('video-player');

            // Add flash container
            this._$htmlVideo.replaceWith(this._flashContainer);

            // Add styles
            this._flashContainer.css('width', this._$htmlVideo.attr('width') + 'px');
            this._flashContainer.css('height', this._$htmlVideo.attr('height') + 'px');

            // Add poster if one is specified
            if (this._$htmlVideo.attr('poster')) {
                this._flashContainer.css('background-image', 'url(' + this._$htmlVideo.attr('poster') + ')');
            }

            this._attachFlashEvents();

            this._flashInserted = false;
        }
    }

    PAYPAL.Marketing.Video.prototype = {
        _events: null,

        /**
         * Remove all events
         */
        destroy: function() {
            this._detachEvents();
        },

        /**
         * Are events attached?
         */
        _eventsAttached: function() {
            return this._events !== null;
        },

        /**
         * Attach Flash events
         */
        _attachFlashEvents: function() {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];

            // Play/Pause
            this._events.push(this._flashContainer.one(clickEvent, $.proxy(this._insertFlash, this)));
        },

        /**
         * Attach html5 events
         */
        _attachHTML5Events: function() {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];

            // Play/Pause
            this._events.push(this._playButton.on(clickEvent, $.proxy(this._playPause, this)));
            this._events.push(this._$htmlVideo.parent('.video-player').one(clickEvent, $.proxy(this._initialHTML5Play, this)));
            this._events.push(this._$htmlVideo.on('play', $.proxy(this._showPlaying, this)));
            this._events.push(this._$htmlVideo.on('pause ended', $.proxy(this._showPaused, this)));
            this._events.push(this._$htmlVideo.on('timeupdate', $.proxy(this._updateSeekBar, this)));
            this._events.push(this._seekBar.on(clickEvent, this._stopProp));
            this._events.push(this._volumeButton.on(clickEvent, $.proxy(this._toggleMute, this)));
            this._events.push(this._fullScreenButton.on(clickEvent, $.proxy(this._toggleFullScreen, this)));
            this._events.push(this._$htmlVideo.on('ended', $.proxy(this._closeFullScreen, this)));
            this._events.push(this._$htmlVideo.on('progress', $.proxy(this._progress, this)));
        },

        /**
         * Detach Events
         */
        _detachEvents: function() {
            if ($.isArray(this._events)) {
                $.each(this._events, function(i, ev) {
                    ev.off();
                });

                this._events = null;
            }
        },

        /**
         * Public play method
         */
        play: function() {
            // Force reload if not ready. iPad will not load load videos that are display:none. 
            if (Modernizr.touch && this._$htmlVideo.get(0).readyState === 0) {
                // Remove video element and put it back
                var p = this._$htmlVideo.parent();
                this._$htmlVideo.remove();
                window.setTimeout($.proxy(function() {
                    this._$htmlVideo = this._$htmlVideo.clone();
                    p.append(this._$htmlVideo);
                }, this), 0);
            }
            // Play HTML5 Video
            else if (this._useHTML5) {
                this._html5Play();
            }
            // Insert Flash Video
            else if (!this._flashInserted) {
                this._detachEvents();
                this._insertFlash();
            }
            // Play Flash Video
            else {
                try {
                    this._flashObject.playMedia();
                } catch (e) {}
            }
        },

        /**
         * Public pause method
         */
        pause: function() {
            // Play HTML5 Video
            if (this._useHTML5) {
                this._html5Pause();
            }
            // Pause Flash Video
            else {
                try {
                    this._flashObject.pauseMedia();
                } catch (e) {}
            }
        },

        /**
         * Put in the flash object
         */
        _insertFlash: function() {
            // Remove poster
            this._flashContainer.css('background-image', 'none');

            var vidId = this._$htmlVideo.attr('id');

            // Insert flash
            PAYPAL.core.Flash.insertFlash(VIDEO_SWF,
                this._$htmlVideo.attr('width'),
                this._$htmlVideo.attr('height'),
                this._flashContainer.attr('id'),
                false,
                9.0,
                vidId,
                false,
                'controls=true&startvolume=' + INITIAL_VOLUME +
                '&autoplay=true&file=' + this._videoSrc);

            // Add loaded
            this._flashContainer.addClass('loaded');
            this._flashInserted = true;

            // Track
            this._trackInitial();

            // Resize video in case flash stage wasn't set correctly
            window.setTimeout($.proxy(function() {
                // Store ref to flash obj
                this._flashObject = $('#' + vidId).get(0);

                // Catch stupid flash errors
                try {
                    this._flashObject.setVideoSize(this._$htmlVideo.attr('width'), this._$htmlVideo.attr('height'));
                } catch (e) {}
            }, this), 0);
        },

        /**
         * Removes the play overlay
         */
        _initialHTML5Play: function() {
            this._trackInitial();

            this._playPause();
        },

        /**
         * Tracks initial video play
         */
        _trackInitial: function() {
            if (typeof(fpti) === "undefined") return;

            var videoParts = this._$htmlVideo.attr('src').split('.'),
                videoName = this._$htmlVideo.attr('src');

            // Extract video name
            if (videoParts.length > 1) {
                videoParts = videoParts[videoParts.length - 2].split('https://www.paypal.com/');
                videoName = videoParts[videoParts.length - 1]
            }

            // Track play
            fpti.link = 'video:' + videoName + ':first-play';
            PAYPAL.analytics.instance.recordClick();

            // Reset
            fpti.link = "";
        },

        _checkLoaded: function() {
            // Add loaded class if not there
            if (!this._$htmlVideo.parent('.video-player').hasClass('loaded')) this._$htmlVideo.parent('.video-player').addClass('loaded');
        },

        /**
         * Toggle Play and Paused
         */
        _playPause: function() {
            // Stop click throughs
            if (arguments.length > 0) {
                var e = arguments[0];
                this._stopProp(e);
            }

            this._checkLoaded();

            // Toggle state
            if (this._$htmlVideo.prop('paused') === false) {
                this._html5Pause();
            } else {
                this._html5Play();
            }
        },

        /* Direct playback methods */
        _html5Play: function() {
            this._checkLoaded();
            this._$htmlVideo.get(0).play();
        },

        _html5Pause: function() {
            this._$htmlVideo.get(0).pause();
        },

        _stopProp: function(e) {
            e.preventDefault();
            e.stopPropagation();
        },

        // Bar states
        _showPlaying: function() {
            this._playButton.addClass('paused-button');
            this._$htmlVideo.parent('.video-player').addClass('playing');
            this._playButton.attr('aria-label', PP_GLOBAL_JS_STRINGS["PAUSE"]);
            this._playButton.attr('title', PP_GLOBAL_JS_STRINGS["PAUSE"]);
        },
        _showPaused: function() {
            this._playButton.removeClass('paused-button');
            this._$htmlVideo.parent('.video-player').removeClass('playing');
            this._playButton.attr('aria-label', PP_GLOBAL_JS_STRINGS["PLAY"]);
            this._playButton.attr('title', PP_GLOBAL_JS_STRINGS["PLAY"]);
        },

        // Seek bar
        _isSliding: false,
        _moveSlider: function() {
            this._isSliding = true;
        },
        _stopSlider: function(e, ui) {
            this._isSliding = false;
            this._$htmlVideo.prop("currentTime", ui.value);
        },
        _calcSeekBar: function() {
            this._seekBar.css({
                width: (this._$htmlVideo.width() - 128) + "px"
            });
        },
        _updateSeekBar: function() {
            var currentTime = this._$htmlVideo.prop('currentTime');
            if (!this._isSliding) this._seekBar.slider({
                value: currentTime
            });
        },

        /* Download progress */
        _progress: function(e) {
            // Check 
            var tl = this._$htmlVideo.prop('buffered'),
                loaded = 0,
                dur = this._$htmlVideo.prop('duration'),
                percent = 0;

            // Not ready yet
            if (tl.length === 0 || isNaN(dur)) return;

            // Calc percent loaded
            loaded = tl.end(0);
            percent = Math.round(100 * (loaded / dur));

            // Adjust slider
            this._loadedBar.css('width', percent + '%');
        },

        _toggleMute: function(e) {
            this._stopProp(e);

            if (this._$htmlVideo.prop('muted')) {
                this._$htmlVideo.prop('muted', false);
                this._volumeSlider.slider({
                    value: this._videoVolume
                });
                this._volumeButton.removeClass('volume-mute');
                this._volumeButton.attr('aria-pressed', 'false');
            } else {
                this._$htmlVideo.prop('muted', true);
                this._volumeSlider.slider({
                    value: 0
                });
                this._volumeButton.addClass('volume-mute');
                this._volumeButton.attr('aria-pressed', 'true');
            }
        },
        _moveVolumeSlider: function(e, ui) {
            this._$htmlVideo.prop('muted', false);
            this._videoVolume = ui.value;
            this._$htmlVideo.prop('volume', ui.value);
            this._volumeButton.removeClass('volume-mute');
            this._volumeButton.attr('aria-pressed', 'false');
        },

        /**
         * Expands to fill full window (not real full screen)
         */
        _toggleFullScreen: function(e) {
            e.preventDefault();

            var cont = this._$htmlVideo.parent('.video-player');

            // Normal size it
            if (cont.hasClass('fullscreen')) {
                this._closeFullScreen(e);
            }
            // Super size it
            else {
                cont.addClass('fullscreen');
                cont.css('width', '100%');
                cont.css('height', '100%');
                this._$htmlVideo.css('width', '100%');
                this._$htmlVideo.css('height', '100%');
                this._fullScreenButton.attr('aria-pressed', 'true');

                this._calcSeekBar();
            }
        },

        _closeFullScreen: function(e) {
            e.preventDefault();

            var cont = this._$htmlVideo.parent('.video-player');

            if (!cont.hasClass('fullscreen')) return;

            cont.removeClass('fullscreen');
            cont.css('width', this._videoWidth);
            cont.css('height', this._videoHeight);
            this._$htmlVideo.css('width', this._videoWidth);
            this._$htmlVideo.css('height', this._videoHeight);
            this._fullScreenButton.attr('aria-pressed', 'false');

            this._calcSeekBar();
        },

        // Code adapted from original player
        _addControls: function() {
            var $video_wrap,
                $vidControls,
                $vidContainer,
                sliderSettings,
                html5Vid = this._$htmlVideo;

            // Collect initial video dimenions
            this._videoWidth = this._$htmlVideo.width();
            this._videoHeight = this._$htmlVideo.height();

            // This creates a wrapper around the video tag
            $video_wrap = $('<div></div>').addClass('video-player');

            // Set size of container. Height + 34 to move control off of the video.
            $video_wrap.css('width', this._$htmlVideo.width() + 'px');
            $video_wrap.css('height', (this._$htmlVideo.height() + 34) + 'px');

            $vidControls = $('<div class="video-controls"><a href="#" role="button" class="video-play" title="' + PP_GLOBAL_JS_STRINGS["PLAY"] +
                '" aria-label="' + PP_GLOBAL_JS_STRINGS["PLAY"] + '"></a>' +
                '<div class="video-seek"></div><div class="volume-box"><div class="volume-slider"></div>' +
                '<a href="#" role="button" class="volume-button" title="' + PP_GLOBAL_JS_STRINGS["MUTE"] +
                '" aria-label="' + PP_GLOBAL_JS_STRINGS["MUTE"] + '" aria-pressed="false"></a></div></div>');
            this._$htmlVideo.wrap($video_wrap);
            this._$htmlVideo.after($vidControls);

            // Autohiding controls
            //$vidControls.addClass('autohide');

            // Setup new elements
            $vidContainer = this._$htmlVideo.parent('.video-player');
            this._playButton = $('.video-play', $vidContainer);
            this._volumeSlider = $('.volume-slider', $vidContainer);
            this._volumeButton = $('.volume-button', $vidContainer);
            this._seekBar = $('.video-seek', $vidContainer);

            // Add fullscreen control
            this._fullScreenButton = $('<a class="video-fullscreen" title="' + PP_GLOBAL_JS_STRINGS["TOGGLE_FULL_SCREEN"] +
                '" aria-label="' + PP_GLOBAL_JS_STRINGS["TOGGLE_FULL_SCREEN"] + '" aria-pressed="false"></a>');
            $vidContainer.append(this._fullScreenButton);

            // Attach events
            this._attachHTML5Events();

            // Set width of bar
            this._calcSeekBar();

            // Slider settings
            sliderSettings = {
                value: 0,
                step: 0.01,
                orientation: "horizontal",
                range: "min",
                max: null,
                animate: true,
                slide: $.proxy(this._moveSlider, this),
                stop: $.proxy(this._stopSlider, this)
            };

            // Check if metadata is loaded
            if (isNaN(this._$htmlVideo.prop('duration'))) {
                this._$htmlVideo.on('loadedmetadata', $.proxy(function() {
                    sliderSettings.max = this._$htmlVideo.prop('duration');
                    this._seekBar.slider(sliderSettings);
                }, this));
            } else {
                sliderSettings.max = this._$htmlVideo.prop('duration');
                this._seekBar.slider(sliderSettings);
            }

            // Add loaded slider
            this._loadedBar = $('<div></div>');
            this._loadedBar.addClass('ui-slider-loaded');
            this._loadedBar.css('width', '0');
            this._seekBar.append(this._loadedBar);

            // Add role=button
            //this._seekBar.find('a').attr('aria-label', PP_GLOBAL_JS_STRINGS["SEEK_VIDEO"]).attr('role', 'button');

            // Set initial volume
            this._videoVolume = INITIAL_VOLUME;
            this._$htmlVideo.prop('volume', this._videoVolume);

            this._volumeSlider.slider({
                value: this._videoVolume,
                orientation: "vertical",
                range: "min",
                max: 1,
                step: 0.05,
                animate: true,
                slide: $.proxy(this._moveVolumeSlider, this)
            });

            //this._volumeSlider.find('a').attr('aria-label', PP_GLOBAL_JS_STRINGS["CHANGE_VOLUME"]).attr('role', 'button');

            // Remove any other controls
            this._$htmlVideo.removeAttr('controls');
        }
    };

    /**
     * @constructor
     * @this VideoLightBox
     */
    PAYPAL.Marketing.VideoLightBox = function(links, width, height, poster) {
        var nw = width,
            nh = height;

        // Check for plain string
        if (typeof(links) === 'string') links = $(links);

        // Make sure there is at least 1 link
        if (links.length === 0) return;

        // Save links selector
        this._links = links;

        // Create a random id
        var randId = 'overlay-' + Math.round(Math.random() * 100000);

        // Create an overlay
        this._overlay = $('<div></div>');
        this._overlay.attr('id', randId);
        this._overlay.addClass('mpp-modal');

        // Automatically reduce size of lightbox
        while ($(window).width() - 60 < nw || $(window).height() - 80 < nh) {
            // Cut size in half
            nw = Math.round(nw * .75);
            nh = Math.round(nh * .75);

            // Too small
            if (nw < LIGHTBOX_MIN_WIDTH || nh < LIGHTBOX_MIN_HEIGHT) break;

            width = nw;
            height = nh;
        }

        // Create HTML5 video object
        var $html5el = $('<video>' + PP_GLOBAL_JS_STRINGS["NO_PLAY_VIDEO"] + '</video>');
        $html5el.attr('src', this._links.first().attr('href'));
        $html5el.attr('width', parseInt(width));
        $html5el.attr('height', parseInt(height));
        $html5el.attr('poster', poster);
        $html5el.attr('id', 'video-' + randId);
        this._overlay.append($html5el);

        // Add it to the body
        $(document.body).append(this._overlay);

        // If modal is defined then use that
        if (typeof(PAYPAL.Marketing.Modal) !== "undefined") {
            this._modal = new PAYPAL.Marketing.Modal(this._overlay, {
                minHeight: height + 70,
                minWidth: width + 34
            });
        } else {
            // Make it a lightbox
            this._overlay.lightbox({
                height: "auto",
                width: "auto",
                modal: true,
                autoOpen: false
            });
        }

        // Add click events
        this._attachEvents();

        // Create Video object
        this._video = new PAYPAL.Marketing.Video($html5el);

        // Fix ARIA in lightbox container
        $("#" + randId).parent().removeAttr("aria-describedby");
        $("#" + randId).parent().removeAttr("aria-labelledby");
        $("#" + randId).parent().attr("aria-label", "video player");
        $("#" + randId).parent().addClass("video-modal");
    };

    PAYPAL.Marketing.VideoLightBox.prototype = {
        _events: null,

        _playCancelled: false,

        /**
         * Remove all events
         */
        destroy: function() {
            this._video.destroy();
            this._detachEvents();
        },

        /**
         * Are events attached?
         */
        _eventsAttached: function() {
            return this._events !== null;
        },

        /**
         * Attach events
         */
        _attachEvents: function() {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];

            // Play/Pause
            this._events.push(this._links.on(clickEvent, $.proxy(this.show, this)));

            // Close
            if (this._modal) {
                // Pause video on close
                $(window).on('MODAL_CLOSED', $.proxy(function() {
                    this._pauseVideo();
                    this._playCancelled = true;
                }, this));
            } else {
                this._events.push(this._overlay.closest('.ui-dialog').on('mousedown keydown', '.ui-dialog-titlebar-close', $.proxy(this.hide, this)));
            }
        },

        /**
         * Detach Events
         */
        _detachEvents: function() {
            if ($.isArray(this._events)) {
                $.each(this._events, function(i, ev) {
                    ev.off();
                });

                this._events = null;
            }
        },

        /**
         * Pause Video
         */
        _pauseVideo: function() {
            this._video.pause();
        },

        /**
         * Show the lightbox and play the video
         */
        show: function(e) {

            // Register Google Analytics event after 5 seconds of viewing (True Play)
            if (typeof ga !== 'undefined' && ga !== null) {
                var self = this;
                self._playCancelled = false;
                setTimeout(function () {
                    if (self._playCancelled === false) {
                        ga('send', 'event', 'MPP Video', 'Play', 'Desktop');
                    }
                }, 5000);
            }

            // For phones, just follow the link and try to trigger the GA event right away. We don't have time to wait 5 seconds - the session is about to be torn down...
            if ($(document.documentElement).data('device-type') === 'mobile' ||
                Modernizr.mq('all and (max-width: 568px)')) {
                if (typeof ga !== 'undefined' && ga !== null) ga('send', 'event', 'MPP Video', 'Play', 'Mobile');
                window.location = $(e.target).attr('href');
                return true;
            }

            e.preventDefault();

            if (this._modal) {
                this._modal.show();
            } else {
                // Show the lightbox
                this._overlay.lightbox("open");
            }

            // Play the video
            window.setTimeout($.proxy(this._video.play, this._video), 0);
        },

        /**
         * Hide the lightbox and pause the video
         */
        hide: function(e) {
            e.preventDefault();
            e.stopPropagation();

            // Pause video
            this._video.pause();

            // Close lightbox
            window.setTimeout($.proxy(function() {
                this._overlay.lightbox("close");
            }, this), 0);
        }
    };
})();

