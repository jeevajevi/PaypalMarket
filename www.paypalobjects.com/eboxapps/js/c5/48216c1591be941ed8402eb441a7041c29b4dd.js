/**
 * Paypal Global JS
 * It contains all the functions used globally 
 * 
 */

/**
 * The PUI global namespace object
 */
if (typeof PAYPAL == "undefined") {
    var PAYPAL = {};
}

/**
 * Function for namespacing
 * Usage: $.fn.namespace("PAYPAL.core.widget");
 */

 (function ($) {
	    $.fn.namespace = function () {
	        var arg = arguments,
	            obj = null,
	            names, i, n;
	        for (i = 0; i < arg.length; ++i) {
	            names = arg[i].split(".");
	            obj = window;
	            for (n = 0; n < names.length; ++n) {
	                obj[names[n]] = obj[names[n]] || {};
	                obj = obj[names[n]];
	            }
	        }
	        return obj;
	    };
	})(jQuery);

/*
 * Set up name spaces
 */

(function($) {
$.fn.namespace(
	'PAYPAL.common','PAYPAL.core','PAYPAL.util','PAYPAL.bp','PAYPAL.ks', 'PAYPAL.tns', 'PAYPAL.core.util',	'PAYPAL.core.widget','PAYPAL.widget','PAYPAL.global');
}
)(jQuery);


//highlighting

/**
 * To hightlight an element's background color
 * The element's background color will be identified
 * Modified to #ffd683 and then brought back to original BG 
 */

(function($) {	
	PAYPAL.global.Highlight = function(elem) {
		var colorTo = '#ffd683';
		var duration = 2000;
		$(elem).effect('highlight',{color: colorTo}, duration);
	};
}
)(jQuery);

document.documentElement.className += ' jsEnabled';


//Lazy load

/**
* lazy call of a script with callback function
*/


(function($) {
PAYPAL.global.lazyLoadRoot = '';
PAYPAL.global.lazyLoad = function(url, callback) {	
	var scriptElt = document.createElement('script');
	scriptElt.type="text/javascript";
	
	if (typeof callback != 'undefined') {		
		if (scriptElt.readyState){  //IE			
			scriptElt.onreadystatechange = function () {
				if (scriptElt.readyState == 'loaded' || scriptElt.readyState == 'complete') {					
					callback();
				}
			};
		} else {  //Others			
			scriptElt.onload = function () {				
				callback();
			};
		}
	}
	scriptElt.src = PAYPAL.global.lazyLoadRoot + url;	
	document.getElementsByTagName('head')[0].appendChild(scriptElt);	
};
})(jQuery);


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

(function($) {
PAYPAL.global.HideShow = function (el, trigger, value) {
	this.el = el;
	this.trigger = trigger;
	this.value = value;
	this.init();
};
})(jQuery);

(function($) {
PAYPAL.global.HideShow.prototype = {
	
	init: function () {
		// setup DOM elements
		this.el = (typeof this.el === 'string') ? $('#'+this.el) : this.el;
		this.trigger = (typeof this.trigger === 'string') ? $('#'+this.trigger) : this.trigger;

		// check if it should already opened, otherwise hide it
		if (this.isOpen = $(this.el).hasClass('opened')) {
			this.show();
		} else {
			this.hide();
		}	
		// setup trigger events
		this.setTrigger(this.trigger);
	},
	
	toggle: function () {
		if (this.isOpen) {
			this.hide();
		} else {
			this.show();
		}	
	},
	
	hide: function (el) {
		if(el) {
			this.el = el;
		}
		$(this.el).removeClass('opened');
		$(this.el).addClass('accessAid');
		$(this.trigger).removeClass('opened');
		this.isOpen = false;
		$(this.el).trigger('hide');		
	},
	
	show: function (el) {
		if(el) {
			this.el = el;
		}		
		$(this.el).removeClass('accessAid');
		$(this.el).addClass('opened');
		$(this.trigger).addClass('opened');
		this.isOpen = true;
		$(this.el).trigger('show');
	},
	setTrigger: function (trigger) {
		if (!trigger) { return; }
		//trigger = (typeof trigger === 'string') ? $('#'+trigger) : trigger[0];		
		if (trigger) {
			
				var self = this;
				var tag = trigger.prop("tagName") && trigger.prop("tagName").toLowerCase();
				// anchors
				if (tag == 'a') {
						$(trigger).bind('click', function (e) {								
								e.preventDefault();
								self.toggle();
						});
				} else if (tag == 'select') {
						$(trigger).bind('change', function (e) {
								if (self.value && self.value === this.value || !self.value && this.checked) {
										self.show();
								} else {
										self.hide();
								}
						});
				// inputs
				} else {
						$(trigger).bind('click', function (e) {
								if (self.value && self.value === this.value || !self.value && this.checked) {
										self.show();
								} else {
										self.hide();
								}
						});
				}
		}
	},
	toggleOpposite: function (el) {
		var altHideShow;
		el = (typeof el === 'string') ? $('#'+el) : el;

		// keep the other element open if needed
		if (!this.isOpened) {
			$(el).addClass('opened');
		}	
		if (el instanceof PAYPAL.global.HideShow) {
			altHideShow = el;
		} else {
			altHideShow = new PAYPAL.global.HideShow(el);
		} 

		$(el).bind('hide', function(){
		altHideShow.show(el);
		});

		$(el).bind('show', function(){
		altHideShow.hide(el);
		});		
	}	
};
})(jQuery);

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

