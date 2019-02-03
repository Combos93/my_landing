$(function(){

  $('.hide_this').hide();

  $('.click').click(function () {
    $(this).next().slideToggle({duration: 300});
  })
});
