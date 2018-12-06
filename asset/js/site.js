$(window).on('load', function() {
  // Animate loader off screen
  $(".page-loader").fadeOut("slow");

  $('.hpbd-text-1 > .tlt').textillate();

  setTimeout(function() {
    $('.hpbd-text-1').fadeOut();
    $('.hpbd-text-2').fadeIn().addClass('animated tada');

    setTimeout(function() {
      $('.giftbox').fadeIn().addClass('animated bounce infinite');

      if($(window).width() > 992) {
        $.scrollify({
          section : ".section"
        });
      }
    }, 3000);
  }, 3000);
});

$(document).ready(function(){
  if($(window).width() < 992) {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }
  
  $('.hpbd-text-2, .giftbox').hide();

  $('#firstLetter').on('click', function(e) {
    e.preventDefault();

    $('body, html').animate({
      scrollTop: $('#letterSection').offset().top
    }, 'slow');
  });

  $('.section-letter .carousel .carousel-inner .fanart-img').each(function() {
    var num = Math.floor(Math.random() * 40),
        img = $(this);

    img.find('img').attr('src', 'asset/img/fanart/fanart' + num + '.JPG');
  });
});