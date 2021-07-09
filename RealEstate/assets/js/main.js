
// =======JS for Sticky Header========

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("sticky-head");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// =======JS for Sticky Header End========



// ======carousel start======

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:false
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


// ======carousel End======


// =====property button =====

$(function(){
  $('#buy-btn').click(function(){
    $('#buy-property').show();
    $('#rent-property').hide();
  });
  $('#rent-btn').click(function(){
    $('#buy-property').hide();
    $('#rent-property').show();
  });
});


$(document).ready(function(){
$("#buy-btn").click(function(){
  $("#buy-btn").addClass("prop-btn-active");
  $("#rent-btn").removeClass("prop-btn-active");
  $('#buy-property').addClass('show')
  $('#rent-property').removeClass('show')
});
$("#rent-btn").click(function(){
  $("#buy-btn").removeClass("prop-btn-active");
  $("#rent-btn").addClass("prop-btn-active");
  $('#buy-property').removeClass('show')
  $('#rent-property').addClass('show')
});
});

// =====property button end=====


  /**
   * Animation on scroll
   */
   window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false
    });
  });

  /**
   * Testimonials slider
   */
   new Swiper('.testimonials-carousel', {
    speed: 400,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
  
  });