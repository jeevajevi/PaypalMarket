/* Modernizr 2.7.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-backgroundsize-borderradius-boxshadow-flexbox-flexboxlegacy-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-audio-video-svg-touch-shiv-mq-cssclasses-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes
 */
;
window.Modernizr = function(a, b, c) {
    function D(a) {
        j.cssText = a
    }

    function E(a, b) {
        return D(n.join(a + ";") + (b || ""))
    }

    function F(a, b) {
        return typeof a === b
    }

    function G(a, b) {
        return !!~("" + a).indexOf(b)
    }

    function H(a, b) {
        for (var d in a) {
            var e = a[d];
            if (!G(e, "-") && j[e] !== c) return b == "pfx" ? e : !0
        }
        return !1
    }

    function I(a, b, d) {
        for (var e in a) {
            var f = b[a[e]];
            if (f !== c) return d === !1 ? a[e] : F(f, "function") ? f.bind(d || b) : f
        }
        return !1
    }

    function J(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.slice(1),
            e = (a + " " + p.join(d + " ") + d).split(" ");
        return F(b, "string") || F(b, "undefined") ? H(e, b) : (e = (a + " " + q.join(d + " ") + d).split(" "), I(e, b, c))
    }
    var d = "2.7.1",
        e = {},
        f = !0,
        g = b.documentElement,
        h = "modernizr",
        i = b.createElement(h),
        j = i.style,
        k, l = ":)",
        m = {}.toString,
        n = " -webkit- -moz- -o- -ms- ".split(" "),
        o = "Webkit Moz O ms",
        p = o.split(" "),
        q = o.toLowerCase().split(" "),
        r = {
            svg: "http://www.w3.org/2000/svg"
        },
        s = {},
        t = {},
        u = {},
        v = [],
        w = v.slice,
        x, y = function(a, c, d, e) {
            var f, i, j, k, l = b.createElement("div"),
                m = b.body,
                n = m || b.createElement("body");
            if (parseInt(d, 10))
                while (d--) j = b.createElement("div"), j.id = e ? e[d] : h + (d + 1), l.appendChild(j);
            return f = ["&#173;", '<style id="s', h, '">', a, "</style>"].join(""), l.id = h, (m ? l : n).innerHTML += f, n.appendChild(l), m || (n.style.background = "", n.style.overflow = "hidden", k = g.style.overflow, g.style.overflow = "hidden", g.appendChild(n)), i = c(l, a), m ? l.parentNode.removeChild(l) : (n.parentNode.removeChild(n), g.style.overflow = k), !!i
        },
        z = function(b) {
            var c = a.matchMedia || a.msMatchMedia;
            if (c) return c(b).matches;
            var d;
            return y("@media " + b + " { #" + h + " { position: absolute; } }", function(b) {
                d = (a.getComputedStyle ? getComputedStyle(b, null) : b.currentStyle)["position"] == "absolute"
            }), d
        },
        A = function() {
            function d(d, e) {
                e = e || b.createElement(a[d] || "div"), d = "on" + d;
                var f = d in e;
                return f || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(d, ""), f = F(e[d], "function"), F(e[d], "undefined") || (e[d] = c), e.removeAttribute(d))), e = null, f
            }
            var a = {
                select: "input",
                change: "input",
                submit: "form",
                reset: "form",
                error: "img",
                load: "img",
                abort: "img"
            };
            return d
        }(),
        B = {}.hasOwnProperty,
        C;
    !F(B, "undefined") && !F(B.call, "undefined") ? C = function(a, b) {
        return B.call(a, b)
    } : C = function(a, b) {
        return b in a && F(a.constructor.prototype[b], "undefined")
    }, Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if (typeof c != "function") throw new TypeError;
        var d = w.call(arguments, 1),
            e = function() {
                if (this instanceof e) {
                    var a = function() {};
                    a.prototype = c.prototype;
                    var f = new a,
                        g = c.apply(f, d.concat(w.call(arguments)));
                    return Object(g) === g ? g : f
                }
                return c.apply(b, d.concat(w.call(arguments)))
            };
        return e
    }), s.flexbox = function() {
        return J("flexWrap")
    }, s.flexboxlegacy = function() {
        return J("boxDirection")
    }, s.touch = function() {
        var c;
        return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : y(["@media (", n.join("touch-enabled),("), h, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
            c = a.offsetTop === 9
        }), c
    }, s.rgba = function() {
        return D("background-color:rgba(150,255,150,.5)"), G(j.backgroundColor, "rgba")
    }, s.hsla = function() {
        return D("background-color:hsla(120,40%,100%,.5)"), G(j.backgroundColor, "rgba") || G(j.backgroundColor, "hsla")
    }, s.multiplebgs = function() {
        return D("background:url(https://),url(https://),red url(https://)"), /(url\s*\(.*?){3}/.test(j.background)
    }, s.backgroundsize = function() {
        return J("backgroundSize")
    }, s.borderradius = function() {
        return J("borderRadius")
    }, s.objectfit = function() {
        return J("objectFit")
    }, s.boxshadow = function() {
        return J("boxShadow")
    }, s.textshadow = function() {
        return b.createElement("div").style.textShadow === ""
    }, s.opacity = function() {
        return E("opacity:.55"), /^0.55$/.test(j.opacity)
    }, s.cssanimations = function() {
        return J("animationName")
    }, s.csscolumns = function() {
        return J("columnCount")
    }, s.cssgradients = function() {
        var a = "background-image:",
            b = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
            c = "linear-gradient(left top,#9f9, white);";
        return D((a + "-webkit- ".split(" ").join(b + a) + n.join(c + a)).slice(0, -a.length)), G(j.backgroundImage, "gradient")
    }, s.cssreflections = function() {
        return J("boxReflect")
    }, s.csstransforms = function() {
        return !!J("transform")
    }, s.csstransforms3d = function() {
        var a = !!J("perspective");
        return a && "webkitPerspective" in g.style && y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
            a = b.offsetLeft === 9 && b.offsetHeight === 3
        }), a
    }, s.csstransitions = function() {
        return J("transition")
    }, s.generatedcontent = function() {
        var a;
        return y(["#", h, "{font:0/0 a}#", h, ':after{content:"', l, '";visibility:hidden;font:3px/1 a}'].join(""), function(b) {
            a = b.offsetHeight >= 3
        }), a
    }, s.video = function() {
        var a = b.createElement("video"),
            c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, "")
        } catch (d) {}
        return c
    }, s.audio = function() {
        var a = b.createElement("audio"),
            c = !1;
        try {
            if (c = !!a.canPlayType) c = new Boolean(c), c.ogg = a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), c.mp3 = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c.wav = a.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), c.m4a = (a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, "")
        } catch (d) {}
        return c
    }, s.svg = function() {
        return !!b.createElementNS && !!b.createElementNS(r.svg, "svg").createSVGRect
    };
    for (var K in s) C(s, K) && (x = K.toLowerCase(), e[x] = s[K](), v.push((e[x] ? "" : "no-") + x));
    return e.addTest = function(a, b) {
            if (typeof a == "object")
                for (var d in a) C(a, d) && e.addTest(d, a[d]);
            else {
                a = a.toLowerCase();
                if (e[a] !== c) return e;
                b = typeof b == "function" ? b() : b, typeof f != "undefined" && f && (g.className += " " + (b ? "" : "no-") + a), e[a] = b
            }
            return e
        }, D(""), i = k = null,
        function(a, b) {
            function l(a, b) {
                var c = a.createElement("p"),
                    d = a.getElementsByTagName("head")[0] || a.documentElement;
                return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
            }

            function m() {
                var a = s.elements;
                return typeof a == "string" ? a.split(" ") : a
            }

            function n(a) {
                var b = j[a[h]];
                return b || (b = {}, i++, a[h] = i, j[i] = b), b
            }

            function o(a, c, d) {
                c || (c = b);
                if (k) return c.createElement(a);
                d || (d = n(c));
                var g;
                return d.cache[a] ? g = d.cache[a].cloneNode() : f.test(a) ? g = (d.cache[a] = d.createElem(a)).cloneNode() : g = d.createElem(a), g.canHaveChildren && !e.test(a) && !g.tagUrn ? d.frag.appendChild(g) : g
            }

            function p(a, c) {
                a || (a = b);
                if (k) return a.createDocumentFragment();
                c = c || n(a);
                var d = c.frag.cloneNode(),
                    e = 0,
                    f = m(),
                    g = f.length;
                for (; e < g; e++) d.createElement(f[e]);
                return d
            }

            function q(a, b) {
                b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
                    return s.shivMethods ? o(c, a, b) : b.createElem(c)
                }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + m().join().replace(/[\w\-]+/g, function(a) {
                    return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
                }) + ");return n}")(s, b.frag)
            }

            function r(a) {
                a || (a = b);
                var c = n(a);
                return s.shivCSS && !g && !c.hasCSS && (c.hasCSS = !!l(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), k || q(a, c), a
            }
            var c = "3.7.0",
                d = a.html5 || {},
                e = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
                f = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
                g, h = "_html5shiv",
                i = 0,
                j = {},
                k;
            (function() {
                try {
                    var a = b.createElement("a");
                    a.innerHTML = "<xyz></xyz>", g = "hidden" in a, k = a.childNodes.length == 1 || function() {
                        b.createElement("a");
                        var a = b.createDocumentFragment();
                        return typeof a.cloneNode == "undefined" || typeof a.createDocumentFragment == "undefined" || typeof a.createElement == "undefined"
                    }()
                } catch (c) {
                    g = !0, k = !0
                }
            })();
            var s = {
                elements: d.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
                version: c,
                shivCSS: d.shivCSS !== !1,
                supportsUnknownElements: k,
                shivMethods: d.shivMethods !== !1,
                type: "default",
                shivDocument: r,
                createElement: o,
                createDocumentFragment: p
            };
            a.html5 = s, r(b)
        }(this, b), e._version = d, e._prefixes = n, e._domPrefixes = q, e._cssomPrefixes = p, e.mq = z, e.hasEvent = A, e.testProp = function(a) {
            return H([a])
        }, e.testAllProps = J, e.testStyles = y, e.prefixed = function(a, b, c) {
            return b ? J(a, b, c) : J(a, "pfx")
        }, g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (f ? " js " + v.join(" ") : ""), e
}(this, this.document);

/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 JÃ¶rn Zaefferer
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */

