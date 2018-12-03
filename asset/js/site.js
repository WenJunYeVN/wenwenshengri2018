$(document).ready(function(){
  $('.hpbd-text-2, .giftbox').hide();

  var loader = $(".page-loader");

  if (loader.data("active")) { return; }
  loader.show().data("active", true);
  setTimeout(function() {
    loader.fadeOut().data("active", false);
    $('.hpbd-text-1 > .tlt').textillate();

    setTimeout(function() {
      $('.hpbd-text-1').fadeOut();
      $('.hpbd-text-2').fadeIn().addClass('animated tada');

      setTimeout(function() {
        $('.giftbox').fadeIn().addClass('animated bounce infinite');
        $.scrollify({
          section : ".section",
        });
      }, 3000);
    }, 3000);
  }, 3000);

  $('#firstLetter').on('click', function(e) {
    e.preventDefault();

    $('body, html').animate({
      scrollTop: $('#letterSection').offset().top
    }, 'slow');
  });
});