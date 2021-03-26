$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 100){
      $("#scroll-btn").fadeIn();
    }
    else{
      $("#scroll-btn").fadeOut();
    }
  });

  $("#scroll-btn").click(function(){
    $("html, bady").animate({scrollTop: 0}, 700);
    return false;
  });
});
