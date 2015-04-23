$('.navigation > li').bind('mouseover', openSubMenu);
$('.navigation > li').bind('mouseleave', closeSubMenu);

function openSubMenu() {
  $(this).addClass('active');
  $(this).find('> ul').stop(true, true).slideDown(200);
}

function closeSubMenu() {
  $(this).removeClass('active');
  $(this).find('> ul').stop(true, true).slideUp(200);
}

$(document).ready(function(){
  $('span.day').html(function(){
    var date = new Date();
    return (date.getDate());
  });
  $('span.month').html(function(){
    var date = new Date();
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"][date.getMonth()];
    return month;
  });
});

$(document).ready(function(){
  $('span.day').html(function(){
    var date = new Date();
    return (date.getDate());
  });
  $('span.month').html(function(){
    var date = new Date();
    var month = ["January","February","March","April","May","June","July","August","September","October","November","December"][date.getMonth()];
    return month;
  });
});

$(".toggle").on("click", function () {
    $(".container").toggleClass("microsoft");
});