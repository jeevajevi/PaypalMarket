$(function(){
  var eventName;
  var isiPad = /ipad/i.test(navigator.userAgent.toLowerCase());
  var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());
  // For iOS
  if (typeof(window.ontap) === "object")  {
      eventName = "tap";
  } else {
    eventName = "click";
  } 
 
    $('li .answer').on(eventName, function(e) {      
      e.stopImmediatePropagation();      
  });  
  
  $('.cost ul > li, .getstarted ul > li, .paypalHere ul > li').on(eventName, function(e){
    e.preventDefault();
    var curElem = $(this), allList = $("li.expanded"), ans = curElem.find('div.answer'), ques= curElem.find('a.question');
    ques.attr('aria-expanded',false);
    if (curElem.hasClass("expanded")) {
      curElem.removeClass("expanded");
      ans.css('height',''); $("div.answer").css('height',''); 
    } else {
        curElem.addClass("expanded");
        $("div.answer").css('height','');
        allList.removeClass("expanded"); 
        $('a.question').attr('aria-expanded',false);
        ques.attr('aria-expanded',true);
        ans.css('height', (ans.children('.inner').first().height()+10) + 'px'); 
    }
  });
 $(".headerMenu").on(eventName, function(e) {             
   $(".headerToggleBar").css({left:e.pageX - 135, top:e.pageY + 20});
    $(".headerToggleBar").slideToggle( "fast", function(){});
  });  

  $(".fancy-down-arrow").on(eventName,function(e) {
     e.preventDefault();
     $(this).closest("section").addClass("on");
     $(window).scrollTop($('#usingpaypalhere').position().top);
  });
   /* expands the each module based on the hash query string*/ 
   var hashString=window.location.hash.split('#');
   if (hashString.length > 1 && hashString[1] != undefined) {
     var queryString= hashString[1].substring(0,3);
     var floater=$('#floater').outerHeight();
     if (queryString=='faq'){
        var ans=$('li.'+hashString[1]).find('div.answer');
        var ctrpos=$('li.'+hashString[1]).position().top;
        $('li.'+hashString[1]).trigger(eventName);
        $("html,body").animate({scrollTop:ctrpos-floater},"slow");
        ans.css('height', (ans.children('.inner').first().height()+28) + 'px');
      }
      else if(queryString=='ans'){
        var parentClass= $('#'+hashString[1]).parent('li').attr("class");
        var ans=$('li.'+parentClass).find('div.answer');
        var pos=$('li.'+parentClass).position().top;
        $('li.'+parentClass).trigger(eventName);
        $("html,body").animate({scrollTop:pos-floater},"slow");
        ans.css('height', (ans.children('.inner').first().height()+28) + 'px');
      }
    }
  if(!(isiPad||isAndroid)){
    $(window).scroll(function(){
      var topWindow = $(window).scrollTop(), topWindow = topWindow * 1.35, windowHeight = $(window).height(), 
      position = topWindow / windowHeight, floatingBar = $(".floating-bar"), downArrow = $('.fancy-down-arrow'),
      btn = floatingBar.find(".btn"), bt = floatingBar.offset().top;

      position = 1 - position;

      downArrow.css('opacity', position);

      if ($("#floater").hasClass("on")) {
        btn.show();
        downArrow.addClass('buttonHide');
        downArrow.removeClass('ieShow').addClass('ieHide');
      }      
      else {
        downArrow.removeClass('ieHide').addClass('ieShow');
        downArrow.removeClass('buttonHide');
        btn.hide();         	
      }         
    });     
  }
});

