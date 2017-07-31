$(document).ready(function() {
  // main page, drop-down info
  $( ".hidden-info-title" ).click(function() {
    $( this ).toggleClass("open");
  });
  // main page, owl carousel
  $('.owl-carousel').owlCarousel({
    nav: true,
    items: 3,
    slideBy: 3,
    navText : ["<i class='arrow-left'></i>","<i class='arrow-right'></i>"],
    responsive : {
      // breakpoint from 0 up
      0 : {
        items: 1
      },
      // breakpoint from 768 up
      768 : {
        items: 2
      },
      // breakpoint from 1200 up
      1200 : {
        items: 3
      }
    }
  });
  // Podft page, tabs
  $('ul.tabs div').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs div').removeClass('current');
    $('.tab-content').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })
  // PVK page : show&hide info
  $(".hidden-info").click(function() {
    $(this).toggleClass('slick');
    $(this).siblings( ".hide" ).toggle( "slow", function() {});
  });
  // Open and close registration form
  $(".open-btn.open-btn-full").click(function() {
    $(".reg-form").show();
    $("#tab-1").addClass('current');
    $(".tab-1").addClass('current');
  });
  $(".open-btn.open-btn-demo").click(function() {
    $(".reg-form").show();
    $("#tab-2").addClass('current');
    $(".tab-2").addClass('current');
  });
  $(".close-btn").click(function() {
    $(".reg-form").hide();
    $("#tab-1").removeClass('current');
    $(".tab-1").removeClass('current');
    $("#tab-2").removeClass('current');
    $(".tab-2").removeClass('current');
  });
  // Seminar form
  $(".open-btn.open-seminar-form").click(function() {
    $(".reg-form-meeting").show();
  });
  $(".close-btn").click(function() {
    $(".reg-form-meeting").hide();
  });
  // Tabs reg form
  $('ul.tabs-regForm div').click(function(){
    var tab_id = $(this).attr('data-tab');

    $('ul.tabs-regForm div').removeClass('current');
    $('.tab-content-regForm').removeClass('current');

    $(this).addClass('current');
    $("#"+tab_id).addClass('current');
  })
});



