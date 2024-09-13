
// navbar 

$('.mobile-nav').hide();
$('.hide').hide();


$('.show').click (function(){
  $('.mobile-nav').slideDown();
  $('.show').hide();
  $('.hide').show();
})


$('.hide').click (function(){
  $('.mobile-nav').slideUp();
  $('.show').show();
  $('.hide').hide();
})



// service section 

$(".service-golo").hide();
$('.fa-caret-up').hide();


$(".fa-caret-down").click(function(){
  $('.service-golo').show();
  $('.fa-caret-down').hide();
  $('.fa-caret-up').show();

})


$(".fa-caret-up").click(function(){
  $('.service-golo').hide();
  $('.fa-caret-down').show();
  $('.fa-caret-up').hide();

})


