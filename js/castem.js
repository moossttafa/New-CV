 $(function(){

    "use strict";
    
 //Triger nicescrool plugin
    
 $("body").niceScroll({
        
   cursorcolor: "#2896ca",
   cursorwidth: "10px",
   cursorborder: "1px solid #2896ca "
   
});

//smoothly scroll 

$('.navigation-bar .fas').click(function (e) {
        
   e.preventDefault();

   $('html , body').animate({ 

      scrollTop : $('#' + $(this).data('scroll')).offset().top + 1

   }, 1000);

  });

  //Add Activ class on Navebar

  $('.navigation-bar .fas').click(function (){

      $(this).addClass('active').parent().siblings().find('a').removeClass('active');
  });

  
 });