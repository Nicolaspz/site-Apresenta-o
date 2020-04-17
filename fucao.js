$(document).ready(function()
{
  
$('.icobars').click(()=>{
  $('.menu-mobile').slideToggle();
});


$('.menu a').on('click',function(){
 
  var href = $(this).attr('href');
  var ofsetTTop = $(href).offset().top - 65;
   $('html, body').animate({'scrollTop':ofsetTTop},2000);
  });
  $('.up').click(()=>{
    $('html, body').animate({'scrollTop':0},2000);
  });
  $('.menu-mobile a').on('click',function(){
    $('.menu-mobile').slideToggle();
  })


});