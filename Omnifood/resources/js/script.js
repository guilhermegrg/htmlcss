$(document).ready(function(){
    
    $('h1').click(function(){
        $(this).css('background-color','#f00');
    });
    
   
//    sticky nav
    $('.js--section-features').waypoint(function(direction) {
        if(direction == "down"){
//    alert('Basic waypoint triggered');           
        
            $("nav").addClass('sticky');
            
//    scroll on buttons             $("nav").addClass('sticky');
           }else{
           $("nav").removeClass('sticky');
           }
  },{offset: "60px"});
  
    $(".js--scroll-to-plans").click(function(){
       $('html, body').animate({scrollTop: $(".section-plans").offset().top},1000); 
    });
    
   
       $(".js--scroll-to-start").click(function(){
       $('html, body').animate({scrollTop: $(".section-features").offset().top},400); 
    }); 
    

    
    
    //nav scroll
    
   $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
    
    
    
    
    //animations
    $('.js--anim-1').waypoint(function(direction) {
//        alert("reached!");
            $('.js--anim-1').addClass("animated fadeIn");
//        }
    },{offset: "50%"});
    
    
    $('.js--anim-2').waypoint(function(direction) {
//        alert("reached!");
            $('.js--anim-2').addClass("animated fadeInUp");
//        }
    },{offset: "50%"});
    
    
    $('.js--anim-3').waypoint(function(direction) {
//        alert("reached!");
            $('.js--anim-3').addClass("animated fadeIn");
//        }
    },{offset: "50%"});
    
    
    $('.js--anim-4').waypoint(function(direction) {
//        alert("reached!");
            $('.js--anim-4').addClass("animated pulse");
//        }
    },{offset: "50%"});
    
    
    
    
    //mobile nav
    
      $('.mobile-nav-icon').click(function(){
        var symbol = $('.mobile-nav-icon ion-icon').attr("name");
          
          $('.main-nav').slideToggle(200);
          
          if(symbol == "menu"){
              //open
              $('.mobile-nav-icon ion-icon').attr("name", "close");
//              $('.main-nav').css("display","block");
          }else{
              //close
            $('.mobile-nav-icon ion-icon').attr("name", "menu");
//            $('.main-nav').css("display","none");

          }
        //$(this).css('display','none');
        //$(".main-nav").css('display','none');
    });
    
    
});