(function(){
PAYPAL.global.captureEnter = function(e) {
	
	if(e.charCode || e.keyCode) {
		/* get which key was pressed */
		var keyPressed = e.charCode || e.keyCode;
		
		/* in which element were we focused */
		var target = e.target || e.srcElement;
		
		/* we're only interested in trapping input elements */
		var validElements = /INPUT/i;
		
		/* allow enter on submit fields to go through */
		var omitElements = /SUBMIT|IMAGE/i;
		
		var btnParent,btns;
		
		if ((keyPressed == 13) && (validElements.test(target.nodeName)) && (!omitElements.test(target.type))) {			
			
			while((target = target.parentNode)){
	 			var targetNode = target.nodeName.toLowerCase();
	 			if (targetNode == 'form') {
	 				
	 				// If the form has a button with class 'default', trigger the click for that button. If not found, return true.
	 				//TODO: Both IF and ELSE blocks need to be re-factored for a clean solution.
	 				btns = $('.default', target);	 				
	 				if(btns && btns.length > 0){
	 					e.preventDefault();	 					
	 					btns[0].click();	 					
	 				}
	 				
	 				return true;
	 				
	 			} else if (targetNode == 'fieldset') {
				
	 				/* get all the default inputs/buttons that are descendants of this fieldset (includes child fieldsets as well!) */
	 				
					btns = $('.default', target);				
						 				
	 				$(btns).each(function() {
						
	 					btnParent = $(this).parent().get(0);						
						while ((btnParent = btnParent.parentNode)) {
	 					if(btnParent.nodeName.toLowerCase() == 'fieldset'){
	 						if (btnParent == target) {								
	 							e.preventDefault();
	 							$(this).click();
	 							return true;
	 						}
	 						else{
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
})(jQuery);

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

(function($) {
PAYPAL.global.SafeSubmit = function() {
		
		$('form.safeSubmit').bind('submit', function(e){			
			if(typeof $(this)._submitted == 'undefined') {
				$(this)._submitted = true;
				$(this).addClass('submitted');
			}
			else {
				e.preventDefault();
			}
		});		
};
})(jQuery);

//Multiple form submit

/**
 * Setup function for getting forms with multiple submits. Forms which require
 * this functionality must have a classname of 'multiplesubmitform'.
 * 
 */

(function($) {
PAYPAL.global.getMultipleSubmitForms = function() {
	$('.multiplesubmitform').bind('keypress', function(e){
		PAYPAL.global.captureEnter(e);
	});	
};
})(jQuery);

/**
 * Registering safe submit, hide show & capture enter functionalities
 * through a function on DOM ready 
 * 
 */
(function($){
	$(document).ready(function(){
		PAYPAL.global.getMultipleSubmitForms();
		PAYPAL.global.SafeSubmit();		
		
			$('.hideshow').each(function(){				
				var idid = $(this).attr('id');
				idid = '#'+idid;				
				var anchorElems = $('a[href='+'"'+idid+'"'+']');				
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
})(jQuery);


/**
 * Paypal Global JS
 * It contains all the functions used globally 
 * 
 */

/**
 * The PUI global namespace object added to the jQuery object
 */
if (typeof jQuery.PAYPAL == "undefined") {
	jQuery.PAYPAL = {};
}

/**
 * Function for namespacing
 * Usage: $.namespace("PAYPAL.core.widget", "tns");
 * The PAYPAL prefix is not needed but here for demonstration
 */

jQuery.namespace = function () {
		var args = arguments,
		obj = null, names, i, n;
		for (i = 0; i < args.length; ++i) {
			names = args[i].split(".");
		       	obj = jQuery.PAYPAL;
		       	for (n = (names[0] == "PAYPAL") ? 1 : 0; n < names.length; ++n) {
		                obj[names[n]] = obj[names[n]] || {};
		                obj = obj[names[n]];
		       	}
		}
		return obj;
};

/*
 * Set up name spaces
 */

$.namespace('common', 'PAYPAL.core', 'PAYPAL.util', 'PAYPAL.bp', 'PAYPAL.ks', 'PAYPAL.tns', 'PAYPAL.core.util', 'PAYPAL.core.widget', 'PAYPAL.widget', 'PAYPAL.global');

// PAYPAL is an alias for jQuery.PAYPAL
if (typeof PAYPAL == "undefined") {
	var PAYPAL = jQuery.PAYPAL;
}