(function($) {

$.extend($.fn, {
    // http://docs.jquery.com/Plugins/Validation/validate
    validate: function( options ) {

        // if nothing is selected, return nothing; can't chain anyway
        if ( !this.length ) {
            if ( options && options.debug && window.console ) {
                console.warn( "Nothing selected, can't validate, returning nothing." );
            }
            return;
        }

        // check if a validator for this form was already created
        var validator = $.data( this[0], "validator" );
        if ( validator ) {
            return validator;
        }

        // Add novalidate tag if HTML5.
        this.attr( "novalidate", "novalidate" );

        validator = new $.validator( options, this[0] );
        $.data( this[0], "validator", validator );

        if ( validator.settings.onsubmit ) {

            this.validateDelegate( ":submit", "click", function( event ) {
                if ( validator.settings.submitHandler ) {
                    validator.submitButton = event.target;
                }
                // allow suppressing validation by adding a cancel class to the submit button
                if ( $(event.target).hasClass("cancel") ) {
                    validator.cancelSubmit = true;
                }

                // allow suppressing validation by adding the html5 formnovalidate attribute to the submit button
                if ( $(event.target).attr("formnovalidate") !== undefined ) {
                    validator.cancelSubmit = true;
                }
            });

            // validate the form on submit
            this.submit( function( event ) {
                if ( validator.settings.debug ) {
                    // prevent form submit to be able to see console output
                    event.preventDefault();
                }
                function handle() {
                    var hidden;
                    if ( validator.settings.submitHandler ) {
                        if ( validator.submitButton ) {
                            // insert a hidden input as a replacement for the missing submit button
                            hidden = $("<input type='hidden'/>").attr("name", validator.submitButton.name).val( $(validator.submitButton).val() ).appendTo(validator.currentForm);
                        }
                        validator.settings.submitHandler.call( validator, validator.currentForm, event );
                        if ( validator.submitButton ) {
                            // and clean up afterwards; thanks to no-block-scope, hidden can be referenced
                            hidden.remove();
                        }
                        return false;
                    }
                    return true;
                }

                // prevent submit for invalid forms or custom submit handlers
                if ( validator.cancelSubmit ) {
                    validator.cancelSubmit = false;
                    return handle();
                }
                if ( validator.form() ) {
                    if ( validator.pendingRequest ) {
                        validator.formSubmitted = true;
                        return false;
                    }
                    return handle();
                } else {
                    validator.focusInvalid();
                    return false;
                }
            });
        }

        return validator;
    },
    // http://docs.jquery.com/Plugins/Validation/valid
    valid: function() {
        if ( $(this[0]).is("form")) {
            return this.validate().form();
        } else {
            var valid = true;
            var validator = $(this[0].form).validate();
            this.each(function() {
                valid = valid && validator.element(this);
            });
            return valid;
        }
    },
    // attributes: space seperated list of attributes to retrieve and remove
    removeAttrs: function( attributes ) {
        var result = {},
            $element = this;
        $.each(attributes.split(/\s/), function( index, value ) {
            result[value] = $element.attr(value);
            $element.removeAttr(value);
        });
        return result;
    },
    // http://docs.jquery.com/Plugins/Validation/rules
    rules: function( command, argument ) {
        var element = this[0];

        if ( command ) {
            var settings = $.data(element.form, "validator").settings;
            var staticRules = settings.rules;
            var existingRules = $.validator.staticRules(element);
            switch(command) {
            case "add":
                $.extend(existingRules, $.validator.normalizeRule(argument));
                // remove messages from rules, but allow them to be set separetely
                delete existingRules.messages;
                staticRules[element.name] = existingRules;
                if ( argument.messages ) {
                    settings.messages[element.name] = $.extend( settings.messages[element.name], argument.messages );
                }
                break;
            case "remove":
                if ( !argument ) {
                    delete staticRules[element.name];
                    return existingRules;
                }
                var filtered = {};
                $.each(argument.split(/\s/), function( index, method ) {
                    filtered[method] = existingRules[method];
                    delete existingRules[method];
                });
                return filtered;
            }
        }

        var data = $.validator.normalizeRules(
        $.extend(
            {},
            $.validator.classRules(element),
            $.validator.attributeRules(element),
            $.validator.dataRules(element),
            $.validator.staticRules(element)
        ), element);

        // make sure required is at front
        if ( data.required ) {
            var param = data.required;
            delete data.required;
            data = $.extend({required: param}, data);
        }

        return data;
    }
});

// Custom selectors
$.extend($.expr[":"], {
    // http://docs.jquery.com/Plugins/Validation/blank
    blank: function( a ) { return !$.trim("" + $(a).val()); },
    // http://docs.jquery.com/Plugins/Validation/filled
    filled: function( a ) { return !!$.trim("" + $(a).val()); },
    // http://docs.jquery.com/Plugins/Validation/unchecked
    unchecked: function( a ) { return !$(a).prop("checked"); }
});

// constructor for validator
$.validator = function( options, form ) {
    this.settings = $.extend( true, {}, $.validator.defaults, options );
    this.currentForm = form;
    this.init();
};

$.validator.format = function( source, params ) {
    if ( arguments.length === 1 ) {
        return function() {
            var args = $.makeArray(arguments);
            args.unshift(source);
            return $.validator.format.apply( this, args );
        };
    }
    if ( arguments.length > 2 && params.constructor !== Array  ) {
        params = $.makeArray(arguments).slice(1);
    }
    if ( params.constructor !== Array ) {
        params = [ params ];
    }
    $.each(params, function( i, n ) {
        source = source.replace( new RegExp("\\{" + i + "\\}", "g"), function() {
            return n;
        });
    });
    return source;
};

$.extend($.validator, {

    defaults: {
        messages: {},
        groups: {},
        rules: {},
        errorClass: "error",
        validClass: "valid",
        errorElement: "label",
        focusInvalid: true,
        errorContainer: $([]),
        errorLabelContainer: $([]),
        onsubmit: true,
        ignore: ":hidden",
        ignoreTitle: false,
        onfocusin: function( element, event ) {
            this.lastActive = element;

            // hide error label and remove error class on focus if enabled
            if ( this.settings.focusCleanup && !this.blockFocusCleanup ) {
                if ( this.settings.unhighlight ) {
                    this.settings.unhighlight.call( this, element, this.settings.errorClass, this.settings.validClass );
                }
                this.addWrapper(this.errorsFor(element)).hide();
            }
        },
        onfocusout: function( element, event ) {
            if ( !this.checkable(element) && (element.name in this.submitted || !this.optional(element)) ) {
                this.element(element);
            }
        },
        onkeyup: function( element, event ) {
            if ( event.which === 9 && this.elementValue(element) === "" ) {
                return;
            } else if ( element.name in this.submitted || element === this.lastElement ) {
                this.element(element);
            }
        },
        onclick: function( element, event ) {
            // click on selects, radiobuttons and checkboxes
            if ( element.name in this.submitted ) {
                this.element(element);
            }
            // or option elements, check parent select in that case
            else if ( element.parentNode.name in this.submitted ) {
                this.element(element.parentNode);
            }
        },
        highlight: function( element, errorClass, validClass ) {
            if ( element.type === "radio" ) {
                this.findByName(element.name).addClass(errorClass).removeClass(validClass);
            } else {
                $(element).addClass(errorClass).removeClass(validClass);
            }
        },
        unhighlight: function( element, errorClass, validClass ) {
            if ( element.type === "radio" ) {
                this.findByName(element.name).removeClass(errorClass).addClass(validClass);
            } else {
                $(element).removeClass(errorClass).addClass(validClass);
            }
        }
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/setDefaults
    setDefaults: function( settings ) {
        $.extend( $.validator.defaults, settings );
    },

    messages: {
        required: "This field is required.",
        remote: "Please fix this field.",
        email: "Please enter a valid email address.",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        maxlength: $.validator.format("Please enter no more than {0} characters."),
        minlength: $.validator.format("Please enter at least {0} characters."),
        rangelength: $.validator.format("Please enter a value between {0} and {1} characters long."),
        range: $.validator.format("Please enter a value between {0} and {1}."),
        max: $.validator.format("Please enter a value less than or equal to {0}."),
        min: $.validator.format("Please enter a value greater than or equal to {0}.")
    },

    autoCreateRanges: false,

    prototype: {

        init: function() {
            this.labelContainer = $(this.settings.errorLabelContainer);
            this.errorContext = this.labelContainer.length && this.labelContainer || $(this.currentForm);
            this.containers = $(this.settings.errorContainer).add( this.settings.errorLabelContainer );
            this.submitted = {};
            this.valueCache = {};
            this.pendingRequest = 0;
            this.pending = {};
            this.invalid = {};
            this.reset();

            var groups = (this.groups = {});
            $.each(this.settings.groups, function( key, value ) {
                if ( typeof value === "string" ) {
                    value = value.split(/\s/);
                }
                $.each(value, function( index, name ) {
                    groups[name] = key;
                });
            });
            var rules = this.settings.rules;
            $.each(rules, function( key, value ) {
                rules[key] = $.validator.normalizeRule(value);
            });

            function delegate(event) {
                var validator = $.data(this[0].form, "validator"),
                    eventType = "on" + event.type.replace(/^validate/, "");
                if ( validator.settings[eventType] ) {
                    validator.settings[eventType].call(validator, this[0], event);
                }
            }
            $(this.currentForm)
                .validateDelegate(":text, [type='password'], [type='file'], select, textarea, " +
                    "[type='number'], [type='search'] ,[type='tel'], [type='url'], " +
                    "[type='email'], [type='datetime'], [type='date'], [type='month'], " +
                    "[type='week'], [type='time'], [type='datetime-local'], " +
                    "[type='range'], [type='color'] ",
                    "focusin focusout keyup", delegate)
                .validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", delegate);

            if ( this.settings.invalidHandler ) {
                $(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
            }
        },

        // http://docs.jquery.com/Plugins/Validation/Validator/form
        form: function() {
            this.checkForm();
            $.extend(this.submitted, this.errorMap);
            this.invalid = $.extend({}, this.errorMap);
            if ( !this.valid() ) {
                $(this.currentForm).triggerHandler("invalid-form", [this]);
            }
            this.showErrors();
            return this.valid();
        },

        checkForm: function() {
            this.prepareForm();
            for ( var i = 0, elements = (this.currentElements = this.elements()); elements[i]; i++ ) {
                this.check( elements[i] );
            }
            return this.valid();
        },

        // http://docs.jquery.com/Plugins/Validation/Validator/element
        element: function( element ) {
            element = this.validationTargetFor( this.clean( element ) );
            this.lastElement = element;
            this.prepareElement( element );
            this.currentElements = $(element);
            var result = this.check( element ) !== false;
            if ( result ) {
                delete this.invalid[element.name];
            } else {
                this.invalid[element.name] = true;
            }
            if ( !this.numberOfInvalids() ) {
                // Hide error containers on last error
                this.toHide = this.toHide.add( this.containers );
            }
            this.showErrors();
            return result;
        },

        // http://docs.jquery.com/Plugins/Validation/Validator/showErrors
        showErrors: function( errors ) {
            if ( errors ) {
                // add items to error list and map
                $.extend( this.errorMap, errors );
                this.errorList = [];
                for ( var name in errors ) {
                    this.errorList.push({
                        message: errors[name],
                        element: this.findByName(name)[0]
                    });
                }
                // remove items from success list
                this.successList = $.grep( this.successList, function( element ) {
                    return !(element.name in errors);
                });
            }
            if ( this.settings.showErrors ) {
                this.settings.showErrors.call( this, this.errorMap, this.errorList );
            } else {
                this.defaultShowErrors();
            }
        },

        // http://docs.jquery.com/Plugins/Validation/Validator/resetForm
        resetForm: function() {
            if ( $.fn.resetForm ) {
                $(this.currentForm).resetForm();
            }
            this.submitted = {};
            this.lastElement = null;
            this.prepareForm();
            this.hideErrors();
            this.elements().removeClass( this.settings.errorClass ).removeData( "previousValue" );
        },

        numberOfInvalids: function() {
            return this.objectLength(this.invalid);
        },

        objectLength: function( obj ) {
            var count = 0;
            for ( var i in obj ) {
                count++;
            }
            return count;
        },

        hideErrors: function() {
            this.addWrapper( this.toHide ).hide();
        },

        valid: function() {
            return this.size() === 0;
        },

        size: function() {
            return this.errorList.length;
        },

        focusInvalid: function() {
            if ( this.settings.focusInvalid ) {
                try {
                    $(this.findLastActive() || this.errorList.length && this.errorList[0].element || [])
                    .filter(":visible")
                    .focus()
                    // manually trigger focusin event; without it, focusin handler isn't called, findLastActive won't have anything to find
                    .trigger("focusin");
                } catch(e) {
                    // ignore IE throwing errors when focusing hidden elements
                }
            }
        },

        findLastActive: function() {
            var lastActive = this.lastActive;
            return lastActive && $.grep(this.errorList, function( n ) {
                return n.element.name === lastActive.name;
            }).length === 1 && lastActive;
        },

        elements: function() {
            var validator = this,
                rulesCache = {};

            // select all valid inputs inside the form (no submit or reset buttons)
            return $(this.currentForm)
            .find("input, select, textarea")
            .not(":submit, :reset, :image, [disabled]")
            .not( this.settings.ignore )
            .filter(function() {
                if ( !this.name && validator.settings.debug && window.console ) {
                    console.error( "%o has no name assigned", this);
                }

                // select only the first element for each name, and only those with rules specified
                if ( this.name in rulesCache || !validator.objectLength($(this).rules()) ) {
                    return false;
                }

                rulesCache[this.name] = true;
                return true;
            });
        },

        clean: function( selector ) {
            return $(selector)[0];
        },

        errors: function() {
            var errorClass = this.settings.errorClass.replace(" ", ".");
            return $(this.settings.errorElement + "." + errorClass, this.errorContext);
        },

        reset: function() {
            this.successList = [];
            this.errorList = [];
            this.errorMap = {};
            this.toShow = $([]);
            this.toHide = $([]);
            this.currentElements = $([]);
        },

        prepareForm: function() {
            this.reset();
            this.toHide = this.errors().add( this.containers );
        },

        prepareElement: function( element ) {
            this.reset();
            this.toHide = this.errorsFor(element);
        },

        elementValue: function( element ) {
            var type = $(element).attr("type"),
                val = $(element).val();

            if ( type === "radio" || type === "checkbox" ) {
                return $("input[name='" + $(element).attr("name") + "']:checked").val();
            }

            if ( typeof val === "string" ) {
                return val.replace(/\r/g, "");
            }
            return val;
        },

        check: function( element ) {
            element = this.validationTargetFor( this.clean( element ) );

            var rules = $(element).rules();
            var dependencyMismatch = false;
            var val = this.elementValue(element);
            var result;

            for (var method in rules ) {
                var rule = { method: method, parameters: rules[method] };
                try {

                    result = $.validator.methods[method].call( this, val, element, rule.parameters );

                    // if a method indicates that the field is optional and therefore valid,
                    // don't mark it as valid when there are no other rules
                    if ( result === "dependency-mismatch" ) {
                        dependencyMismatch = true;
                        continue;
                    }
                    dependencyMismatch = false;

                    if ( result === "pending" ) {
                        this.toHide = this.toHide.not( this.errorsFor(element) );
                        return;
                    }

                    if ( !result ) {
                        this.formatAndAdd( element, rule );
                        return false;
                    }
                } catch(e) {
                    if ( this.settings.debug && window.console ) {
                        console.log( "Exception occurred when checking element " + element.id + ", check the '" + rule.method + "' method.", e );
                    }
                    throw e;
                }
            }
            if ( dependencyMismatch ) {
                return;
            }
            if ( this.objectLength(rules) ) {
                this.successList.push(element);
            }
            return true;
        },

        // return the custom message for the given element and validation method
        // specified in the element's HTML5 data attribute
        customDataMessage: function( element, method ) {
            return $(element).data("msg-" + method.toLowerCase()) || (element.attributes && $(element).attr("data-msg-" + method.toLowerCase()));
        },

        // return the custom message for the given element name and validation method
        customMessage: function( name, method ) {
            var m = this.settings.messages[name];
            return m && (m.constructor === String ? m : m[method]);
        },

        // return the first defined argument, allowing empty strings
        findDefined: function() {
            for(var i = 0; i < arguments.length; i++) {
                if ( arguments[i] !== undefined ) {
                    return arguments[i];
                }
            }
            return undefined;
        },

        defaultMessage: function( element, method ) {
            return this.findDefined(
                this.customMessage( element.name, method ),
                this.customDataMessage( element, method ),
                // title is never undefined, so handle empty string as undefined
                !this.settings.ignoreTitle && element.title || undefined,
                $.validator.messages[method],
                "<strong>Warning: No message defined for " + element.name + "</strong>"
            );
        },

        formatAndAdd: function( element, rule ) {
            var message = this.defaultMessage( element, rule.method ),
                theregex = /\$?\{(\d+)\}/g;
            if ( typeof message === "function" ) {
                message = message.call(this, rule.parameters, element);
            } else if (theregex.test(message)) {
                message = $.validator.format(message.replace(theregex, "{$1}"), rule.parameters);
            }
            this.errorList.push({
                message: message,
                element: element
            });

            this.errorMap[element.name] = message;
            this.submitted[element.name] = message;
        },

        addWrapper: function( toToggle ) {
            if ( this.settings.wrapper ) {
                toToggle = toToggle.add( toToggle.parent( this.settings.wrapper ) );
            }
            return toToggle;
        },

        defaultShowErrors: function() {
            var i, elements;
            for ( i = 0; this.errorList[i]; i++ ) {
                var error = this.errorList[i];
                if ( this.settings.highlight ) {
                    this.settings.highlight.call( this, error.element, this.settings.errorClass, this.settings.validClass );
                }
                this.showLabel( error.element, error.message );
            }
            if ( this.errorList.length ) {
                this.toShow = this.toShow.add( this.containers );
            }
            if ( this.settings.success ) {
                for ( i = 0; this.successList[i]; i++ ) {
                    this.showLabel( this.successList[i] );
                }
            }
            if ( this.settings.unhighlight ) {
                for ( i = 0, elements = this.validElements(); elements[i]; i++ ) {
                    this.settings.unhighlight.call( this, elements[i], this.settings.errorClass, this.settings.validClass );
                }
            }
            this.toHide = this.toHide.not( this.toShow );
            this.hideErrors();
            this.addWrapper( this.toShow ).show();
        },

        validElements: function() {
            return this.currentElements.not(this.invalidElements());
        },

        invalidElements: function() {
            return $(this.errorList).map(function() {
                return this.element;
            });
        },

        showLabel: function( element, message ) {
            var label = this.errorsFor( element );
            if ( label.length ) {
                // refresh error/success class
                label.removeClass( this.settings.validClass ).addClass( this.settings.errorClass );
                // replace message on existing label
                label.html(message);
            } else {
                // create label
                label = $("<" + this.settings.errorElement + ">")
                    .attr("for", this.idOrName(element))
                    .addClass(this.settings.errorClass)
                    .html(message || "");
                if ( this.settings.wrapper ) {
                    // make sure the element is visible, even in IE
                    // actually showing the wrapped element is handled elsewhere
                    label = label.hide().show().wrap("<" + this.settings.wrapper + "/>").parent();
                }
                if ( !this.labelContainer.append(label).length ) {
                    if ( this.settings.errorPlacement ) {
                        this.settings.errorPlacement(label, $(element) );
                    } else {
                        label.insertAfter(element);
                    }
                }
            }
            if ( !message && this.settings.success ) {
                label.text("");
                if ( typeof this.settings.success === "string" ) {
                    label.addClass( this.settings.success );
                } else {
                    this.settings.success( label, element );
                }
            }
            this.toShow = this.toShow.add(label);
        },

        errorsFor: function( element ) {
            var name = this.idOrName(element);
            return this.errors().filter(function() {
                return $(this).attr("for") === name;
            });
        },

        idOrName: function( element ) {
            return this.groups[element.name] || (this.checkable(element) ? element.name : element.id || element.name);
        },

        validationTargetFor: function( element ) {
            // if radio/checkbox, validate first element in group instead
            if ( this.checkable(element) ) {
                element = this.findByName( element.name ).not(this.settings.ignore)[0];
            }
            return element;
        },

        checkable: function( element ) {
            return (/radio|checkbox/i).test(element.type);
        },

        findByName: function( name ) {
            return $(this.currentForm).find("[name='" + name + "']");
        },

        getLength: function( value, element ) {
            switch( element.nodeName.toLowerCase() ) {
            case "select":
                return $("option:selected", element).length;
            case "input":
                if ( this.checkable( element) ) {
                    return this.findByName(element.name).filter(":checked").length;
                }
            }
            return value.length;
        },

        depend: function( param, element ) {
            return this.dependTypes[typeof param] ? this.dependTypes[typeof param](param, element) : true;
        },

        dependTypes: {
            "boolean": function( param, element ) {
                return param;
            },
            "string": function( param, element ) {
                return !!$(param, element.form).length;
            },
            "function": function( param, element ) {
                return param(element);
            }
        },

        optional: function( element ) {
            var val = this.elementValue(element);
            return !$.validator.methods.required.call(this, val, element) && "dependency-mismatch";
        },

        startRequest: function( element ) {
            if ( !this.pending[element.name] ) {
                this.pendingRequest++;
                this.pending[element.name] = true;
            }
        },

        stopRequest: function( element, valid ) {
            this.pendingRequest--;
            // sometimes synchronization fails, make sure pendingRequest is never < 0
            if ( this.pendingRequest < 0 ) {
                this.pendingRequest = 0;
            }
            delete this.pending[element.name];
            if ( valid && this.pendingRequest === 0 && this.formSubmitted && this.form() ) {
                $(this.currentForm).submit();
                this.formSubmitted = false;
            } else if (!valid && this.pendingRequest === 0 && this.formSubmitted) {
                $(this.currentForm).triggerHandler("invalid-form", [this]);
                this.formSubmitted = false;
            }
        },

        previousValue: function( element ) {
            return $.data(element, "previousValue") || $.data(element, "previousValue", {
                old: null,
                valid: true,
                message: this.defaultMessage( element, "remote" )
            });
        }

    },

    classRuleSettings: {
        required: {required: true},
        email: {email: true},
        url: {url: true},
        date: {date: true},
        dateISO: {dateISO: true},
        number: {number: true},
        digits: {digits: true},
        creditcard: {creditcard: true}
    },

    addClassRules: function( className, rules ) {
        if ( className.constructor === String ) {
            this.classRuleSettings[className] = rules;
        } else {
            $.extend(this.classRuleSettings, className);
        }
    },

    classRules: function( element ) {
        var rules = {};
        var classes = $(element).attr("class");
        if ( classes ) {
            $.each(classes.split(" "), function() {
                if ( this in $.validator.classRuleSettings ) {
                    $.extend(rules, $.validator.classRuleSettings[this]);
                }
            });
        }
        return rules;
    },

    attributeRules: function( element ) {
        var rules = {};
        var $element = $(element);
        var type = $element[0].getAttribute("type");

        for (var method in $.validator.methods) {
            var value;

            // support for <input required> in both html5 and older browsers
            if ( method === "required" ) {
                value = $element.get(0).getAttribute(method);
                // Some browsers return an empty string for the required attribute
                // and non-HTML5 browsers might have required="" markup
                if ( value === "" ) {
                    value = true;
                }
                // force non-HTML5 browsers to return bool
                value = !!value;
            } else {
                value = $element.attr(method);
            }

            // convert the value to a number for number inputs, and for text for backwards compability
            // allows type="date" and others to be compared as strings
            if ( /min|max/.test( method ) && ( type === null || /number|range|text/.test( type ) ) ) {
                value = Number(value);
            }

            if ( value ) {
                rules[method] = value;
            } else if ( type === method && type !== 'range' ) {
                // exception: the jquery validate 'range' method
                // does not test for the html5 'range' type
                rules[method] = true;
            }
        }

        // maxlength may be returned as -1, 2147483647 (IE) and 524288 (safari) for text inputs
        if ( rules.maxlength && /-1|2147483647|524288/.test(rules.maxlength) ) {
            delete rules.maxlength;
        }

        return rules;
    },

    dataRules: function( element ) {
        var method, value,
            rules = {}, $element = $(element);
        for (method in $.validator.methods) {
            value = $element.data("rule-" + method.toLowerCase());
            if ( value !== undefined ) {
                rules[method] = value;
            }
        }
        return rules;
    },

    staticRules: function( element ) {
        var rules = {};
        var validator = $.data(element.form, "validator");
        if ( validator.settings.rules ) {
            rules = $.validator.normalizeRule(validator.settings.rules[element.name]) || {};
        }
        return rules;
    },

    normalizeRules: function( rules, element ) {
        // handle dependency check
        $.each(rules, function( prop, val ) {
            // ignore rule when param is explicitly false, eg. required:false
            if ( val === false ) {
                delete rules[prop];
                return;
            }
            if ( val.param || val.depends ) {
                var keepRule = true;
                switch (typeof val.depends) {
                case "string":
                    keepRule = !!$(val.depends, element.form).length;
                    break;
                case "function":
                    keepRule = val.depends.call(element, element);
                    break;
                }
                if ( keepRule ) {
                    rules[prop] = val.param !== undefined ? val.param : true;
                } else {
                    delete rules[prop];
                }
            }
        });

        // evaluate parameters
        $.each(rules, function( rule, parameter ) {
            rules[rule] = $.isFunction(parameter) ? parameter(element) : parameter;
        });

        // clean number parameters
        $.each(['minlength', 'maxlength'], function() {
            if ( rules[this] ) {
                rules[this] = Number(rules[this]);
            }
        });
        $.each(['rangelength', 'range'], function() {
            var parts;
            if ( rules[this] ) {
                if ( $.isArray(rules[this]) ) {
                    rules[this] = [Number(rules[this][0]), Number(rules[this][1])];
                } else if ( typeof rules[this] === "string" ) {
                    parts = rules[this].split(/[\s,]+/);
                    rules[this] = [Number(parts[0]), Number(parts[1])];
                }
            }
        });

        if ( $.validator.autoCreateRanges ) {
            // auto-create ranges
            if ( rules.min && rules.max ) {
                rules.range = [rules.min, rules.max];
                delete rules.min;
                delete rules.max;
            }
            if ( rules.minlength && rules.maxlength ) {
                rules.rangelength = [rules.minlength, rules.maxlength];
                delete rules.minlength;
                delete rules.maxlength;
            }
        }

        return rules;
    },

    // Converts a simple string to a {string: true} rule, e.g., "required" to {required:true}
    normalizeRule: function( data ) {
        if ( typeof data === "string" ) {
            var transformed = {};
            $.each(data.split(/\s/), function() {
                transformed[this] = true;
            });
            data = transformed;
        }
        return data;
    },

    // http://docs.jquery.com/Plugins/Validation/Validator/addMethod
    addMethod: function( name, method, message ) {
        $.validator.methods[name] = method;
        $.validator.messages[name] = message !== undefined ? message : $.validator.messages[name];
        if ( method.length < 3 ) {
            $.validator.addClassRules(name, $.validator.normalizeRule(name));
        }
    },

    methods: {

        // http://docs.jquery.com/Plugins/Validation/Methods/required
        required: function( value, element, param ) {
            // check if dependency is met
            if ( !this.depend(param, element) ) {
                return "dependency-mismatch";
            }
            if ( element.nodeName.toLowerCase() === "select" ) {
                // could be an array for select-multiple or a string, both are fine this way
                var val = $(element).val();
                return val && val.length > 0;
            }
            if ( this.checkable(element) ) {
                return this.getLength(value, element) > 0;
            }
            return $.trim(value).length > 0;
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/email
        email: function( value, element ) {
            // contributed by Scott Gonzalez: http://projects.scottsplayground.com/email_address_validation/
            return this.optional(element) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(value);
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/url
        url: function( value, element ) {
            // contributed by Scott Gonzalez: http://projects.scottsplayground.com/iri/
            return this.optional(element) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(value);
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/date
        date: function( value, element ) {
            return this.optional(element) || !/Invalid|NaN/.test(new Date(value).toString());
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/dateISO
        dateISO: function( value, element ) {
            return this.optional(element) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(value);
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/number
        number: function( value, element ) {
            return this.optional(element) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(value);
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/digits
        digits: function( value, element ) {
            return this.optional(element) || /^\d+$/.test(value);
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/creditcard
        // based on http://en.wikipedia.org/wiki/Luhn
        creditcard: function( value, element ) {
            if ( this.optional(element) ) {
                return "dependency-mismatch";
            }
            // accept only spaces, digits and dashes
            if ( /[^0-9 \-]+/.test(value) ) {
                return false;
            }
            var nCheck = 0,
                nDigit = 0,
                bEven = false;

            value = value.replace(/\D/g, "");

            for (var n = value.length - 1; n >= 0; n--) {
                var cDigit = value.charAt(n);
                nDigit = parseInt(cDigit, 10);
                if ( bEven ) {
                    if ( (nDigit *= 2) > 9 ) {
                        nDigit -= 9;
                    }
                }
                nCheck += nDigit;
                bEven = !bEven;
            }

            return (nCheck % 10) === 0;
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/minlength
        minlength: function( value, element, param ) {
            var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
            return this.optional(element) || length >= param;
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/maxlength
        maxlength: function( value, element, param ) {
            var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
            return this.optional(element) || length <= param;
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/rangelength
        rangelength: function( value, element, param ) {
            var length = $.isArray( value ) ? value.length : this.getLength($.trim(value), element);
            return this.optional(element) || ( length >= param[0] && length <= param[1] );
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/min
        min: function( value, element, param ) {
            return this.optional(element) || value >= param;
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/max
        max: function( value, element, param ) {
            return this.optional(element) || value <= param;
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/range
        range: function( value, element, param ) {
            return this.optional(element) || ( value >= param[0] && value <= param[1] );
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/equalTo
        equalTo: function( value, element, param ) {
            // bind to the blur event of the target in order to revalidate whenever the target field is updated
            // TODO find a way to bind the event just once, avoiding the unbind-rebind overhead
            var target = $(param);
            if ( this.settings.onfocusout ) {
                target.unbind(".validate-equalTo").bind("blur.validate-equalTo", function() {
                    $(element).valid();
                });
            }
            return value === target.val();
        },

        // http://docs.jquery.com/Plugins/Validation/Methods/remote
        remote: function( value, element, param ) {
            if ( this.optional(element) ) {
                return "dependency-mismatch";
            }

            var previous = this.previousValue(element);
            if (!this.settings.messages[element.name] ) {
                this.settings.messages[element.name] = {};
            }
            previous.originalMessage = this.settings.messages[element.name].remote;
            this.settings.messages[element.name].remote = previous.message;

            param = typeof param === "string" && {url:param} || param;

            if ( previous.old === value ) {
                return previous.valid;
            }

            previous.old = value;
            var validator = this;
            this.startRequest(element);
            var data = {};
            data[element.name] = value;
            $.ajax($.extend(true, {
                url: param,
                mode: "abort",
                port: "validate" + element.name,
                dataType: "json",
                data: data,
                success: function( response ) {
                    validator.settings.messages[element.name].remote = previous.originalMessage;
                    var valid = response === true || response === "true";
                    if ( valid ) {
                        var submitted = validator.formSubmitted;
                        validator.prepareElement(element);
                        validator.formSubmitted = submitted;
                        validator.successList.push(element);
                        delete validator.invalid[element.name];
                        validator.showErrors();
                    } else {
                        var errors = {};
                        var message = response || validator.defaultMessage( element, "remote" );
                        errors[element.name] = previous.message = $.isFunction(message) ? message(value) : message;
                        validator.invalid[element.name] = true;
                        validator.showErrors(errors);
                    }
                    previous.valid = valid;
                    validator.stopRequest(element, valid);
                }
            }, param));
            return "pending";
        }

    }

});

// deprecated, use $.validator.format instead
$.format = $.validator.format;

}(jQuery));

// ajax mode: abort
// usage: $.ajax({ mode: "abort"[, port: "uniqueport"]});
// if mode:"abort" is used, the previous request on that port (port can be undefined) is aborted via XMLHttpRequest.abort()
(function($) {
    var pendingRequests = {};
    // Use a prefilter if available (1.5+)
    if ( $.ajaxPrefilter ) {
        $.ajaxPrefilter(function( settings, _, xhr ) {
            var port = settings.port;
            if ( settings.mode === "abort" ) {
                if ( pendingRequests[port] ) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = xhr;
            }
        });
    } else {
        // Proxy ajax
        var ajax = $.ajax;
        $.ajax = function( settings ) {
            var mode = ( "mode" in settings ? settings : $.ajaxSettings ).mode,
                port = ( "port" in settings ? settings : $.ajaxSettings ).port;
            if ( mode === "abort" ) {
                if ( pendingRequests[port] ) {
                    pendingRequests[port].abort();
                }
                pendingRequests[port] = ajax.apply(this, arguments);
                return pendingRequests[port];
            }
            return ajax.apply(this, arguments);
        };
    }
}(jQuery));

// provides delegate(type: String, delegate: Selector, handler: Callback) plugin for easier event delegation
// handler is only called when $(event.target).is(delegate), in the scope of the jquery-object for event.target
(function($) {
    $.extend($.fn, {
        validateDelegate: function( delegate, type, handler ) {
            return this.bind(type, function( event ) {
                var target = $(event.target);
                if ( target.is(delegate) ) {
                    return handler.apply(target, arguments);
                }
            });
        }
    });
}(jQuery));

jQuery.extend(jQuery.validator.messages, {
    required: PP_GLOBAL_JS_STRINGS["MESSAGE_REQUIRED"],
    remote: PP_GLOBAL_JS_STRINGS["MESSAGE_REMOTE"],
    email: PP_GLOBAL_JS_STRINGS["MESSAGE_EMAIL"],
    url: PP_GLOBAL_JS_STRINGS["MESSAGE_URL"],
    date: PP_GLOBAL_JS_STRINGS["MESSAGE_DATE"],
    dateISO: PP_GLOBAL_JS_STRINGS["MESSAGE_DATEISO"],
    number: PP_GLOBAL_JS_STRINGS["MESSAGE_NUMBER"],
    digits: PP_GLOBAL_JS_STRINGS["MESSAGE_DIGITS"],
    creditcard: PP_GLOBAL_JS_STRINGS["MESSAGE_CREDITCARD"],
    equalTo: PP_GLOBAL_JS_STRINGS["MESSAGE_EQUALTO"],
    accept: PP_GLOBAL_JS_STRINGS["MESSAGE_ACCEPT"],
    maxlength: jQuery.validator.format(PP_GLOBAL_JS_STRINGS["MESSAGE_MAXLENGTH"]),
    minlength: jQuery.validator.format(PP_GLOBAL_JS_STRINGS["MESSAGE_MINLENGTH"]),
    rangelength: jQuery.validator.format(PP_GLOBAL_JS_STRINGS["MESSAGE_RANGELENGTH"]),
    range: jQuery.validator.format(PP_GLOBAL_JS_STRINGS["MESSAGE_RANGE"]),
    max: jQuery.validator.format(PP_GLOBAL_JS_STRINGS["MESSAGE_MAX"]),
    min: jQuery.validator.format(PP_GLOBAL_JS_STRINGS["MESSAGE_MIN"])
});

/**
 * Paypal Global JS
 * It contains all the functions used globally
 *
 */


/**
 * The PUI global namespace object
 */
if ( typeof PAYPAL == "undefined") {
	window.PAYPAL = {};
}

/**
 * Function for namespacing
 * Usage: $.fn.namespace("PAYPAL.core.widget");
 */

$.fn.namespace = function() {
	var arg = arguments, obj = null, names, i, n;
	for ( i = 0; i < arg.length; ++i) {
		names = arg[i].split(".");
		obj = window;
		for ( n = 0; n < names.length; ++n) {
			obj[names[n]] = obj[names[n]] || {};
			obj = obj[names[n]];
		}
	}
	return obj;
};

/*
 * Set up name spaces
 */

$.fn.namespace('PAYPAL.common', 'PAYPAL.core', 'PAYPAL.util', 'PAYPAL.bp', 'PAYPAL.ks', 'PAYPAL.tns', 'PAYPAL.core.util', 'PAYPAL.core.widget', 'PAYPAL.widget', 'PAYPAL.global');

//highlighting

/**
 * To hightlight an element's background color
 * The element's background color will be identified
 * Modified to #ffd683 and then brought back to original BG
 */

PAYPAL.global.Highlight = function(elem) {
	var colorTo = '#ffd683';
	var duration = 2000;
	$(elem).effect('highlight', {
		color : colorTo
	}, duration);
};

document.documentElement.className += ' jsEnabled';

//Lazy load

/**
 * lazy call of a script with callback function
 */

PAYPAL.global.lazyLoadRoot = '';
PAYPAL.global.lazyLoad = function(url, callback) {
	var scriptElt = document.createElement('script');
	scriptElt.type = "text/javascript";

	if ( typeof callback != 'undefined') {
		if (scriptElt.readyState) {//IE
			scriptElt.onreadystatechange = function() {
				if (scriptElt.readyState == 'loaded' || scriptElt.readyState == 'complete') {
					callback();
				}
			};
		} else {//Others
			scriptElt.onload = function() {
				callback();
			};
		}
	}
	scriptElt.src = PAYPAL.global.lazyLoadRoot + url;
	document.getElementsByTagName('head')[0].appendChild(scriptElt);
};

//hide show functionality

/**
 * Hides and shows an element on the page.
 *
 *  Basic Usage:
 *
 *  The basic use for this is to show and hide an element
 *  when another is clicked or changed. To make the following
 *  code display "myParagraph" when "myTrigger" is clicked
 *  you could use the following code:
 *
 *	<a id="myTrigger" href="#myParagraph">Show my paragraph</a>
 *	<p id="myParagraph">This is my paragraph.</p>
 *
 *	...
 *
 *	var myHideShow = new PAYPAL.widget.HideShow('myParagraph', 'myTrigger');
 *
 *
 *  Advanced Usage:
 *
 *  - You can hide or show an object conditionally based on
 *  an input or select element's value using the the optional
 *  value parameter.
 *
 *
 *  - You can set additional triggers which will toggle
 *  the element between hide and show. For example:
 *
 *	var myHideShow = new PAYPAL.widget.HideShow('myParagraph', 'myTrigger');
 *	myHideShow.setToggle('myAlternateToggle');
 *
 *
 *  - You can declare objects that are mutually exclusive with
 *  your hide / show instance and will automatically show when
 *  it hides and hide when it shows. For example:
 *
 *	<p id="myAntiParagraph">There is no paragraph yet.</p>
 *
 *	<a id="myTrigger" href="#myParagraph">Show paragraph</a>
 *	<p id="myParagraph">Here's the paragraph.</p>
 *
 *	...
 *
 *	var myHideShow = new PAYPAL.widget.HideShow('myParagraph', 'myTrigger');
 *	myHideShow.toggleOpposite('myAntiParagraph');
 *
 *
 *  Tips:
 *
 *  - When a hide / show element is opened both it and it's
 *  trigger elements will have an "opened" class on them
 *  which can be used to visually style them.
 *
 *  - Hide/show elements will be automatically hidden when
 *  they are created unless they have a class of opened.
 *
 *
 * @param {Object} el The element which we're hiding/showing
 * @param {Object} trigger The trigger for the hide/show action
 * @param {Object} value Hide/show only if the trigger is equal to this value (optional)
 *
 *
 */

PAYPAL.global.HideShow = function(el, trigger, value) {
	this.el = el;
	this.trigger = trigger;
	this.value = value;
	this.init();
};

PAYPAL.global.HideShow.prototype = {

	init : function() {
		// setup DOM elements
		this.el = ( typeof this.el === 'string') ? $('#' + this.el) : this.el;
		this.trigger = ( typeof this.trigger === 'string') ? $('#' + this.trigger) : this.trigger;

		// check if it should already opened, otherwise hide it
		if (this.isOpen = $(this.el).hasClass('opened')) {
			this.show();
		} else {
			this.hide();
		}
		// setup trigger events
		this.setTrigger(this.trigger);
	},

	toggle : function() {
		if (this.isOpen) {
			this.hide();
		} else {
			this.show();
		}
	},

	hide : function(el) {
		if (el) {
			this.el = el;
		}
		$(this.el).removeClass('opened');
		$(this.el).addClass('accessAid');
		$(this.trigger).removeClass('opened');
		this.isOpen = false;
		$(this.el).trigger('hide');
	},

	show : function(el) {
		if (el) {
			this.el = el;
		}
		$(this.el).removeClass('accessAid');
		$(this.el).addClass('opened');
		$(this.trigger).addClass('opened');
		this.isOpen = true;
		$(this.el).trigger('show');
	},
	setTrigger : function(trigger) {
		if (!trigger) {
			return;
		}
		//trigger = (typeof trigger === 'string') ? $('#'+trigger) : trigger[0];
		if (trigger) {

			var self = this;
			var tag = trigger.prop("tagName") && trigger.prop("tagName").toLowerCase();
			// anchors
			if (tag == 'a') {
				$(trigger).bind('click', function(e) {
					e.preventDefault();
					self.toggle();
				});
			} else if (tag == 'select') {
				$(trigger).bind('change', function(e) {
					if (self.value && self.value === this.value || !self.value && this.checked) {
						self.show();
					} else {
						self.hide();
					}
				});
				// inputs
			} else {
				$(trigger).bind('click', function(e) {
					if (self.value && self.value === this.value || !self.value && this.checked) {
						self.show();
					} else {
						self.hide();
					}
				});
			}
		}
	},
	toggleOpposite : function(el) {
		var altHideShow;
		el = ( typeof el === 'string') ? $('#' + el) : el;

		// keep the other element open if needed
		if (!this.isOpened) {
			$(el).addClass('opened');
		}
		if ( el instanceof PAYPAL.global.HideShow) {
			altHideShow = el;
		} else {
			altHideShow = new PAYPAL.global.HideShow(el);
		}

		$(el).bind('hide', function() {
			altHideShow.show(el);
		});

		$(el).bind('show', function() {
			altHideShow.hide(el);
		});
	}
};

//capture Enter

/**
 * Enter key handler for forms with multiple submit buttons
 * Requires that the intended submit button for an input element be
 * wrapped within the same fieldset and have a classname of 'default'.
 * Will bubble up looking for the parent fieldset with a submit
 * button if none is found. Will not search past the parent form element.
 *
 * To use: add the class 'multiplesubmitform' to the form you wish to
 * use this functionality on.
 *
 */

PAYPAL.global.captureEnter = function(e) {

	if (e.charCode || e.keyCode) {
		/* get which key was pressed */
		var keyPressed = e.charCode || e.keyCode;

		/* in which element were we focused */
		var target = e.target || e.srcElement;

		/* we're only interested in trapping input elements */
		var validElements = /INPUT/i;

		/* allow enter on submit fields to go through */
		var omitElements = /SUBMIT|IMAGE/i;

		var btnParent, btns;

		if ((keyPressed == 13) && (validElements.test(target.nodeName)) && (!omitElements.test(target.type))) {

			while (( target = target.parentNode)) {
				var targetNode = target.nodeName.toLowerCase();
				if (targetNode == 'form') {

					// If the form has a button with class 'default', trigger the click for that button. If not found, return true.
					//TODO: Both IF and ELSE blocks need to be re-factored for a clean solution.
					btns = $('.default', target);
					if (btns && btns.length > 0) {
						e.preventDefault();
						btns[0].click();
					}

					return true;

				} else if (targetNode == 'fieldset') {

					/* get all the default inputs/buttons that are descendants of this fieldset (includes child fieldsets as well!) */

					btns = $('.default', target);

					$(btns).each(function() {

						btnParent = $(this).parent().get(0);
						while (( btnParent = btnParent.parentNode)) {
							if (btnParent.nodeName.toLowerCase() == 'fieldset') {
								if (btnParent == target) {
									e.preventDefault();
									$(this).click();
									return true;
								} else {
									break;
								}
							}
						}
					});

				}
			}

		}
	}
};

// safe submit

/**
 * Prevents a form from being submitted more than once.
 * When the form has been submitted the "submitted" class will be added
 * to the form element, which allows for styling of form elements.
 *
 * For example you could add CSS to make the buttons look disabled after
 * the form has been submitted.
 *
 * USAGE:
 *
 *	To use SafeSubmit with your form simply add the "safeSubmit" class to the form element:
 *
 *		<form action="foo.cgi" class="safeSubmit">
 *
 */

PAYPAL.global.SafeSubmit = function() {

	$('form.safeSubmit').bind('submit', function(e) {
		if ( typeof $(this)._submitted == 'undefined') {
			$(this)._submitted = true;
			$(this).addClass('submitted');
		} else {
			e.preventDefault();
		}
	});
};

//Multiple form submit

/**
 * Setup function for getting forms with multiple submits. Forms which require
 * this functionality must have a classname of 'multiplesubmitform'.
 *
 */

PAYPAL.global.getMultipleSubmitForms = function() {
	$('.multiplesubmitform').bind('keypress', function(e) {
		PAYPAL.global.captureEnter(e);
	});
};

/**
 * Registering safe submit, hide show & capture enter functionalities
 * through a function on DOM ready
 *
 */
$(document).ready(function() {
	PAYPAL.global.getMultipleSubmitForms();
	PAYPAL.global.SafeSubmit();

	$('.hideshow').each(function() {
		var idid = $(this).attr('id');
		idid = '#' + idid;
		var anchorElems = $('a[href=' + '"' + idid + '"' + ']');
		var triggers = [];
		$(anchorElems).each(function() {
			triggers.push(this);
		});
		var hideshow = new PAYPAL.global.HideShow($(this));
		for (var j = 0; j < triggers.length; j++) {
			hideshow.setTrigger(triggers[j]);
		}
	});
});

/**
 * Function for namespacing
 * Usage: $.namespace("PAYPAL.core.widget", "tns");
 * The PAYPAL prefix is not needed but here for demonstration
 */

// Set initial namespace
if (typeof(PAYPAL) === "undefined")
{
    window.PAYPAL = {};
}

$.namespace = function() {
	var args = arguments, obj = null, names, i, n;
	for (i = 0; i < args.length; ++i)
	{
		names = args[i].split(".");
		obj = PAYPAL;
		for (n = (names[0] == "PAYPAL") ? 1 : 0; n < names.length; ++n)
		{
			obj[names[n]] = obj[names[n]] || {};
			obj = obj[names[n]];
		}
	}
	return obj;
};

// Alias function
$.fn.extend({ namespace: $.namespace });

// Set up initial namespaces
$.namespace('common', 'PAYPAL.common', 'PAYPAL.core', 'PAYPAL.util', 'PAYPAL.bp', 'PAYPAL.ks', 'PAYPAL.tns', 'PAYPAL.core.util', 'PAYPAL.core.widget', 'PAYPAL.widget', 'PAYPAL.global');

/**
 * Live 63.0 version
 */

/**
 * Flash based tools
 */
/**
 * Flash tools
 */

PAYPAL.core.Flash = {
	/**
	 * Insert a flash video if supported or an image if not.
	 * @param {String} flash The flash movie URL
	 * @param {int} width The width of the flash movie
	 * @param {int} height The height of the flash movie
	 * @param {String|DomNode} target The element (or ID of the element) to place the flash movie in.
	 * @param {Boolean} replace Set to TRUE to replace the target content.  If FALSE, it will append to target.
	 * @param {int} minVer The minimum flash version supported for this movie
	 * @param {String} id The ID to place on the object tag
	 * @param {Boolean} useNonStandard Use a non-standard HTML rendering. This is for including the <embed> tag so that Mozilla will correctly reference the flash object. Requires Platform team approval.
	 * @return {Object} A reference to the flash object that was output to the page
	 */
	insertFlash : function(flash, width, height, target, replace, minVer, id, useNonStandard, flashVars) {

		// Get target
		if ( typeof target == "string") {
			target = $('#'+target)[0];
			// Get first id from array result
		}
		if (!target) {
			return false;
		}

		// Doesn't match version requirement
		var ver = this.getVersion();
		if (ver == 0 || ver < parseInt(minVer, 10)) {
			return false;
		}

		if ( typeof id != 'string') {
			id = 'flashmovie-' + Math.ceil(Math.random() * 500);
		}

		// Default use of non-standard HTML to false
		if ( typeof useNonStandard != 'boolean') {
			useNonStandard = false;
		}

		// Create object
		var objectHtml = "";
		if (navigator.userAgent.match(/msie/i) != null || useNonStandard) {
			objectHtml += '<object width="' + width + '" height="' + height + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" id="' + id + '">';
		} else {
			objectHtml += '<object width="' + width + '" height="' + height + '" data="' + flash + '" type="application/x-shockwave-flash" id="' + id + '">';
		}

		// Parameters
		objectHtml += '<param name="movie" value="' + flash + '"></param>' + '<param name="wmode" value="transparent"></param>' + '<param name="quality" value="high"></param>' + '<param name="menu" value="false"></param>' + '<param name="allowScriptAccess" value="always"></param>';
		if (flashVars) {
			objectHtml += '<param name="FlashVars" value="' + flashVars + '"></param>';
		}

		// Embed tag
		if (useNonStandard) {
			objectHtml += '<embed src="' + flash + '" quality="high" width="' + width + '" height="' + height + '" name="' + id + '" allowScriptAccess="always" type="application/x-shockwave-flash" pluginspage="http://www.adobe.com/go/getflashplayer"';
			if (flashVars) {
				objectHtml += ' flashvars="' + flashVars + '"';
			}
			objectHtml += '>';
		}

		objectHtml += '</object>';

		if (replace) {
			target.innerHTML = objectHtml;
		} else {
			target.innerHTML += objectHtml;
		}

		return this.getFlashMovieObject(id);
	},
	/**
	 * Returns an object reference to the Flash movie. This is necessary
	 * for any page that wants to communicate with the movie via script.
	 * @return {Object} Object reference to flash movie in DOM
	 */
	getFlashMovieObject : function(movieName) {
		try {
			if (document.embeds && document.embeds[movieName]) {
				return document.embeds[movieName];
			} else if (window.document[movieName]) {
				return window.document[movieName];
			}
		} catch (e) {
			return $('#' + movieName);
		}
	},

	/**
	 * Gets the current major version of flash installed.
	 * The minimum version this will find is 3.x.
	 * @return {Number} Version number or zero if it cannot be detected.
	 */
	getVersion : function() {
		var flash;
		var i = 3;
		var ver = 0;

		// From navigator object
		if (navigator.plugins && navigator.mimeTypes.length) {
			flash = navigator.plugins["Shockwave Flash"];
			if (flash) {
				ver = parseInt(flash.description.replace(/[^0-9.]/g, ""), 10);
			}
		}

		// Internet Explorer
		else {
			flash = true;
			while (flash) {
				try {
					flash = new ActiveXObject("ShockwaveFlash.ShockwaveFlash." + i);
					ver = i;
					i++;
				} catch(e) {
					break;
				}
			}
		}
		return ver;
	}
};

/* navMenu.js */
	
'use strict';

$.widget('pp.navMenu', {

	options : {
		closeOnEscape : true, //close the menu when someone hits escape
		openEvent : "focusin" //event to trigger opening the menu. Also tested for 'click'
	},

	// constructor
	_create : function() {
		// prefetch all elements for more efficiency
		this._getElements();

		// set width of the dropdowns to increase if additional space is needed for the top tab
		this._setWidth();

		// attach event listeners to elements
		this._addListeners();

		//reset tabindex
		this.reset();
	},

	_getElements : function() {
		this.elements = {};
		this.elements.handle = this.element.find("a:first, input");
		this.elements.dropdown = this.element.find("ul");
		this.elements.options = this.elements.dropdown.find("a");
	},

	reset : function() {
		this.elements.options.attr("tabindex", "-1");
	},

	// set width of dropdowns to increase if additional space is needed
	_setWidth : function() {
		var tabWidth = this.element.width(), dropdownWidth = this.elements.dropdown.width(), minWidth = tabWidth + 30;

		if (minWidth > dropdownWidth) {
			this.elements.dropdown.css("min-width", minWidth + "px");
		}
	},

	// add event listeners to component elements
	_addListeners : function() {
		/* Attach focus event on every focusable element
		 * On focus - close every dropdown except its own if any
		 * Focus event fires before Click, so let click take care of its own dropdown
		 */
		this.elements.handle.on("focus mouseover", $.proxy(function(e) {
			$('.show').not(this.element).each(function() {
				$(this).find('a:first').trigger('close.menu');
			});
		}, this));

		if (this.elements.dropdown.length > 0) {
			/* Attach Event Only If Dropdown Exists */
			
			if( this.options.openEvent === 'focusin' ) {
				this.elements.handle.on("keydown", $.proxy(function(event) {
					if( event.keyCode === $.ui.keyCode.ENTER ) {
						/* For List Dropdowns. Stop traversal to link & prevent HTML click event from trigger */
						event.preventDefault();
						event.stopPropagation();
						
						this._toggle(event);
					}
				}, this));
			} else {
				this.elements.handle.on("click", $.proxy(function(event) {
						/* For List Dropdowns. Stop traversal to link & prevent HTML click event from trigger */
						event.preventDefault();
						event.stopPropagation();
						
						this._toggle(event);
				}, this));
			}
			this.elements.handle.on('close.menu', $.proxy(this.close, this));
			

			/* Keyboard Navigation For Element With Dropdown */
			$(this.element).bind('keydown', $.proxy(function(ev) {

				/* Dont entertain key event if dropdown not open */
				if (this.element.hasClass("show")) {
					if (ev.keyCode === $.ui.keyCode.ESCAPE || ev.keyCode === $.ui.keyCode.UP || ev.keyCode === $.ui.keyCode.DOWN || ev.keyCode === $.ui.keyCode.TAB) {
						var focusable = $(':focusable');
						var focus = $(':focus');
						var pos = focusable.index(focus), $list, $limits, first, last;

						// escape key
						if (ev.keyCode === $.ui.keyCode.ESCAPE) {
							this.close();
							this.elements.handle.focus();
						}

						if (ev.keyCode === $.ui.keyCode.UP) {
							ev.preventDefault();
							$list = $(focusable[pos]).parents(".show ul");
							if ($list.length > 0) {
								$limits = $list.find(":focusable:first, :focusable:last");
								first = focusable.index($limits[0]);

								if (pos - 1 >= first) {
									focusable[pos - 1].focus();
								} else {
									/* index [1] will be undefined in case of a list with Single Option. Since first & last will point to the same element */
									if ($limits[1]) {
										$limits[1].focus();
									}
								}
							}
						} else if (ev.keyCode === $.ui.keyCode.DOWN) {
							ev.preventDefault();
							$list = $(focusable[pos]).parents(".show ul");
							if ($list.length > 0) {
								$limits = $list.find(":focusable:first, :focusable:last");
								/* index [1] will be undefined in case of a list with Single Option. Since first & last will point to the same element */
								if ($limits[1]) {
									last = focusable.index($limits[1]);
									if (pos + 1 <= last) {
										focusable[pos + 1].focus();
									} else {
										$limits[0].focus();
									}
								}
							}
						} else if (ev.keyCode === $.ui.keyCode.TAB) {
							$list = $(focusable[pos]).parents(".show ul");
							if ($list.length > 0) {
								ev.preventDefault();
								if (ev.shiftKey) {
									var $first = $list.find(":focusable:first");
									first = focusable.index($first[0]);
									if (first - 1 >= 0) {
										focusable[first - 1].focus();
									} else {
										focusable[focusable.length - 1].focus();
									}

									this.close();
								} else {
									$limits = $list.find(":focusable:last");
									last = focusable.index($limits[0]);
									if (focusable.length - 1 >= last + 1) {
										focusable[last + 1].focus();
									} else {
										$(".skip a").focus();
									}
								}
							}
						}
					}
				} else if (ev.keyCode === $.ui.keyCode.SPACE) {
					ev.preventDefault();
					this.elements.handle.trigger("click");

				}
			}, this));

			/* close when another menu opens */
			$("html").on("click", $.proxy(function(event) {
				this.close(event);
			}, this)).bind('open.menu', $.proxy(this.close, this));
		}
	},

	_toggle : function(event) {
		if (this.element.hasClass('show')) {
			this.close(event);
		} else {
			this.open(event);
		}
	},

	// show menu
	open : function(event) {
		this.elements.handle.attr('aria-expanded', true);
		this.elements.options.attr("tabindex", "0");

		if (this.element.hasClass('show')) {
			return;
		}
		this.element.addClass('show');
		var $first = this.elements.options.filter(":first");
		$first.focus();
	},

	// close menu
	close : function(event) {
		this.elements.handle.attr('aria-expanded', false);
		this.elements.options.attr("tabindex", "-1");
		if (!this.element.hasClass('show')) {
			return;
		}
		this.element.removeClass('show');
	}
});

/*
 * This file contains the javascript functions and snippets 
 * that are used to introduce the site feedback link in the footer.  
 * Function O_GoT inserts the link in the footer list and assigns onclick 
 * for popup window that displays the feedback from from opinionlab site.  
 */

function opinionLabFn() {
	
	'use strict';
	var opVars = window.PAYPAL.opinionLabVars;
	
	var _doc = document,
		_w 	 = window,
		_tm  = (new Date()).getTime(),
		_sH  = screen.height,
		_sW  = screen.width;
	
	/**
	 * This method forms the siteFeedback image tag to be written into the DOM
	 * Note: While calling this method, please make sure to check if sitefbIcon is enabled. This is decided by boolean the property 'showSitefbIcon'. 
	 * @returns sfimg
	 */
	function siteFeedBackImage () {
		var sfImg = document.createElement('img');
		sfImg.setAttribute('src', opVars.sitefb_plus_icon);	
		sfImg.setAttribute('alt', '');		
		return sfImg;
	}
	
	function popUp (opinionlabURL) {
		_w.open(opinionlabURL, 'comments', 'width=535,height=192'
											+ ',screenX=' + ((_sW - 535)/2)
											+ ',screenY=' + ((_sH - 192) / 2)
											+ ',top=' + ((_sH - 192) / 2) 
											+ ',left=' + ((_sW - 535) / 2) 
											+ ',resizable=yes'
											+ ',copyhistory=yes'
											+ ',scrollbars=no');
	}
	
	function createLink (_p) {
		var sfLink 	= document.createElement('a');
			
		sfLink.setAttribute('href', '#');
		sfLink.innerHTML=_p;
		_doc.getElementById("siteFeedback").appendChild(sfLink);
		
		if(opVars.showSitefbIcon){
			_doc.getElementById("siteFeedback").appendChild(siteFeedBackImage());		
		}
		
		return sfLink;
	}
	
	function _fC (_u) {	
		var _sp = '_.html\\/\\/',
			_rp = '_/index.html',
			_aT = _sp + ',\\/,\\.,-,_,' + _rp + ',%2F,%2E,%2D,%5F',
			_aA = _aT.split(',');
			
		for (var i = 0; i < 5; i++) {
			eval('_u=_u.replace(/' + _aA[i] + '/g,_aA[i+5])');
		}
		return _u;
	}
	
	return {
			'custom_var'				: '',
			'_ht'						: escape(_w.location.href),
			'_hr'						: _doc.referrer,
			'_kp'						: 0,
			'baseurl'					: '',
			'url_var'					: '',
			'assignSiteCatalystVars'	: '',
			
			'PP_O_LC' : function (openPopup) {
				var opinionlabURL = this.baseurl + '&olparams='
									+ 'time1$' 			+ _tm
									+ '|time2$'			+ (new Date()).getTime()
									+ '|prev$'			+ _fC(escape(this._hr))
									+ '|referer$'		+ _fC(this._ht)
									+ '|height$'		+ _sH
									+ '|width$'			+ _sW
									+ '&custom_var='	+ this.custom_var;
					
			  	if(openPopup){
			  		popUp(opinionlabURL);
			  	}else{
			  		return opinionlabURL;
				}
			},
			
			'O_LC' : function (openPopup) {
				var opinionlabURL = 'https://secure.opinionlab.com/ccc01/comment_card.asp?'
									+ 'time1=' 			+ _tm 
									+ '&time2=' 		+ (new Date()).getTime() 
									+ '&prev=' 			+ _fC(escape(this._hr)) 
									+ '&referer=' 		+ _fC(this._ht) 
									+ '&height=' 		+ _sH
									+ '&width=' 		+ _sW
									+ '&custom_var=' 	+ this.custom_var
									+ (this.url_var !== undefined && this.url_var.length > 0 ? '&url_var=' + _fC(escape(this.url_var)) : '');
				
				if (openPopup) {
					popUp(opinionlabURL);
				} else {
					return opinionlabURL;
				}
			},
			
			'O_GoT' : function (_p) {
				var sfLink 	= createLink(_p),
					self 	= this;
				
				sfLink.onclick=function(){
					self.assignSiteCatalystVars();
					self.O_LC(true);
					return false;
				};
			},

			'PP_O_GoT' : function (_p){
				var sfLink 	= createLink(_p),
					self 	= this;
				
				sfLink.onclick=function(){
					self.assignSiteCatalystVars();
					self.PP_O_LC(true);
					return false;
				};
			},


			'Mini_O_GoT' : function (_p, base){
				var sfLink 		= document.createElement('a'),
					sfLinkSpan 	= document.createElement('span'),
					self 		= this;
				
				sfLink.setAttribute("href","#");
				if(opVars.showSitefbIcon){
					sfLink.appendChild(siteFeedBackImage());
				}
				
				if ( base ) {
					sfLink.onclick = function () {
						self.assignSiteCatalystVars();
						self.PP_O_LC(true);
						return false;
					};
				} else {
					sfLink.onclick = function () {
						self.assignSiteCatalystVars();
						self.O_LC(true);
						return false;
					};
				}
				
				sfLinkSpan.innerHTML=_p;
				sfLink.appendChild(sfLinkSpan);
				_doc.getElementById("siteFeedback").appendChild(sfLink);
			}
	};
};

(function(opinionLab) {

	'use strict';
	var opVars = window.PAYPAL.opinionLabVars,
	    popup = onlineOpinionPopupFn(opinionLab);

	/* Defines the referral URL - Verify */
	function paypalURL (pagename) {
		var paypalURL = 'https:///'
						+ opVars.countryCode
						+ '.paypal.com/'
						+ opVars.languageCode
						+ '/00/'
						+ escape(pagename.replace(/\s|\//g, '_'))
						+ '.page';
		return paypalURL;
	};

	function assignSiteCatalystVars() {
		if ( typeof opVars !== 'undefined' && typeof opVars.isSiteRedirect !== 'undefined' && typeof opVars.isPaymentFlow !== 'undefined') {
			if ( typeof s !== 'undefined') {
				if ( typeof s.pageName !== 'undefined') {
					opVars.siteCatalystPageName = s.pageName;
				}
				if ( typeof s.prop7 !== 'undefined') {
					opVars.siteCatalystC7 = s.prop7 == "none" ? "Unknown" : s.prop7;
				}
				if ( typeof s.prop5 !== 'undefined') {
					opVars.siteCatalystAccountNumber = s.prop5;
				}
			}
			opinionLab.custom_var = updateCustomVars();
		}
	}

	function updateCustomVars () {
		var customVar = opVars.rLogId
						+ '|' + opVars.siteCatalystC7
						+ '|' + opVars.siteCatalystPageName
						+ '|' + opVars.countryCode
						+ '|' + opVars.languageCode
						+ '|' + ( opVars.accountNumber && opVars.accountNumber.length > 0 ? opVars.accountNumber : 'Unknown')
						+ '|' + ( opVars.siteCatalystAccountNumber && opVars.siteCatalystAccountNumber.length > 0  ? opVars.siteCatalystAccountNumber : 'Unknown' )
						+ ( opVars.isSiteRedirect ? '' : '|Unknown|Unknown' );
		return customVar;
	}

	function initialize () {
		var self = this;
		opinionLab.assignSiteCatalystVars = function() {
			assignSiteCatalystVars.call(self);
		}

		opinionLab._ht 			= paypalURL("'" + opVars.siteCatalystPageName + "'");
		opinionLab.custom_var 	= updateCustomVars();

		/* Opinion Lab URL under redirection through Paypal */
		if (opVars.isSiteRedirect) {
				opinionLab.baseurl = "https:///"
								+ opVars.serverName
								+ '/cgi-bin/webscr?cmd=_handle-sf-redirect'
								+ '&amp;account_number='
								+ opVars.accountNumber;
		}

		if (opVars.isPaymentFlow) {
			opinionLab.url_var = "https:///"
							+ opVars.serverName
							+ '/cgi-bin/webscr?cmd='
							+ opVars.commentCardCmd
							+ '&amp;account_number='
							+ opVars.accountNumber;

			opinionLab.baseurl += "%26url_var%3dhttps_/index.html"
							+ opVars.serverName
							+ "/cgi-bin/webscr?cmd=cmd$"
							+ opVars.commentCardCmd
							+ "|account_number$"
							+ opVars.accountNumber;
		}
	};

	if ( typeof opVars !== 'undefined' && typeof opVars.isSiteRedirect !== 'undefined' && typeof opVars.isPaymentFlow !== 'undefined') {
		if (opVars.miniBrowser) {
			opinionLab.Mini_O_GoT(opVars.feedback_link, opVars.isSiteRedirect);
		} else {
			if (opVars.isSiteRedirect) {
				opinionLab.PP_O_GoT(opVars.feedback_link);
			} else {
				opinionLab.O_GoT(opVars.feedback_link);
			}
		}

		initialize();

		if (opVars.isPaymentFlow) {
			var ppbce;
			if (opVars.isSiteRedirect) {
				ppbce = new popup.OpinionLabOnCloseEvent('ppwebscr');
			} else {
				ppbce = new popup.OpinionLabOnCloseEvent();
			}
		}

	}
}(opinionLabFn()));

/*
 Spec #22956 OpinionLab
 */

function onlineOpinionPopupFn(opinionLab) {

	'use strict';

	function showpopup(redirectTo) {
		var mywin;
		mywin = window.open('', '', 'top=3000,left=3000,width=1,height=1,menubar=0,scrollbars=0,resizeable=1');
		if (mywin) {
			mywin.document.open
			var myURL = ""

			/* This JS is customized for sparta because a JS call

			 /* Comparing with corresponding XPT code - Removed the External opinionlab js from the popup content as it could not be loaded due to path issue */

			HTML_txt = "<html><scr" + "ipt language='javascript'>";
			HTML_txt = HTML_txt + "_hr='" + opinionLab._hr + "';";
			HTML_txt = HTML_txt + "_ht='" + opinionLab._ht + "';";
			HTML_txt = HTML_txt + "custom_var='" + opinionLab.custom_var + "';";

			if (( typeof opinionLab.baseurl == 'undefined')) {
			} else {
				HTML_txt = HTML_txt + "baseurl='" + opinionLab.baseurl + "';";
			}
			if (( typeof opinionLab.url_var == 'undefined')) {
			} else {
				HTML_txt = HTML_txt + "url_var='" + opinionLab.url_var + "';";
			}

			if (redirectTo == 'ppwebscr') {
				myURL = opinionLab.PP_O_LC(false);
			} else {
				myURL = opinionLab.O_LC(false);
			}

			/* Comparing with corresponding XPT code - Added the below line newly in sparta. For FF, writing some JS variables that are required in the intermediate popup*/

			if (document.all) {
			} else {
				HTML_txt = HTML_txt + "var _cw =window;var _copinionlabURL ='" + myURL + "';var _cW =" + screen.width + ";var _cH =" + screen.height + ";";
			}

			/* Comparing with corresponding XPT code - modified for firefox - replacing the function call O_LC or PP_O_LC with window.open statement*/

			HTML_txt = HTML_txt + 
				"function connect () {"
				+	"try{"
				+		"if( document.all ) {"
				+			"if( window.opener.closed ){"
				+				"window.location.replace('" + myURL + "');"
				+			"} else {" 
				+				"self.close();"
				+			"}"
				+		"} else {"
				+			"if( opener == null ){"
				+				"_cw.open(_copinionlabURL, 'comments', 'width=535,height=192,screenX=' +((_cW-535)/2)+ ',screenY='+ ((_cH-192)/2) +',top='+ ((_cH-192)/2) +',left='+ ((_cW-535)/2) +',resizable=yes,copyhistory=yes,scrollbars=no');"
				+				"setTimeout('self.close()', 5000);"
				+			"}else{"
				+				"self.close();"
				+			"}"
				+		"}"
				+	"}catch( err ) {"
				+		"window.location.replace('" + myURL + "');"
				+	"}"
				+	"return 0;"
				+"}</scr";
			HTML_txt = HTML_txt + "ipt><body><scr" + "ipt language='javascript'>setTimeout('connect()',1);</scr" + "ipt></body></html>";

			mywin.document.write(HTML_txt);
			mywin.document.close
		}
	}

	return {
		'OpinionLabOnCloseEvent' : function OpinionLabOnCloseEvent(redirectTo) {
			window.onunload = function() {
				opinionLab.assignSiteCatalystVars();
				if (navigator.appName == "Microsoft Internet Explorer") {
					var evt = window.event;
					if (navigator.userAgent.indexOf('MSIE 6.0') !== -1) {
						if (evt.clientX < 0 && evt.clientY < 0) {
							showpopup(redirectTo);
						}
					} else {
						if (evt.clientX < 0 || evt.clientY < 0) {
							showpopup(redirectTo);
						}
					}
				} else if (navigator.userAgent.indexOf('Firefox/3') !== -1) {

					var width = parseFloat(window.innerWidth ? window.innerWidth : (document.documentElement.clientWidth ? document.documentElement.clientWidth : document.getElementsByTagName('body')[0].clientWidth));
					var height = parseFloat(window.innerHeight ? window.innerHeight : (document.documentElement.clientHeight ? document.documentElement.clientHeight : document.getElementsByTagName('body')[0].clientHeight));

					if (width <= 0 || height <= 0) {
						showpopup(redirectTo);
					}
				} else {
					showpopup(redirectTo);
				}
			}
		}
	};
};

/* machineId */

$.fn.namespace('PAYPAL.tns');
PAYPAL.tns.hidddenFsoFields = {};

PAYPAL.tns.MIDinit = function() {

	PAYPAL.tns.flashDiv = document.createElement('div');
	PAYPAL.tns.flashDiv.setAttribute('style', 'overflow:hidden;height:1px;');
	document.body.appendChild(PAYPAL.tns.flashDiv);
	if (PAYPAL.tns.flashLocation != undefined) {
		PAYPAL.tns.flashRef = PAYPAL.core.Flash.insertFlash(PAYPAL.tns.flashLocation, 1, 1, PAYPAL.tns.flashDiv, true, 8, 'midflash', true);
	}

};
PAYPAL.tns.flashInit = function() {
	if (window.document['midflash']) {
		PAYPAL.tns.flashRef = window.document['midflash'];
	} else if (document.embeds && document.embeds['midflash']) {
		PAYPAL.tns.flashRef = document.embeds['midflash'];
	}
	if (PAYPAL.tns.token) {
		PAYPAL.tns.flashRef.writeTokenValue(PAYPAL.tns.token);
	} else {
		try {
			var token = PAYPAL.tns.flashRef.getTokenValue();
			if (token) {
				var tokenVar = {
					'fso' : token
				};
				PAYPAL.tns.hiddenFsoFields = $.extend(PAYPAL.tns.hiddenFsoFields, tokenVar);

			} else {
				var flashEnabled = {
					'fso_enabled' : PAYPAL.core.Flash.getVersion()
				};
				PAYPAL.tns.hiddenFsoFields = $.extend(PAYPAL.tns.hiddenFsoFields, flashEnabled);
			}
		} catch(e) {
		}
	}
	PAYPAL.tns.appendField(PAYPAL.tns.hiddenFsoFields);
};

PAYPAL.tns.appendField = function(hiddenFields) {
	$.each(hiddenFields, function(name, val) {
		var field = $('<input></input>').attr('name', name).attr('value', val).attr('type', 'hidden');

		$('form').each(function() {

			$(field).clone().appendTo(this);
		});

	});
};
PAYPAL.tns.detectFsoBlock = function(resultOfFso) {
	if (PAYPAL.tns.loginflow != null) {
		var flowName = {
			'flow_name' : PAYPAL.tns.loginflow
		}
		PAYPAL.tns.hiddenFsoFields = $.extend(PAYPAL.tns.hiddenFsoFields, flowName);
	}
	if (resultOfFso) {
		setTimeout('PAYPAL.tns.flashInit()', 500);

	} else {
		var fsoBlocked = {
			'fso_blocked' : '1'
		}
		PAYPAL.tns.hiddenFsoFields = $.extend(PAYPAL.tns.hiddenFsoFields, fsoBlocked);
		PAYPAL.tns.appendField(PAYPAL.tns.hiddenFsoFields);
	}
};

$(document).ready(function() {
	PAYPAL.tns.MIDinit();
});


/** defining namespace as "browserscript" */

/**
 * dataBrowser and dataOS below are JS literal arrays. They store all possible Browsers and OS names respectively.
 * Note the order of the array elements can also be change - order independent
 */

/**
 * Description of the array variable string - This holds the regular expressions
 * for the userAgent string identity - This carries the name of browsers/OS
 * which is embedded in forms as hidden fields In simple terms test for the
 * regular expresssion (string) in useragent string. If true return the
 * identity. versionSearch - For many browsers, the version will follow the name
 * in the navigator.userAgent string For some browsers it will not follow the
 * name but will follow some string. This is named as versionSearch for those
 * browsers
 */

(function($) {
	$.fn.namespace('PAYPAL.browserscript');

	PAYPAL.browserscript.dataBrowser = [{
		string : /.*?\(.*?\).*?(Apple).*?(Safari)\/.*?/i,
		identity : "Safari"
	}, {
		string : /^Mozilla.*?\(.*?(Konqueror)\/([0-9\.]*).*?\).*?/i,
		identity : "Konqueror"
	}, {
		string : /^Mozilla.*?\(.*?(rv).*?\).*?Gecko\/[0-9]*$/,
		identity : "Mozilla",
		versionSearch : "rv"
	}, {
		string : /^Mozilla.*?\(.*?(rv).*?\).*?Netscape\/[0-9\.]*/,
		identity : "Netscape"
	}, {
		string : /^(Opera)\/([0-9\.]*) \(([a-z]*)/i,
		identity : "Opera"
	}, {
		string : /.*?\(([a-z]*).*? (Firefox)\/([0-9\.]*)$/i,
		identity : "Firefox"
	}, {
		string : /.*?\(.*?MSIE.*?\)$/i,
		identity : "Microsoft Internet Explorer",
		versionSearch : "MSIE"
	}];
	
	PAYPAL.browserscript.dataOS = [{
		string : /Win32/,
		identity : "Windows"
	}, {
		string : /Mac/,
		identity : "Mac"
	}, {
		string : /Linux/,
		identity : "Linux"
	}];

	/**
	 * Retrieves browser name, version and OS - Master function Accepts no
	 * parameters Returns no data sets the variables browsername,
	 * Fullbrowserversion and OSName
	 */

	PAYPAL.browserscript.getClientDetails = function() {

		var nVer = navigator.appVersion;
		var nAgt = navigator.userAgent.toLowerCase();
		var TOSName = navigator.platform;
		var browserName_safe = "Unknown";
		var fullVersion = '' + parseFloat(navigator.appVersion);
		var majorVersion = parseInt(navigator.appVersion, 10);
		var nameOffset, verOffset, ix;

		if (((verOffset = nAgt.indexOf("opera mini")) != -1)
				|| ((verOffset = nAgt.indexOf("opera mobi")) != -1)
				|| ((verOffset = nAgt.indexOf("konqueror")) != -1)
				|| ((verOffset = nAgt.indexOf("aol")) != -1)
				|| ((verOffset = nAgt.indexOf("chromeframe")) != -1)
				|| ((verOffset = nAgt.indexOf("xblwp")) != -1)
				|| ((verOffset = nAgt.indexOf("gomezagent")) != -1)
				|| ((verOffset = nAgt.indexOf("epiphany")) != -1)
				|| ((verOffset = nAgt.indexOf("adobeair")) != -1)
				|| ((verOffset = nAgt.indexOf("mobile")) != -1)
				|| ((verOffset = nAgt.indexOf("ipad")) != -1)
				|| ((verOffset = nAgt.indexOf("iphone")) != -1)
				|| ((verOffset = nAgt.indexOf("ipod")) != -1)
				|| ((verOffset = nAgt.indexOf("seamonkey")) != -1)
				|| ((verOffset = nAgt.indexOf("fennec")) != -1)
				|| ((verOffset = nAgt.indexOf("camino")) != -1)
				|| ((verOffset = nAgt.indexOf("kindle")) != -1)) {
			browserName_safe = "Unknown";
			fullVersion = '';
		} else if ((verOffset = nAgt.indexOf("opera")) != -1) {
			browserName_safe = "Opera";
			fullVersion = nAgt.substring(verOffset + 6);
			if ((verOffset = nAgt.indexOf("version")) != -1)
				fullVersion = nAgt.substring(verOffset + 8);
		} else if ((verOffset = nAgt.indexOf("msie")) != -1) {
			browserName_safe = "MSIE";
			fullVersion = nAgt.substring(verOffset + 5);
		} else if ((verOffset = nAgt.indexOf("chrome")) != -1) {
			browserName_safe = "Chrome";
			fullVersion = nAgt.substring(verOffset + 7);
		} else if ((verOffset = nAgt.indexOf("safari")) != -1) {
			browserName_safe = "Safari";
			if ((verOffset = nAgt.indexOf("version")) != -1) {
				fullVersion = nAgt.substring(verOffset + 8);
			} else {
				fullVersion = '';
			}
		} else if ((verOffset = nAgt.indexOf("firefox")) != -1) {
			browserName_safe = "Firefox";
			fullVersion = nAgt.substring(verOffset + 8);
		}

		// trim the fullVersion string at semicolon/space if present
		if ((ix = fullVersion.indexOf(";")) != -1)
			fullVersion = fullVersion.substring(0, ix);
		if ((ix = fullVersion.indexOf(" ")) != -1)
			fullVersion = fullVersion.substring(0, ix);

		majorVersion = parseInt('' + fullVersion, 10);
		if (isNaN(majorVersion)) {
			majorVersion = parseInt(navigator.appVersion, 10);
		}
		// For IE 6,7 checking Trident
		if (((verOffset = nAgt.indexOf("msie")) != -1)
				&& ((verOffset = nAgt.indexOf("trident")) != -1)) {
			if (majorVersion < 8) {
				browserName_safe = "Unknown";
				fullVersion = '';
			}
		}

		if ((trident_verOffset = nAgt.indexOf("trident")) != -1) {
			trident_version = nAgt.substring(trident_verOffset + 8);
			if ((ix = trident_version.indexOf(";")) != -1)
				trident_version = trident_version.substring(0, ix);
			if ((ix = trident_version.indexOf(" ")) != -1)
				trident_version = trident_version.substring(0, ix);
			if ((ix = trident_version.indexOf(")")) != -1)
				trident_version = trident_version.substring(0, ix);
		}
		if ((((verOffset = nAgt.indexOf("msie")) != -1) && ((verOffset = nAgt
				.indexOf("trident")) != -1))
				&& majorVersion == 7 && trident_version == 4.0) {
			browserName_safe = "MSIE";
			fullVersion = '8.0';
		}
		if ((((verOffset = nAgt.indexOf("msie")) != -1) && ((verOffset = nAgt
				.indexOf("trident")) != -1))
				&& (majorVersion == 7 || majorVersion == 8)
				&& trident_version == 5.0) {
			browserName_safe = "MSIE";
			fullVersion = '9.0';
		}

		if (fullVersion == '' || browserName_safe == 'Unknown') {
			fullVersion = 'Unknown';
		}

		this.browsername = browserName_safe;
		this.browserversion_full = fullVersion;
		this.browserversion = this.browserVersion(navigator.userAgent);
		this.OSName = this.browserOS(this.dataOS);
	}
	/**
	 * Returns browser name that is passed to backend
	 * 
	 * @param literal
	 *            array dataBrowser This contains object property pairs
	 * 
	 * Runs the elements of the array in loop and tries the match for regular
	 * expression to be present in navigator.userAgent
	 * 
	 * Also sets the versionSearchString to be used in function browserVersion
	 * for the returned browser.
	 * @returns {string} name of the browser.
	 */

	PAYPAL.browserscript.browserName = function(data) {

		for ( var i = 0; i < data.length; i++) {

			var dataString = data[i].string;
			if (dataString.test(navigator.userAgent) == true) {

				this.versionSearchString = data[i].versionSearch
						|| data[i].identity;
				// this.browsername = data[i].identity;
			}
		}

	}

	/**
	 * Returns OS name that is passed to backend
	 * 
	 * @param literal
	 *            array dataOs This contains object property pairs
	 * 
	 * Runs the elements of the array in loop and tries the match for regular
	 * expression to be present in navigator.platform
	 * 
	 */

	PAYPAL.browserscript.browserOS = function(data) {

		for ( var j = 0; j < data.length; j++) {
			if (data[j].string.test(navigator.platform) == true) {
				return data[j].identity;
			}
		}
	}

	/**
	 * Returns browser version withe the user of versionSearchString set in
	 * above fn
	 * 
	 * @param datastring
	 *            {string} navigator.userAgent
	 * 
	 * Also sets the versionSearchString to be used in function browserVersion
	 * for the returned browser.
	 * @returns {float} version of the browser.
	 */

	PAYPAL.browserscript.browserVersion = function(datastring) {

		var index = datastring.indexOf(this.versionSearchString);
		if (index == -1) {
			return;
		}
		return parseFloat(datastring.substring(index
				+ this.versionSearchString.length + 1));

	}

	PAYPAL.browserscript.browserName(PAYPAL.browserscript.dataBrowser);
	PAYPAL.browserscript.getClientDetails();

	/*
	 * The function below creates the needed hidden variables on the fly and
	 * assigns them the value detected earlier Returns the Object ID of the
	 * hidden variable that needs to be appneded to the form variables @param
	 * paramName {string} browsername/browserversion/osname @param paramValue
	 * {string|float} value of browsername/browserversion/osname @returns
	 * createId {object} JS object for the input hidden element.
	 */

	PAYPAL.browserscript.createHiddenFields = function(paramName, paramValue) {

		var createId = document.createElement("input");
		createId.type = "hidden";
		createId.name = paramName;
		createId.value = paramValue;
		return createId;
	}

	/**
	 * this loop will append the hidden variables
	 * browser_name,browser_version,operating_system to all the forms in a page
	 */

	$(document).ready(function() {
		for ( var k = 0; k < document.forms.length; k++) {
			with (document.forms[k]) {
				appendChild(PAYPAL.browserscript.createHiddenFields('browser_name',
						PAYPAL.browserscript.browsername));
				appendChild(PAYPAL.browserscript.createHiddenFields(
						'browser_version', PAYPAL.browserscript.browserversion));
				appendChild(PAYPAL.browserscript.createHiddenFields(
						'browser_version_full',
						PAYPAL.browserscript.browserversion_full));
				appendChild(PAYPAL.browserscript.createHiddenFields(
						'operating_system', PAYPAL.browserscript.OSName));

			}
		}
	});

})(jQuery);


/*
 * Updates:
 * All jQuery objects are now starts with $ like $pwd, $retype
 * removed the reference of $ - JQuery from the enclosed function
 * using $ all over the file, instead of jQuery 
 * clubbed events together with on
 * combining all the variables in one var/function
 * eliminated the global variables
 * using strict mode
 * 
 * I think this no longer required as modernizer is doing the same thing.
 * Checking capabilities of browser. 
 * PAYPAL.bp - should be removed
 * 
 */

/*
 * Namespace and KeyValueMap initialization
 */
(function() {
	"use strict";
	
	$.fn.namespace("PAYPAL.common");
	$.fn.namespace("PAYPAL.bp");
	$.fn.namespace("PAYPAL.ks");
	
	function KeyValueMap() {
		var keysToIndex = {
			__indexToValue : [],
			__indexToKeys : []
			},
			activeEnum = [],
			tableLength = 0,
			self = this;

		this.get = function(key) {
			if (typeof keysToIndex[key] == 'number') {
				return keysToIndex.__indexToValue[keysToIndex[key]];
			} else {
				return null;
			}
		};
		this.put = function(key, value) {
			if (typeof keysToIndex[key] == 'number') {
				keysToIndex.__indexToValue[keysToIndex[key]] = value;
			} else {
				keysToIndex[key] = tableLength;
				keysToIndex.__indexToValue[tableLength] = value;
				keysToIndex.__indexToKeys[tableLength++] = key;
			}
		};
		KeyValueMap.prototype.containsKey = function(testKey) {
			return (this.get(testKey) != null);
		};
	}
})();


(function() {
	"use strict";
	PAYPAL.common.appendField = function(formName, fieldName, fieldValue) {
		var myForm = document.forms[formName],
			field = document.createElement('input');
		field.setAttribute("type", "hidden");
		field.setAttribute("id", fieldName);
		field.setAttribute("name", fieldName);
		if (fieldValue !== undefined) {
			field.setAttribute("value", fieldValue);
		}
		myForm.appendChild(field);
	};
})();

(function() {
	PAYPAL.bp = {
		scriptVersion : 1,
		attributeArray : [
				[ "a1", "ScriptEngineMajorVersion()" ],
				[ "a2", "ScriptEngineMinorVersion()" ],
				[ "a3", "ScriptEngineBuildVersion()" ],
				[ "a4", "navigator.appCodeName" ],
				[ "a5", "navigator.appName" ],
				[ "a6", "navigator.appVersion" ],
				[ "a7", "helper.exec(['navigator.productSub','navigator.appMinorVersion'])" ],
				[ "a8", "navigator.browserLanguage" ],
				[ "a9", "navigator.cookieEnabled" ],
				[ "a10", "helper.exec(['navigator.oscpu','navigator.cpuClass'])" ],
				[ "a11", "navigator.onLine" ],
				[ "a12", "navigator.platform" ],
				[ "a13", "navigator.systemLanguage" ],
				[ "a14", "navigator.userAgent" ],
				[ "a15", "navigator.javaEnabled()" ],
				[ "a16", "helper.exec(['navigator.language', 'navigator.userLanguage'])" ],
				[ "a17", "document.defaultCharset" ],
				[ "a18", "document.domain" ], [ "a19", "screen.deviceXDPI" ],
				[ "a20", "screen.deviceYDPI" ],
				[ "a21", "screen.fontSmoothingEnabled" ],
				[ "a22", "screen.updateInterval" ], [ "a23", "screen.width" ],
				[ "a24", "screen.height" ], [ "a25", "screen.colorDepth" ],
				[ "a26", "screen.availHeight" ],
				[ "a27", "screen.availwidth" ],
				[ "a28", "kgObject.clientTime" ],
				[ "a29", "kgObject.clientTimeZone()" ],
				[ "a30", "kgObject.clientSoftware()" ],
				[ "a31", "kgHelper.isAJAXSupported()" ],
				[ "a32", "kgHelper.getCPU()" ],
				[ "a33", "kgHelper.isCssSupported()" ],
				[ "a34", "kgHelper.isDotNetSupported()" ],
				[ "a35", "kgHelper.isGearsInstalled()" ],
				[ "a36", "kgHelper.getGeoLocation()" ],
				[ "a37", "kgHelper.hasGoogleChrome()" ],
				[ "a38", "kgHelper.isOnline()" ],
				[ "a39", "kgHelper.hasOpenOffice()" ],
				[ "a40", "kgHelper.getOperatingSystem()" ],
				[ "a41", "kgHelper.isWebKitSupported()" ],
				[ "a42", "kgHelper.hasEvilPlugin()" ] ],
		EbayKgClientInfoHelper : function() {
			this.isAJAXSupported = function() {
				var r;
				try {
					r = new XMLHttpRequest();
				} catch (e) {
					try {
						r = new ActiveXObject("Msxml2.XMLHTTP");
					} catch (e) {
						try {
							r = new ActiveXObject("Microsoft.XMLHTTP");
						} catch (e) {
							return "na";
						}
					}
				}

				return (r) ? "yes" : "no";
			};
			this.getCPU = function() {
				if (typeof (navigator.cpuClass) != "undefined"
						&& navigator.cpuClass != "") {
					var cpu = navigator.cpuClass;
					var ua = navigator.userAgent;

					if (ua.indexOf("WOW") > 0) {
						cpu = "wow64";
					}
					return cpu;
				} else
					return "na";
			};
			this.isCssSupported = function() {
				var _d = document.createElement("div");
				_d.id = "css_test";
				_d.style.color = "red";
				document.body.appendChild(_d);

				var xx = document.getElementById("css_test");
				if (xx.currentStyle) {
					var res = xx.currentStyle["color"] != _d.style.color ? "no"
							: "yes";
					document.body.removeChild(_d);
					return res;
				} else
					return ("na");
			};
			this.isDotNetSupported = function() {
				var idotnet = false;
				if (navigator.plugins["Windows Presentation Foundation"]) {
					idotnet = true;
				}
				return (idotnet) ? "yes" : "no";
			};
			this.getGeoLocation = function() {
				return ("geolocation" in navigator) ? "yes" : "no";
			};
			this.isGearsInstalled = function() {
				return (window.google && google.gears) ? "yes" : "no";
			};
			this.hasGoogleChrome = function() {
				var i_chrome;
				i_chrome = navigator.userAgent.toLowerCase().indexOf("chrome") > -1;

				return (i_chrome) ? "yes" : "no";
			};
			this.isOnline = function() {
				if (typeof (navigator.onLine) != "undefined") {
					return (navigator.onLine) ? "online" : "offline";
				} else
					return "na";
			};
			this.hasOpenOffice = function() {
				var i_ooo = false;
				if (navigator.plugins) {
					if (navigator.plugins["OpenOffice.org Plug-in"]) {
						i_ooo = true;
					}
					return (i_ooo) ? "yes" : "no";
				} else {
					return "na";
				}
			};
			this.getOperatingSystem = function() {
				if (typeof (navigator.oscpu) == "string") {
					return (navigator.oscpu);
				} else if (typeof (navigator.platform) != "undefined") {
					return (navigator.platform);
				} else {
					return "na";
				}
			};
			this.isWebKitSupported = function() {
				var ua = navigator.userAgent;
				webkit = RegExp("AppleWebKit/index.html").test(ua);
				return webkit ? "yes" : "no";
			};
			this.hasEvilPlugin = function() {
				return (navigator.plugins["Evil Plugin"]) ? "yes" : "no";
			};
		},
		kgClientInfoHelper : function() {
			this.exec = function(possibles) {
				for ( var i = 0; i < possibles.length; i++) {
					try {
						var val = eval(possibles[i]);
						if (val) {
							return val;
						}
					} catch (e) {
					}
				}
				return "";
			};
			this.activeXDetect = function(componentClassID) {
				var componentVersion = document.body.getComponentVersion('{'
						+ componentClassID + '}', 'ComponentID');
				return (componentVersion !== null) ? componentVersion : false;
			};
			this.stripIllegalChars = function(str) {
				return str.toLowerCase().replace(/\n/g, "n").replace(/\x2F/g,
						"").replace(/\x5C{2}/g, "");
			};
			this.stripFullPath = function(tempFileName, lastDir) {
				return tempFileName.replace(new RegExp(lastDir), "");
			};
			this.outputKeyValuePair = function(key, val) {
				return key + "=" + val;
			};
		},
		kgClientInfoObject : function() {
			this.clientTime = new Date();
			this.clientTimeZone = function() {
				var gmtHours = Math.round((new Date().getTimezoneOffset() / 60)
						* (-1) * 1000) / 1000;
				return gmtHours;
			};
			this.clientSoftware = function() {
				var SEP = '|';
				var PAIR = '=';

				// browser detection
				var ua = navigator.userAgent.toLowerCase();
				var opera = ua.indexOf("opera") >= 0;
				var ie = ua.indexOf("msie") >= 0 && !opera;

				var helper = new PAYPAL.bp.kgClientInfoHelper();
				var t = "";

				var ht = new KeyValueMap();
				ht.put('npnul32.dll', 'def');
				ht.put('npqtplugin6.dll', 'qt6');
				ht.put('npqtplugin5.dll', 'qt5');
				ht.put('npqtplugin4.dll', 'qt4');
				ht.put('npqtplugin3.dll', 'qt3');
				ht.put('npqtplugin2.dll', 'qt2');
				ht.put('npqtplugin.dll', 'qt1');
				ht.put('nppdf32.dll', 'pdf');
				ht.put('NPSWF32.dll', 'swf');
				ht.put('NPJava11.dll', 'j11');
				ht.put('NPJava12.dll', 'j12');
				ht.put('NPJava13.dll', 'j13');
				ht.put('NPJava32.dll', 'j32');
				ht.put('NPJava14.dll', 'j14');
				ht.put('npoji600.dll', 'j61');
				ht.put('NPJava131_16.dll', 'j16');
				ht.put('NPOFFICE.DLL', 'mso');
				ht.put('npdsplay.dll', 'wpm');
				ht.put('npwmsdrm.dll', 'drm');
				ht.put('npdrmv2.dll', 'drn');
				ht.put('nprjplug.dll', 'rjl');
				ht.put('nppl3260.dll', 'rpl');
				ht.put('nprpjplug.dll', 'rpv');
				ht.put('npchime.dll', 'chm');
				ht.put('npCortona.dll', 'cor');
				ht.put('np32dsw.dll', 'dsw');
				ht.put('np32asw.dll', 'asw');

				if (navigator.plugins.length > 0) {
					temp = "";
					moz = "";
					key = "";
					lastDir = "Plugins";
					for ( var g = 0; g < navigator.plugins.length; g++) {
						plugin = navigator.plugins[g];
						moz = helper.stripFullPath(plugin.filename, lastDir);
						key = ht.containsKey(moz);
						if (key) {
							temp += ht.get(moz) + SEP;
						} else {
							temp += "";
						}
					}
					t = helper.stripIllegalChars(temp);
				} else if (navigator.mimeTypes.length > 0) {
					key = "";
					for ( var i = 0; i < navigator.mimeTypes.length; i++) {
						mimeType = navigator.mimeTypes[i];
						key = ht.containsKey(mimeType);
						if (key) {
							t += ht.get(mimeType) + PAIR + mimeType + SEP;
						} else {
							t += "unknown" + PAIR + mimeType;
						}
					}
				} else if (ie) {
					names = [ "abk", "wnt", "aol", "arb", "chs", "cht", "dht",
							"dhj", "dan", "dsh", "heb", "ie5", "icw", "ibe",
							"iec", "ieh", "iee", "jap", "krn", "lan", "swf",
							"shw", "msn", "wmp", "obp", "oex", "net", "pan",
							"thi", "tks", "uni", "vtc", "vnm", "mvm", "vbs",
							"wfd" ];
					components = [ "7790769C-0471-11D2-AF11-00C04FA35D02",
							"89820200-ECBD-11CF-8B85-00AA005B4340",
							"47F67D00-9E55-11D1-BAEF-00C04FC2D130",
							"76C19B38-F0C8-11CF-87CC-0020AFEECF20",
							"76C19B34-F0C8-11CF-87CC-0020AFEECF20",
							"76C19B33-F0C8-11CF-87CC-0020AFEECF20",
							"9381D8F2-0288-11D0-9501-00AA00B911A5",
							"4F216970-C90C-11D1-B5C7-0000F8051515",
							"283807B5-2C60-11D0-A31D-00AA00B92C03",
							"44BBA848-CC51-11CF-AAFA-00AA00B6015C",
							"76C19B36-F0C8-11CF-87CC-0020AFEECF20",
							"89820200-ECBD-11CF-8B85-00AA005B4383",
							"5A8D6EE0-3E18-11D0-821E-444553540000",
							"630B1DA0-B465-11D1-9948-00C04F98BBC9",
							"08B0E5C0-4FCB-11CF-AAA5-00401C608555",
							"45EA75A0-A269-11D1-B5BF-0000F8051515",
							"DE5AED00-A4BF-11D1-9948-00C04F98BBC9",
							"76C19B30-F0C8-11CF-87CC-0020AFEECF20",
							"76C19B31-F0C8-11CF-87CC-0020AFEECF20",
							"76C19B50-F0C8-11CF-87CC-0020AFEECF20",
							"D27CDB6E-AE6D-11CF-96B8-444553540000",
							"2A202491-F00D-11CF-87CC-0020AFEECF20",
							"5945C046-LE7D-LLDL-BC44-00C04FD912BE",
							"22D6F312-B0F6-11D0-94AB-0080C74C7E95",
							"3AF36230-A269-11D1-B5BF-0000F8051515",
							"44BBA840-CC51-11CF-AAFA-00AA00B6015C",
							"44BBA842-CC51-11CF-AAFA-00AA00B6015B",
							"76C19B32-F0C8-11CF-87CC-0020AFEECF20",
							"76C19B35-F0C8-11CF-87CC-0020AFEECF20",
							"CC2A9BA0-3BDD-11D0-821E-444553540000",
							"3BF42070-B3B1-11D1-B5C5-0000F8051515",
							"10072CEC-8CC1-11D1-986E-00A0C955B42F",
							"76C19B37-F0C8-11CF-87CC-0020AFEECF20",
							"08B0E5C0-4FCB-11CF-AAA5-00401C608500",
							"4F645220-306D-11D2-995D-00C04F98BBC9",
							"73FA19D0-2D75-11D2-995D-00C04F98BBC9" ];
					document.body.addBehavior("#default#clientCaps");
					for (i = 0; i < components.length; i++) {
						ver = helper.activeXDetect(components[i]);
						var name = names[i];
						if (ver) {
							t += name + PAIR + ver + SEP;
						} else {
							t += "";
						}
					}
				}
				return t;
			};
		},
		init : function(formName, fieldName) {
			var infoStr = "", 
				kgHelper = new PAYPAL.bp.EbayKgClientInfoHelper(), 
				helper = new PAYPAL.bp.kgClientInfoHelper(), 
				kgObject = new PAYPAL.bp.kgClientInfoObject();

			for ( var k = 0; k < PAYPAL.bp.attributeArray.length; k++) {
				var paramStr = PAYPAL.bp.attributeArray[k][0];
				var paramExp = PAYPAL.bp.attributeArray[k][1];
				var val = "";
				try {
					val = eval(paramExp);
					if (typeof (val) == 'undefined') {
						val = "na";
					}
				} catch (e) {
					val = "na";
				}
				infoStr += helper.outputKeyValuePair(paramStr, val) + "~";
			}

			PAYPAL.common.appendField(formName, fieldName);
			document.getElementById(fieldName).value = "v="
					+ PAYPAL.bp.scriptVersion + ";" + infoStr;
		}
	};
})();

(function() {
PAYPAL.ks = {
	scriptVersion: 1,
	init: function(formName, cFieldId, sFieldName){
		PAYPAL.common.appendField(formName, sFieldName);
		var ks = new this.handler(cFieldId, sFieldName);		
		$('#'+cFieldId).bind('keydown',function(e){ks.capture(e);});
		$('#'+cFieldId).bind('keyup',function(e){ ks.capture(e); });		
	},
	handler: function(cFieldId, sFieldName){
		this.cFieldId = cFieldId;
		this.sFieldName = sFieldName;
		this.baseTime = new Date().getTime();
		this.keyIndex = 0;
		this.keyIndexArray = []; //Stores the indexed position of characters on keydown for retrieval on keyup of the same character
		this.storageArray = []; //Stores the result string
		this.ignoreArray = {
			"9" : "tab",
			"16" : "shift",
			"17" : "ctrl",
			"18" : "alt" };
		this.keeperArray = {
			"8" : "bkspace",
			"46" : "delete" };
		this.capture = function(e){
			var keynum;
			var delta;
			
			if (window.event){ // IE
				keynum = e.keyCode;
			}
			else if (e.which){ // Netscape/Firefox/Opera
				keynum = e.which;
			}
			
			if (!(keynum in this.ignoreArray)){
				var currTime = new Date().getTime();
				delta = currTime - this.baseTime;
				this.baseTime = currTime;
				
				if (keynum in this.keeperArray){
					//Unmasked Keys
					if (e.type == "keydown"){
						this.storageArray.push("Dk" + keynum + ":" + delta);
					}
					else if (e.type == "keyup"){
						this.storageArray.push("Uk" + keynum + ":" + delta);
					}
				}
				else {
					//Masked Keys
					if (e.type == "keydown"){
						this.storageArray.push("Di" + this.keyIndex + ":" + delta);
						this.keyIndexArray[keynum] = this.keyIndex;
						this.keyIndex++;
					}
					else if (e.type == "keyup"){
						this.storageArray.push("Ui" + this.keyIndexArray[keynum] + ":" + delta);
					}
				}
				var inputField = document.getElementById(this.cFieldId);
				document.getElementById(this.sFieldName).value = "v=" + PAYPAL.ks.scriptVersion + ";" + "l=" + inputField.value.length + ";" + this.storageArray.join("");
			}
		};
	}
};
})();

/**
 * @name Modal Dialog (Lightbox)
 * @author Jason Gabriele <jgabriele@paypal.com>
 *
 * @fileOverview Modal Dialog/Lightbox
 * Extends the JQuery UI Modal Dialog with special effects. The title attribute
 * will be used as the heading in the dialog
 *
 * Also, adds a slide-in box for mobile
 *
 * Note: if you put in an iframe, the modal will automatically load the iframe within
 *
 * @example
 * <div id="forgot-password-modal" title="Password Recovery">
 *   <iframe scrolling="no" data-src="/us/webapps/accountrecovery/passwordrecovery" tabindex="0"></iframe>
 * </div>
 *
 *  new PAYPAL.Marketing.Modal('#forgot-password-modal', { minHeight: 500, minWidth: 350 })
 */

$.fn.namespace("PAYPAL.Marketing");

(function() {
    "use strict";

    // Transition end event
    var TRANSITION_END_NAME = (Modernizr.prefixed('transition') === 'transition') ? 'transitionend' : 'webkitTransitionEnd';

    /**
     * @constructor
     * @this Modal
     * @param {object|string} dialog Modal dialog to use
     * @param {string} options Options for Modal dialog (only applies to non-mobile version)
     */
    PAYPAL.Marketing.Modal = function(dialog, options) {
        this._$dialog = null;
        this._$modal = null;
        this._$closer = null;
        this._$isOpen = false;

        // Check for mobile
        if ($(document.documentElement).data('device-type') === 'mobile') {
            this._$modal = $(dialog);

            // initializing modal object

            // Add aria role
            this._$modal.attr('aria-role', 'dialog');

            // Remove initial class
            this._$modal.removeClass('mpp-modal');

            // Pull off and reattach to body
            this._$modal.remove();
            $(document.body).append(this._$modal);

            // Add main class
            this._$modal.addClass('mobile-modal');

            if (this._$modal.children('.titlebar').length === 0) {
                // Add titlebar
                var titlebar = $('<div></div>');
                titlebar.addClass('titlebar');

                // Take title from modal
                var title = this._$modal.attr('title');
                if (title) {
                    titlebar.text(title);
                }

                // Add close button
                this._$closer = $('<a></a>');
                this._$closer.addClass('closer');
                this._$closer.attr('role', 'button');
                this._$closer.attr('href', '#' + PP_GLOBAL_JS_STRINGS["CLOSE"]);
                this._$closer.text(PP_GLOBAL_JS_STRINGS["CLOSE"]);
                titlebar.append(this._$closer);

                this._$modal.prepend(titlebar);
            }

        } else {
            // Build options
            var opts = {
                modal: true,
                autoOpen: false,
                draggable: false,
                resizable: false,
                closeOnEscape: true,
                dialogClass: 'start'
            };
            $.extend(opts, options);
            this._closeOnEscape = opts["closeOnEscape"];

            // Create it
            this._$dialog = $(dialog).dialog(opts);

            // Add aria-label if necessary
            if ($(dialog).attr('aria-label')) {
                this._$dialog.closest('.ui-dialog').
                attr('aria-label', $(dialog).attr('aria-label')).
                removeAttr('aria-labelledby');
            }

            // Remove initial class
            $(dialog).removeClass('mpp-modal');
        }

        // Add events
        this._attachEvents();
    }

    PAYPAL.Marketing.Modal.prototype = {
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
         * Attach all events
         */
        _attachEvents: function() {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];

            // Dialog events
            if (this._$dialog) {
                this._events.push(this._$dialog.on('dialogopen', $.proxy(this._dialogOpen, this)));
                this._events.push(this._$dialog.on('dialogclose', $.proxy(this._dialogClose, this)));
                this._events.push(this._$dialog.on('dialogbeforeclose', $.proxy(this._fadeOutDialog, this)));

                this._events.push($(window).on('resize', $.proxy(this._reposition, this)));

                // Catch overlay clicks
                if (this._closeOnEscape) {
                   // console.log('attaching _closeOnEscape',this._closeOnEscape);
                    this._events.push($(window).on('click', $.proxy(this._catchOverlay, this)));
                }
                // Disabled
                /*
                this._events.push(this._$dialog.on('submit', $.proxy(function(e)
                {
                    e.preventDefault();

                    // Dismiss dialog
                    this.hide();

                    $(window).trigger('LOGGED_IN', { target: e.target, type: 'LOGGED_IN' });
                }, this)));
                */
            } else {
                this._events.push(this._$modal.on('click', 'a.closer', $.proxy(this.hide, this)));

                // Disabled
                /*
                this._events.push(this._$modal.on('submit', $.proxy(function(e)
                {
                    e.preventDefault();

                    // Dismiss dialog
                    this.hide();

                    $(window).trigger('LOGGED_IN', { target: e.target, type: 'LOGGED_IN' });
                }, this)));
                */
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

        // Reposition jQuery modal window on resize
        // http://api.jqueryui.com/dialog/#option-position
        _reposition: function(e) {
            this._$dialog.dialog("option", "position", {my: "center", at: "center", of: window});
        },

        // Dialog events
        _dialogOpen: function(e) {
            this._$dialog.closest('.ui-dialog').removeClass('start');

            var d = this._$dialog,
                fireEvent = function() {
                    $(window).trigger('MODAL_OPEN', d);
                };

            // Attach event on transition complete
            if (!Modernizr.csstransitions) {
                window.setTimeout($.proxy(fireEvent, this), 0);
            } else {
                this._$dialog.one(TRANSITION_END_NAME, $.proxy(fireEvent, this));
            }

            // Add body class
            $('#body').addClass('modal-on');

            // Stop Video
            PAYPAL.Marketing.MovingBackground.BlockAll();
        },

        // Fade out modal dialog
        _fadeOutDialog: function(e) {
            var d = this._$dialog.closest('.ui-dialog');

            // Modal already off
            if (d.hasClass('start')) return true;

            // Catch fadeout
            if (!Modernizr.csstransitions) {
                window.setTimeout($.proxy(this._reallyCloseDialog, this), 0);
            } else {
                d.one(TRANSITION_END_NAME, $.proxy(this._reallyCloseDialog, this));
            }

            // Remove body class
            $('#body').removeClass('modal-on');

            // Fade out dialog
            d.addClass('start');

            // Stop jQuery from closing the dialog
            return false;
        },

        // Done fading out
        _reallyCloseDialog: function() {
            this._$dialog.dialog('close');

            this._unloadIframe();
        },

        _dialogClose: function(e) {
            // Play Video
            PAYPAL.Marketing.MovingBackground.UnblockAll();

            // Fire event
            $(window).trigger('MODAL_CLOSED', this._$dialog);
        },

        /**
         * Catch clicks on the overlay
         */
        _catchOverlay: function(e) {
            if (!this._$dialog.dialog('isOpen')) return;

            var t = $(e.target);

            if (t.hasClass('ui-widget-overlay')) {
                e.preventDefault();            
                this.hide();
            }
        },

        /**
         * Auto removes the src for an iframe
         */
        _unloadIframe: function() {
            var iframe = (this._$dialog) ? this._$dialog.find('iframe') : this._$modal.find('iframe');

            // Remove iframe if auto-reload
            if (!iframe || !iframe.attr('src') || !iframe.data('auto-reload')) return;

            // Remove src
            iframe.attr('src', '');
        },

        /**
         * Show Dialog
         */
        show: function() {
            var iframe;

            // Check version
            if (this._$dialog) {
                if (this._$dialog.dialog('isOpen')) return;

                this._$dialog.dialog('open');
                iframe = this._$dialog.find('iframe');
                iframe.attr('tabindex', 0);

                iframe.onload = function() {
                    iframe.contents().find('input[type=text]')[0].focus();
                }
                // Fire event
                $(window).trigger('MODAL_OPEN', this._$dialog);
                // ensure the body of the dialog is at the top
                this._$dialog.scrollTop(0);
                this._$isOpen = true;
            } else {
                this._$modal.addClass('on');
                window.setTimeout($.proxy(function() {
                    var m = this._$modal,
                        fireEvent = function() {
                            $(window).trigger('MODAL_OPEN', m);
                        };

                    // Attach event on transition complete
                    if (!Modernizr.csstransitions) {
                        window.setTimeout($.proxy(fireEvent, this), 0);
                    } else {
                        this._$modal.one(TRANSITION_END_NAME, $.proxy(fireEvent, this));
                    }

                    // Slide into place
                    this._$modal.addClass('inplace');
                }, this), 0);
                iframe = this._$modal.find('iframe');

                // Stop Video
                PAYPAL.Marketing.MovingBackground.BlockAll();

                // Fire event
                $(window).trigger('MODAL_OPEN', this._$modal);
                this._$isOpen = true;
            }

            // Already loaded
            if (!iframe || iframe.attr('src') || !iframe.data('src')) return;

            // Auto load any iframes with data-src attrs
            iframe.attr('src', iframe.data('src'));
        },

        /**
         * Hide Dialog
         */
        hide: function() {

            // Check version
            if (this._$dialog) {
                if (this._$dialog.dialog('isOpen')) this._$dialog.dialog('close');
                // Fire event
                // $(window).trigger('MODAL_CLOSED', this._$dialog);

            } else {
                // Add done event
                if (!Modernizr.csstransitions) {
                    this._$modal.removeClass('on');
                } else {
                    this._$modal.one(TRANSITION_END_NAME, $.proxy(function(e) {
                        this._$modal.removeClass('on');
                    }, this));
                }


                // Start transition
                this._$modal.removeClass('inplace');

                // Play Video
                PAYPAL.Marketing.MovingBackground.UnblockAll();

                // Fire event
                $(window).trigger('MODAL_CLOSED', this._$modal);
            }

            this._unloadIframe();
            this._$isOpen = false;
        }
    };
})();

/**
 * @name Header Menu
 * @author Jason Gabriele <jgabriele@paypal.com>
 *
 * @fileOverview Handles both the desktop and mobile versions of the header menus
 *
 * @example
 *  new PAYPAL.Marketing.HeaderMenu('#menu-button', '#main-menu', '#login-modal');
 */

$.fn.namespace("PAYPAL.Marketing");

(function()
{
    "use strict";

    // Transition end name
    var TRANSITION_END_NAME = (Modernizr.prefixed('transition') === 'transition') ? 'transitionend' : 'webkitTransitionEnd';

    // Firefox needs time to render the css before it will calculate transitions
    var RENDERING_DELAY = (typeof window.mozInnerScreenX != 'undefined') ? 15 : 0;

    // This prevents a bug where the menu will freeze if open/closing it quickly
    var LONGER_RENDERING_DELAY = 30;

    // Number of px they have to move horizontally before the menu starts to close
    var X_DELTA = 12;

    /**
     * @constructor
     * @this HeaderMenu
     * @param {string|object} menuButton Button that triggers the menu to open/close
     * @param {string|object} menuBar Menu system
     * @param {string|object} loginModal Login Modal (Disabled)
     */
    PAYPAL.Marketing.HeaderMenu = function(menuButton, menuBar)
    {
        this._$menu = $(menuBar);
        this._$menuButton = $(menuButton);
        this._$body = $(document.body);
        this._$bodyDiv = this._$body.find('#body');

        this._$drops = this._$menu.find('a[rel="menuitem"]');
        this._$wrappers = this._$menu.find('.menu-wrapper');
        this._$menus = this._$menu.find('.subnav');

        // State
        this._isOpen = false;
        this._touchStartX = this._lastTouchX = null;
        this._touchStartY = null;
        this._lastDirection = 0;
        this._isMoving = this._isTouchMoving = false;

        // Login Modal
        //this._loginModal = new PAYPAL.Marketing.Modal(loginModal, { minHeight: 350, minWidth: 350 });
        this._loginComplete = null;

        // Mobile
        this._isMobile = $(document.documentElement).data('device-type') === 'mobile';
        this._useTranslate = true;

        // Check for crappy Samsung browsers
        if (navigator.userAgent.indexOf('Android') >= 0 && navigator.userAgent.indexOf('Chrome') === -1)
        {
            this._$body.addClass('samsung');
            this._useTranslate = false;
        }

        if (this._isMobile)
        {
            // Resize the menu to begin with
            this._resizeMobileMenu();

            // Hide mobile menu when not in use
            this._$menuButton.attr('aria-controls', this._$menu.attr('id'));
            this._$menuButton.attr('aria-expanded', 'false');
            this._$drops.attr('aria-expanded', 'false');
            // this._$menu.attr('aria-hidden', 'true');
            // Add hidden closer for whole menu
            this._$menu.append(this._createCloser());
        }
        // Highlight Header
        this._highlightHeader();

        // Attach events
        this._attachEvents();

        // Add ARIA for accessibility
        this._$drops.attr('role', 'button');
        this._$drops.attr('aria-expanded', 'false');
        this._$wrappers.attr('role', 'region');
        this._$wrappers.attr('tabIndex', '-1');

        // Custom phone/email validator
        jQuery.validator.addMethod("optionalemail", function(value, element)
        {
            // If numeric, then return true and let the phone validation run
            if ($.isNumeric(value.replace(/[(). +,-]+/g, ''))) return true;

            // Check for email
            // Taken from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
            if (/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@(?:(?!-))+((([a-zA-Z\-0-9]+(?:(?!-))+\.)+[a-zA-Z]{2,}))$/.test(value))
            {
                return true;
            }

            return false;

        }, PP_GLOBAL_JS_STRINGS["MESSAGE_EMAIL_OR_PHONE"]);

        jQuery.validator.addMethod("optionalphone", function(value, element)
        {
            var normalizedValue = value.replace(/[(). +,-]+/g, ''),
                validCC = {
                    '1':  [11],
                    '04': [10],
                    '60': [11, 12],
                    '52': [12],
                    '65': [10],
                    '55': [12, 13],
                    '34': [11],
                    '33': [11],
                    '39': [12],
                    '44': [12]
                },
                hasValidCC = false;

            // If email, return true to let email validation run
            if (!$.isNumeric(normalizedValue)) return true;

            // Remove leading 0s if longer than 10 characters
            if (normalizedValue.length > 10 && normalizedValue.substr(0, 1) === '0')
            {
                while (normalizedValue.length > 0 && normalizedValue.substr(0, 1) === '0')
                {
                    normalizedValue = normalizedValue.substr(1);
                }
            }

            // Make sure not longer than 13 chars
            if (normalizedValue.length > 13) return false;

            // Check for singapore
            if (normalizedValue.length === 8 &&
                (normalizedValue.substr(0, 1) === '8' || normalizedValue.substr(0, 1) === '9'))
            {
                hasValidCC = true;
            }
            // Check that number starts with one of the valid country codes and the length is correct for that country
            else
            {
                for (var i in validCC)
                {
                    /* Advanced check
                    for(var x = 0; x < validCC[i].length; x++)
                    {
                        if (normalizedValue.substr(0, i.length) === i &&
                            normalizedValue.length === validCC[i][x])
                        {
                            hasValidCC = true;
                            break;
                        }
                    }*/

                    // Simple check
                    if (normalizedValue.substr(0, i.length) === i && normalizedValue.length >= 10)
                    {
                        hasValidCC = true;
                        break;
                    }

                    if (hasValidCC) break;
                }
            }

            // Check for 10-digit that starts with 1
            if (normalizedValue.length === 10 && normalizedValue.substr(0, 1) === '1') return false;

            // Check for phone
            return hasValidCC || normalizedValue.length === 10;

        }, PP_GLOBAL_JS_STRINGS["MESSAGE_BADPHONE"]);

        jQuery.validator.addMethod("vcurrency", function(value, element)
        {
            // Check for numeric value
            return /^([0-9.,]+)$/.test(value);

        }, PP_GLOBAL_JS_STRINGS["MESSAGE_NUMBER"]);

        // Only create the validator for desktop/tablet
        if (this._isMobile) return;

        var validatationRules;
        // Type of send-money flow
        var SEND_MONEY_FLOW = $('#header-send-money-form').data('flow-type');

        if(SEND_MONEY_FLOW === '8ball') {
            validatationRules = {
                recipient: {
                    optionalemail: true,
                    optionalphone: true,
                    required: true
                },
                amount: {
                    vcurrency: true,
                    required: true
                }
            };
        } else {
            validatationRules = {
                email: {
                    optionalemail: true,
                    optionalphone: true,
                    required: true
                },
                amount: {
                    vcurrency: true,
                    required: true
                }
            };
        };

        // Send money form validation
        this._validator = $('#header-send-money-form').validate({
            rules: validatationRules,
            onsubmit: false,
            showErrors: function(errorMap, errorList)
            {
                // Remove existing errors
                $('#header-send-money-form .error-overlay').remove();
                $('#header-send-money-form .input-wrapper').removeClass('error');

                // Loop through each error
                for(var i = 0; i < errorList.length; i++)
                {
                    var element = $(errorList[i].element),
                        wrapper = element.closest('.input-wrapper'),
                        message = '',
                        messageId = 'err-mesg-' + Math.round(Math.random() * 1000);

                    wrapper.addClass('error');

                    // Add message below
                    var errorDiv = $("<div class='error-overlay' id='" + messageId + "'></div>");
                    errorDiv.text(errorList[i].message);
                    wrapper.append(errorDiv);

                    // Set described by
                    element.attr('aria-describedby', messageId);
                }
            }
        });
    }

    PAYPAL.Marketing.HeaderMenu.prototype = {
        _events: null,

        /**
         * Remove all events
         */
        destroy: function()
        {
            this._detachEvents();
        },

        /**
         * Are events attached?
         */
        _eventsAttached: function()
        {
            return this._events !== null;
        },

        /**
         * Attach all events
         */
        _attachEvents: function()
        {
            // Already attached
            if (this._eventsAttached()) return;

            this._events = [];
            this._delayedCommands = {};

            // Menu Button & Touch Scrolling
            if (this._isMobile === true)
            {
                this._events.push(this._$menuButton.on('touchstart MSPointerDown pointerdown', $.proxy(this._toggleState, this)));
                this._events.push(this._$menuButton.on('click', $.proxy(this._killIt, this)));

                this._events.push($(document.body).on('touchstart MSPointerDown pointerdown', $.proxy(this._touchStart, this)));
                this._events.push($(document.body).on('touchmove MSPointerMove pointermove', $.proxy(this._touchMove, this)));
                this._events.push($(document.body).on('touchend touchcancel MSPointerUp MSPointerCancel pointerup pointercancel', $.proxy(this._touchEnd, this)));

                // Menu expansion
                this._events.push(this._$menu.on('touchstart MSPointerDown pointerdown', 'a[rel="menuitem"]', $.proxy(this._toggleMenu, this)));

                // Resize menu on rotate
                this._events.push($(window).on('orientationchange', $.proxy(this._resizeMobileMenu, this)));

                // Scroll to top if menu open
                this._events.push($(window).on('scroll resize', $.proxy(this._scroll, this)));

                // Main menu closer
                this._events.push(this._$menu.on('click', '> .closer', $.proxy(this._toggleState, this)));
            }
            else
            {
                // Menu expansion
                this._events.push(this._$menu.on('click', 'a[rel="menuitem"]', $.proxy(this._toggleMenu, this)));

                // Fix weird orientation change scroll issue
                this._events.push($(window).on('orientationchange', $.proxy(this._orientationFix, this)));
            }

            // Form submission
            // Old send-money flow
            this._events.push(this._$menu.find('form.webscr').on('submit', $.proxy(this._formStepper, this)));
            // New send flow
            this._events.push(this._$menu.find('.continue').on('click', $.proxy(this._formStepperNew, this)));
            this._events.push(this._$menu.find('.gift, .goods').on('click', $.proxy(this._getAction, this)));

            this._events.push(this._$menu.find('input').on('change', $.proxy(this._formStepper, this)));

            // Login event
            //this._events.push($(window).on('LOGGED_IN', $.proxy(this._formStepper, this)));

            // Catch clicks on document
            this._events.push($(document.body).on('click', $.proxy(this._autoClose, this)));

            // Rotation
            this._events.push($(window).on('orientationchange', $.proxy(this.close, this)));

            // Closers
            this._events.push(this._$menu.on('click', '.menu-wrapper .closer', $.proxy(this._toggleMenu, this)));

            // Esc
            this._events.push($(document).on('keydown', $.proxy(this._escMenu, this)));
        },

        /**
         * Detach Events
         */
        _detachEvents: function()
        {
            if ($.isArray(this._events))
            {
                $.each(this._events, function(i, ev)
                {
                    ev.off();
                });

                this._events = null;
            }
        },

        _killIt: function(e)
        {
            // On mobile, dont do anything
            if (this._isMobile && $(e.target).hasClass('desktop-only')) return;

            e.preventDefault();
        },

        /**
         * Fix for weird orientation issue when errors are shown
         */
        _orientationFix: function()
        {
            if (!this._$bodyDiv.hasClass('menu-open')) return;

            // Hide menu, then scroll back into upper left
            this._closeAllMenus();

            // Wait 10 seconds for a reflow
            window.setTimeout($.proxy(function(e)
            {
                window.scrollTo(0, 0);
            }, this), 10);
        },

        /**
         * For desktop: clicks outside dropdown close it
         */
        _autoClose: function(e)
        {
            // Check that's actually open
            if (this._$menu.find('.menu-wrapper.open').length === 0) return;

            var t = $(e.target),
                inMenu = t.closest(this._$menu),
                inModal = t.closest('.ui-dialog'),
                inMobileModal = t.closest('.mobile-modal'),
                selectedWrapper = this._$menu.find('.menu-wrapper.open');

            // If in menu system or modal, then return
            if (inMenu.length > 0 || inModal.length > 0 || inMobileModal.length > 0) return;

            // Close existing drops
            this._$drops.removeClass('selected');
            this._$drops.attr('aria-expanded', 'false');

            // Close existing menus
            this._$wrappers.removeClass('done');
            this._$wrappers.removeClass('open');
            // Remove body class
            this._$bodyDiv.removeClass('menu-open');

            // Only remove menu when done
            if (!Modernizr.csstransitions)
            {
                selectedWrapper.removeClass('on');
                this._isMoving = false;
            }
            else
            {
                selectedWrapper.one(TRANSITION_END_NAME, $.proxy(this._removeWrapperClasses, this));
            }
        },

        // Closing X
        _createCloser: function()
        {
            var c = $('<a><span class="accessAid">' + PP_GLOBAL_JS_STRINGS["CLOSE"] + '</span></a>');
            c.attr('href', '#' + PP_GLOBAL_JS_STRINGS["CLOSE"]);
            c.addClass('closer');
            c.attr('role', 'button');
            c.attr('title', PP_GLOBAL_JS_STRINGS["CLOSE"]);

            return c;
        },

        /**
         * Checks if escape key is pressed then closes all menus
         */
        _escMenu: function(e)
        {
            // Check for keycode and menu open
            if (e.keyCode !== 27 || this._$menu.find('.menu-wrapper.open').length === 0) return;

            e.preventDefault();

            var selectedWrapper = this._$menu.find('.menu-wrapper.open'),
                selectedItem = selectedWrapper.parent().children('a'),
                selectedSubnav = selectedWrapper.children('.subnav');

            // Close existing drops
            this._$drops.removeClass('selected');
            this._$drops.attr('aria-expanded', 'false');

            // Close existing menus
            this._$wrappers.removeClass('done');
            this._$wrappers.removeClass('open');

            // Remove body class
            this._$bodyDiv.removeClass('menu-open');

            // Only remove menu when done
            if (!Modernizr.csstransitions)
            {
                selectedWrapper.removeClass('on');
                this._isMoving = false;
            }
            else
            {
                selectedWrapper.one(TRANSITION_END_NAME, $.proxy(this._removeWrapperClasses, this));
            }

            // Focus on menu
            selectedItem.focus();
        },

        /**
         * Show subnav
         */
        _toggleMenu: function(e)
        {
            // On mobile, dont do anything
            if (this._isMobile && $(e.target).hasClass('desktop-only')) return;

            e.preventDefault();

            // Check for moving menu
            if (this._isMoving) return;

            var selectedItem = ($(e.target).hasClass('closer')) ? $(e.target).closest('li').children('a[rel="menuitem"]') : $(e.target),
                selectedWrapper = selectedItem.parent().children('.menu-wrapper'),
                selectedSubnav = selectedWrapper.children('.subnav');

            // Remove all closers
            this._$wrappers.find('.closer').remove();

            // If already open, allow the menu to close then return
            if (selectedItem.hasClass('selected'))
            {
                // Mark as moving
                this._isMoving = true;

                // Close existing drops
                this._$drops.removeClass('selected');
                this._$drops.attr('aria-expanded', 'false');

                // Close existing menus
                this._$wrappers.removeClass('done');

                // Add fixed height for mobile
                if (this._isMobile) this._resizeMobileMenu();

                // Wait until done removal registers
                window.setTimeout($.proxy(function()
                {
                    this._$wrappers.removeClass('open');
                    this._$wrappers.css('height', '');

                    // Remove body class
                    this._$bodyDiv.removeClass('menu-open');

                    // Only remove menu when done
                    if (!Modernizr.csstransitions)
                    {
                        selectedWrapper.removeClass('on');
                        this._isMoving = false;
                    }
                    else
                    {
                        selectedWrapper.one(TRANSITION_END_NAME, $.proxy(this._removeWrapperClasses, this));
                    }

                    // Focus on menu
                    selectedItem.blur();
                }, this), RENDERING_DELAY);

                return;
            }
            // A different menu is open
            else if (this._$menu.find('.menu-wrapper.open').length > 0)
            {
                // Close existing drops
                this._$drops.removeClass('selected');
                this._$drops.attr('aria-expanded', 'false');

                // Close existing menus
                this._$wrappers.removeClass('done');
                this._$wrappers.removeClass('open');
                this._$wrappers.removeClass('on');
                this._$wrappers.css('height', '');

                // Open new menu
                selectedItem.addClass('selected');
                selectedItem.attr('aria-expanded', 'true');
                selectedWrapper.addClass('on');
                selectedWrapper.addClass('open');
                selectedWrapper.addClass('done');

                // Close form errors
                $('#header-send-money-form .error-overlay').remove();
                $('#header-send-money-form .input-wrapper').removeClass('error');

                // Add a closer
                selectedWrapper.append(this._createCloser());

                // Move back to step one if there is a stepper
                var form = selectedWrapper.find('form');
                if (form.length > 0) this._showFirstStep(form);

                // Focus on wrapper
                selectedWrapper.focus();

                // Set menu height
                this._setMenuHeight(selectedWrapper, true);

                // Stop moving
                this._isMoving = false;

                // Fire GA event
                if (typeof ga !== 'undefined' && ga !== null) ga('send', 'event', 'MPP Header Drawer', 'Open', selectedItem.text());
            }
            // Open one
            else
            {
                // Close existing drops
                this._closeAllMenus();

                // Open new menu
                selectedItem.addClass('selected');
                selectedItem.attr('aria-expanded', 'true');
                selectedWrapper.addClass('on');

                // Mark as moving
                this._isMoving = true;

                // Add a closer
                selectedWrapper.append(this._createCloser());

                // Move back to step one if there is a stepper
                var form = selectedWrapper.find('form');
                if (form.length > 0) this._showFirstStep(form);

                window.setTimeout($.proxy(function()
                {
                    this._$bodyDiv.addClass('menu-open');

                    // Add done when transition is complete
                    if (!Modernizr.csstransitions)
                    {
                        selectedWrapper.addClass('done');
                        this._isMoving = false;
                    }
                    else
                    {
                        selectedWrapper.one(TRANSITION_END_NAME, $.proxy(function()
                        {
                            selectedWrapper.addClass('done');
                            this._isMoving = false;
                        }, this));
                    }

                    // Set menu height
                    this._setMenuHeight(selectedWrapper, true);
                    selectedWrapper.addClass('open');

                    // Focus on wrapper
                    selectedWrapper.focus();
                }, this), LONGER_RENDERING_DELAY);

                // Fire GA event
                if (typeof ga !== 'undefined' && ga !== null) ga('send', 'event', 'MPP Header Drawer', 'Open', selectedItem.text());
            }
        },

        /**
         * Set the menu height used for animations
         */
        _setMenuHeight: function(wrapper, open)
        {
            if (!this._isMobile) return;

            if (open)
            {
                wrapper.css('height', wrapper.children().first().height() + 'px');
            }
            else
            {
                wrapper.css('height', '');
            }
        },

        /**
         * Fix height bug
         */
        _resizeMobileMenu: function()
        {
            this._$menu.css('height', window.innerHeight + 'px');
        },

        /**
         * Scroll to top of page if menu is open
         */
        _scroll: function(e)
        {
            if (this._isOpen && $(window).scrollTop() > 0)
            {
                $(window).scrollTop(0);
                this._$menu.scrollTop(0);
                this._$menu.scrollLeft(0);
                this._resizeMobileMenu();
            }
        },

        _removeWrapperClasses: function(e)
        {
            var t = $(e.target);

            t.removeClass('done');
            t.removeClass('open');
            t.removeClass('on');

            this._isMoving = false;
        },

        /**
         * Get first touch
         *
         * @param {object} e jQuery event object
         */
        _getTouch: function(e)
        {
            // Touchstart on IE
            if (typeof(e.originalEvent.touches) === "undefined" && typeof(e.originalEvent.touches) === "undefined") return e;

            return (e.originalEvent.touches) ? e.originalEvent.touches[0] : event.targetTouches[0];
        },

        /**
         * Handling touch scrolling to allow them to close the menu
         */
        _touchStart: function(e)
        {
            if (!this._isOpen) return;

            // IE make sure primary touch
            if ((typeof(window.navigator.msPointerEnabled) !== "undefined" || typeof(window.navigator.pointerEnabled) !== "undefined") &&
                !event.isPrimary) return;

            // If not in menu, stop scroll
            if ($(e.target).closest(this._$menu).length === 0)
            {
                e.preventDefault();
            }

            // Record start position
            this._touchStartX = this._lastTouchX = this._getTouch(e).pageX;
            this._touchStartY = this._getTouch(e).pageY;
        },

        _touchMove: function(e)
        {
            if (!this._isOpen) return;

            // IE make sure primary touch
            if ((typeof(window.navigator.msPointerEnabled) !== "undefined" || typeof(window.navigator.pointerEnabled) !== "undefined") &&
                !e.isPrimary) return;

            // Check for IE and pointer move - This is for testing on desktop IE
            if ((e.type === 'pointermove' || e.type === 'MSPointerMove') &&
                ((e.pointerType === e.MSPOINTER_TYPE_TOUCH && e.buttons != 1) || !e.isPrimary)) return;

            // Check the menu height to see if it fits
            var wHeight = window.innerHeight,
                menuHeight = this._$menu.get(0).scrollHeight,
                xDelta = this._getTouch(e).pageX - this._touchStartX,
                yDelta = this._getTouch(e).pageY - this._touchStartY;

            // Only stop the scroll if the menu is shorter
            if (wHeight >= menuHeight) e.preventDefault();

            // If they've moved more than Xpx sideways
            if (xDelta < -X_DELTA)
            {
                e.preventDefault();

                // Add body class
                if (this._isTouchMoving === false)
                {
                    this._isTouchMoving = true;
                    this._$bodyDiv.addClass('moving');
                    if (this._useTranslate)
                    {
                        if (Modernizr.prefixed('transform') === "WebkitTransform")
                        {
                            this._initialOffset = parseInt(this._$bodyDiv.css('-webkit-transform').split(',')[4]);
                        }
                        else
                        {
                            this._initialOffset = parseInt(this._$bodyDiv.css('transform').split(',')[4]);
                        }
                    }
                    else
                    {
                        this._initialOffset = parseInt(this._$bodyDiv.css('left'));
                    }
                }
            }

            // Move the body
            if (this._isTouchMoving)
            {
                window.setTimeout($.proxy(function()
                {
                    if (this._useTranslate)
                    {
                        this._$bodyDiv.css('-webkit-transform', 'translate3d(' + (this._initialOffset+xDelta) + 'px,0,0)');
                        this._$bodyDiv.css('transform', 'translate(' + (this._initialOffset+xDelta) + 'px,0)');
                    }
                    else
                    {
                        this._$bodyDiv.css('left', (this._initialOffset+xDelta) + 'px');
                    }

                }, this), RENDERING_DELAY);

                // Direction
                this._lastDirection = this._getTouch(e).pageX - this._lastTouchX;
            }

            // Store last touch position
            this._lastTouchX = this._getTouch(e).pageX;
        },

        _touchEnd: function(e)
        {
            if (!this._isOpen) return;

            // IE make sure primary touch
            if ((typeof(window.navigator.msPointerEnabled) !== "undefined" || typeof(window.navigator.pointerEnabled) !== "undefined") &&
                !e.isPrimary) return;

            // Turn off moving
            if (this._isTouchMoving)
            {
                this._isTouchMoving = false;
                this._$bodyDiv.removeClass('moving');

                window.setTimeout($.proxy(function()
                {
                    // Reset css value
                    this._$bodyDiv.css('left', '').css('-webkit-transform', '').css('transform', '');

                    // Close
                    if (this._lastDirection < 0)
                    {
                        this.close();
                    }
                }, this), RENDERING_DELAY);
            }

            // Reset
            this._touchStartX = null;
            this._touchStartY = null;
        },

        /**
         * Open/Close the menu (mobile)
         */
        _toggleState: function(e)
        {
            if (e) e.preventDefault();

            // Do nothing during animation
            if (this._$body.hasClass('on') && !this._isOpen) return;

            // Close
            if (this._isOpen)
            {
                this.close();
            }
            // Open
            else
            {
                this._$body.addClass('on');
                this._$body.addClass('open');
                this._isOpen = true;
                this._$menuButton.attr('aria-expanded', 'true');
                // this._$menu.attr('aria-hidden', 'false');

                // Focus on first item
                this._$drops.first().focus();

                // Fire GA event
                if (typeof ga !== 'undefined' && ga !== null) ga('send', 'event', 'MPP Mobile Menu', 'Open');
            }
        },

        /**
         * Close Menu (mobile)
         */
        close: function()
        {
            // Already closed
            if (!this._isOpen) return;

            if (!Modernizr.csstransitions)
            {
                this._$body.removeClass('on');
            }
            else
            {
                this._$body.one(TRANSITION_END_NAME, $.proxy(this._removeBodyClass, this));
            }

            this._$body.removeClass('open');
            this._isOpen = false;
            this._closeAllMenus();
            this._$menuButton.attr('aria-expanded', 'false');
            // this._$menu.attr('aria-hidden', 'true');

            // Focus on menu button
            this._$menuButton.focus();
        },

        _removeBodyClass: function()
        {
            this._$body.removeClass('on');
        },

        _closeAllMenus: function()
        {
            // Close existing drops
            this._$drops.removeClass('selected');
            this._$drops.attr('aria-expanded', 'false');

            // Close existing menus
            this._$wrappers.removeClass('done');
            this._$wrappers.removeClass('open');
            this._$wrappers.removeClass('on');
            this._$bodyDiv.removeClass('menu-open');
        },

        /**
         * Validates the send money form
         */
        _validateSendMoney: function()
        {
            return this._validator.form();
        },

        /**
         * Form stepper - used with the old(webscr) send-money flow
         */
        _formStepper: function(e)
        {
            var t = $(e.target);

            // Check type
            if (e.type === 'LOGGED_IN')
            {
                // Advance to next step
                this._showNextStep($('#header-send-money-form'));
            }
            else if (t.get(0).tagName === 'FORM')
            {
                // No stepper
                if (!t.hasClass('form-stepper')) return;

                // Look for current step
                var step = t.find('.step.shown');

                // No selected step
                if (step.length === 0) return;

                // Check for step instructions
                var instruct = step.data('step');

                if (instruct === 'step')
                {
                    e.preventDefault();
                    this._showNextStep(t);
                }
                else if(instruct === 'login')
                {
                    e.preventDefault();
                    //this._loginModal.show();
                }
                else if(instruct === 'submit')
                {
                    e.preventDefault();

                    if (!this._validateSendMoney())
                    {
                        // Focus on first error
                        t.find('.input-wrapper.error > input').first().focus();
                        return;
                    }

                    // Submit form
                    t.get(0).submit();
                }
            }
            else if (t.data('step') === 'submit')
            {
                t.closest('form').get(0).submit();
            }
            else if (t.data('step') === 'step')
            {
                e.preventDefault();

                this._showNextStep();
            }
            else if (t.data('step') === 'show-login')
            {
                e.preventDefault();

                //this._loginModal.show();
            }
        },

        /**
         * Form stepper - used with the new(8ball) send-money flow
         */
        _formStepperNew: function(e)
        {
            // Advance to next step
            this._showNextStep($('#header-send-money-form'));
        },

        _getAction : function(e) {
            if($(e.target).hasClass('validateForm')) {
                if (!this._validateSendMoney())
                {
                    // Focus on first error
                    $('#header-send-money-form').find('.input-wrapper.error > input').first().focus();
                    return false;
                }
            }
            $('#header-send-money-form').attr('action', e.target.dataset.url);
        },

        _showNextStep: function(form)
        {
            // Check current step
            if (!this._validateSendMoney())
            {
                // Focus on first error
                form.find('.input-wrapper.error > input').first().focus();
                return;
            }

            // Get next step
            var steps = form.find('.step'),
                curs = 0,
                els;
            for (var i = 0; i < steps.length; i++)
            {
                if ($(steps[i]).hasClass('shown'))
                {
                    curs = i;
                    break;
                }
            }

            // Remove shown
            $(steps[curs]).removeClass('shown');

            // Mark as current
            $(steps[curs+1]).addClass('shown');

            // Focus on first button or input
            els = $(steps[curs+1]).find('input');
            if (els.length > 0)
            {
                els.first().focus();
                return;
            }
            els = $(steps[curs+1]).find('button');
            if (els.length > 0)
            {
                els.first().focus();
            }

            // Fire GA event
            //if (typeof ga !== 'undefined' && ga !== null) ga('send', 'event', 'mpp-header-menu', 'show-step', curs+2);
        },

        _showFirstStep: function(form)
        {
            var steps = form.find('.step');
            steps.removeClass('shown');
            steps.first().addClass('shown');
        },
        /**
        * Highlight header nav depending on current URL
        */
        _highlightHeader: function()
        {
            //Check for URL Match
            var path = window.location.pathname;
            // Check if the path is not the root
            // For all the other cases it will automatically fallback correctly
            if(path !== 'https://www.paypal.com/'){
                // Find any link that matches the path and has the data-highlight attr
                this._$highlighlink = this._$menu.find("a[href*='" + path  + "'][data-highlight]");
                // Only if we find the link we'll do the process
                if(this._$highlighlink.length){
                    var attribute = this._$highlighlink.data('highlight');
                    // The selector for the parent menu is specified in the data attribute
                    $("#"+attribute).addClass('highlight');
                }
            }
        }
    };
})();

/**
 * Handles all header functions in new header
 */
$(function()
{
    var sideMenu,
        signupButton = $('#signup-button'),
        RENDERING_DELAY = (typeof window.mozInnerScreenX != 'undefined') ? 15 : 0;

    /*
     We don't currently need the below chunk of code but I expect we will need it soon, so I commented it out.
     // Get the country code of the page currently being rendered. In base.dust, the country code is being stored in the html lang attribute, so we can grab it from there.
     // The country code is used some Google Analytics tracking which we may want to disable for some countries for privacy reasons.
     var countryCodeArray = $("html").attr("lang").split("-");
     var countryCode = "";

     if (countryCodeArray.length === 2) {
     countryCode = countryCodeArray[1];
     }

     var isCountryCodeUSorCA = $.inArray(countryCode.toUpperCase(), ['US', 'CA']);
     */

    // Scroll window
    // Disable scroll fix so app banner shows
    //if ($(window).scrollTop() === 0) window.scrollTo(0, 0);

    // Header menu
    // Checking in case for new navigation
    if($('#body').hasClass('nav-simple')) {
        // using new navigation
        new PAYPAL.Marketing.HeaderMenu($('#menu-button'), $('#main-nav'));
    } else {
        new PAYPAL.Marketing.HeaderMenu($('#menu-button'), $('#main-menu'));
    }

    // Fake placeholders
    if (typeof($('#header-send-menu input[type=text]').placeholder) !== 'undefined')
    {
        var els = [$('#header-send-menu input[type=text]'),
            $('#header-send-menu input[type=number]'),
            $('#header-req-menu input[type=email]'),
            $('#header-req-menu input[type=number]')];

        for (var i = 0; i < els.length; i++)
        {
            els[i].placeholder();
            // Override top
            $(els[i]).css('top', '0').css('left', '0');
        }
    }

    signupButton.on('mousedown', function(e) {
        // Fire ga event
        if (typeof ga !== 'undefined' && ga !== null) ga('send', 'event', 'MPP Header Sign-Up Button', 'Outer');
    });

    // Turn off focus rects
    $(window).on('mousedown keydown', function(e)
    {
        if (e.type === 'mousedown')
        {
            if (!$(document.documentElement).hasClass('focus-off')) $(document.documentElement).addClass('focus-off');
        }
        else
        {
            if ($(document.documentElement).hasClass('focus-off')) $(document.documentElement).removeClass('focus-off');
        }
    });

    // hack for the fixed-top until we start using common partial on all homepages
    if ($('.hero').hasClass('hero-fixed')) {
        $('#fixed-top,#fixed-top .table-row, #fixed-top header[role=banner] > div, #fixed-top .hugger-row > div').css('display', 'block');
    };
    // variables used to use height for cookie/seperation banner
    var cookieHeight = 0,
        separationHeight = 0;

    // function for calculating the height of the banners and adjusting hero height.
    var heroHeightAdjust = function(height1, height2) {
        var $fixed = $('#fixed-top'),
            $hero = $('#fixed-top .hero'),
            $newHero = $('.nav-simple #fixed-top .hero'),
            $smallerHero = $('#fixed-top .hero-home'),
            $newSmallerHero = $('.nav-simple #fixed-top .hero-home'),
            dt = $(document.documentElement).data("device-type"),
            headerHeight = $('header[role=banner]').height(),
            huggerHeight = $('.hugger-row').height(),
            winHeight = $(window).height(),
            fixedHeight = winHeight - (height1 + height2),
            heroHeight = fixedHeight - headerHeight - huggerHeight,
            newHeroHeight = fixedHeight - huggerHeight;
            smallerHeroHeight = fixedHeight - 225;
            newSmallerHeroHeight = fixedHeight - 157;
        if (dt !== "mobile") {
            $fixed.css('height', fixedHeight + "px");
            $hero.css('height', heroHeight + "px");
            $newHero.css('height', newHeroHeight + "px");

            // for peeking content, reducing height of hero
            if($('.hero').hasClass('hero-home')) {
                $fixed.css('height', 'auto');
                $smallerHero.css('height', smallerHeroHeight + 'px');
                $newSmallerHero.css('height', newSmallerHeroHeight + 'px');
            }
        }
    };

    // closing cookie-notification banner (mainly used for EU)
    $('#cookie-alert-close').on('click', function() {
        $('.cookie-notification').css('display', 'none');
        // reverting height of hero-banner once we close notification
        cookieHeight = 0;
        localStorage.setItem("eu-cookie", "true");
        heroHeightAdjust(separationHeight, cookieHeight);
    });

    // closing separation-notification banner
    $('#sep-alert-close').on('click', function() {
        $('.separation-notification').css('display', 'none');
        // reverting height of hero-banner once we close notification
        localStorage.setItem("post-separate", "true");
        separationHeight = 0;
        heroHeightAdjust(separationHeight, cookieHeight);
    });

    // For company separation notification code
    // show and hide the separation notification
    var notificationstatus = JSON.parse(localStorage.getItem("post-separate"));
    if (notificationstatus !== true) {
        $('.separation-notification').show();
        separationHeight = $(".separation-notification").height();
        heroHeightAdjust(separationHeight, cookieHeight);
    } else {
        $('.separation-notification').hide();
        heroHeightAdjust(separationHeight, cookieHeight);
    }
    
    // show and hide the cookie notification for eu countries.
    var cookiestatus = JSON.parse(localStorage.getItem("eu-cookie"));
    if (cookiestatus !== true) {
        $('.cookie-notification').show();
        cookieHeight = $(".cookie-notification").height();
        heroHeightAdjust(separationHeight, cookieHeight);
    } else {
        $('.cookie-notification').hide();
        heroHeightAdjust(separationHeight, cookieHeight);
    }

    // Check size on resize of a window.
    $(window).on('resize', function(e) {
        heroHeightAdjust(separationHeight, cookieHeight);
    });

    // password recovery modal on the footer
    // since there is no footer.js, so adding it on the header.js file
    var pwd = new PAYPAL.Marketing.Modal('#forgot-password-modal', { minHeight: 500, minWidth: 380 });
    var dt = $(document.documentElement).data("device-type");
    if (dt != "mobile") {
        $('#footerForgotPasswordLink').on('click', function(event){
            event.preventDefault();
            pwd.show();
        })
    }
});

$(window).load(function() {

	/* Add external pixel tracking after entire page is loaded.
	*
	* HTML: <div class="hide externalTrackingSrc">www.yahoo.com/someURL</div> <div class="hide externalTrackingSrc">www.google.com/someURL?something=blah</div>
	* note: important to have the class="externalTrackingSrc".
	*
	* Results:
	* 	<div id="externalTracking">
	* 		<img src="www.yahoo.com/someURL" height="1" width="1" alt="">
	* 		<img src="www.google.com/someURL?something=blah" height="1" width="1" alt="">
	*	</div>
	*/
	var mpp2ExtTrackingID = $('#externalTracking')[0];
	/* Check if not exist. */
	if (mpp2ExtTrackingID == null) {
		var elem = $('.externalTrackingSrc')[0];
		if (elem) {
			/* Get all external tracking URLs and append the image(s) to the html body. */
			var extTrackingImg = $('.externalTrackingSrc').map(function() {
				var trackSRC = $(this).text();
				var trackImage = '<img src="' + $.trim(trackSRC) + '" height="1" width="1" alt="" />';
				return trackImage;
			}).get().join(' ');

			var trackingContent = '<div id="externalTracking">' + extTrackingImg + '</div>';

			$("body").append(trackingContent);
		}
	}

	/* Replace X million users */
	var CONSTANTS = CONSTANTS || {};
    CONSTANTS['active-digital-wallets'] = 169;
    CONSTANTS['cn-simplified-pp-accts'] = 1.69;
    CONSTANTS['kr-pp-accts'] = "1억 6,900";
    CONSTANTS['markets'] = 203;
    CONSTANTS['currencies-payments'] = 100;
    CONSTANTS['currencies-withdraw'] = 57;
    CONSTANTS['partners'] = 40;
    CONSTANTS['countries'] = 26;
    // Germany PPusers alone
    CONSTANTS['german-active-digital-wallets'] = 16;

    $('span.active-digital-wallets').html(CONSTANTS['active-digital-wallets']);
    // Chinese simplified active users
    $('span.cn-simplified-pp-accts').html(CONSTANTS['cn-simplified-pp-accts']);
    // Korean active users
    $('span.kr-pp-accts').html(CONSTANTS['kr-pp-accts']);
    // Germany PPusers alone
    $('span.german-active-digital-wallets').html(CONSTANTS['german-active-digital-wallets']);
});

