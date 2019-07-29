$( '.bars' ).click( function() {
    if ( $( 'header .menu li' ).is( ':hidden' ) ) {
     $( 'header .menu li' ).show('slideToggle');
   } else {
     $( 'header .menu li' ).hide('slideToggle');
   }
 });

$('.btn2').click(function(){ 

  if ($(".reg .pala #log").val().length==0 && $(".reg .pala #pass").val().length==0 && $(".reg .pala #email").val().length==0) {
    $(".reg .pala #log").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
    $(".reg .pala #pass").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
    $(".reg .pala #email").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
  } 
  else if ($(".reg .pala #log").val().length==0 && $(".reg .pala #pass").val().length>0  && $(".reg .pala #email").val().length>0){
    $(".reg .pala #log").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
    $(".reg .pala #pass").css("backgroundColor", "whitesmoke");
    $(".reg .pala #email").css("backgroundColor", "whitesmoke");
  }
  else if ($(".reg .pala #log").val().length>0 && $(".reg .pala #pass").val().length>0  && $(".reg .pala #email").val().length==0){
    $(".reg .pala #log").css("backgroundColor", "whitesmoke");
    $(".reg .pala #pass").css("backgroundColor", "whitesmoke");
    $(".reg .pala #email").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
  }
  else if ($(".reg .pala #log").val().length>0 && $(".reg .pala #pass").val().length==0  && $(".reg .pala #email").val().length>0){
    $(".reg .pala #log").css("backgroundColor", "whitesmoke");
    $(".reg .pala #pass").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
    $(".reg .pala #email").css("backgroundColor", "whitesmoke");
  }
  else if ($(".reg .pala #log").val().length==0 && $(".reg .pala #pass").val().length>0  && $(".reg .pala #email").val().length==0){
    $(".reg .pala #log").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
    $(".reg .pala #pass").css("backgroundColor", "whitesmoke");
    $(".reg .pala #email").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
  }
  else if ($(".reg .pala #log").val().length>0 && $(".reg .pala #pass").val().length==0  && $(".reg .pala #email").val().length==0){
    $(".reg .pala #log").css("backgroundColor", "whitesmoke");
    $(".reg .pala #pass").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
    $(".reg .pala #email").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
  }
  else if ($(".reg .pala #log").val().length==0 && $(".reg .pala #pass").val().length==0  && $(".reg .pala #email").val().length>0){
    $(".reg .pala #log").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
    $(".reg .pala #pass").css("backgroundColor", "rgba(255, 0, 0, 0.2)");
    $(".reg .pala #email").css("backgroundColor", "whitesmoke"); 
  }
  else {
    $(".reg .pala #log").css("backgroundColor", "whitesmoke");
    $(".reg .pala #pass").css("backgroundColor", "whitesmoke");
    $(".reg .pala #email").css("backgroundColor", "whitesmoke");
   }
});

