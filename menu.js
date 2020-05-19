$(document).ready(function() {
  $('.menu-trigger').click(function() {
    $('nav ul').slideToggle(500);
  }); //end slide toggle//


  $(window).resize(function() {
	   if (  $(window).width() > 700 ) {
		$('nav ul').removeAttr('style');
	 }
	});


//   $( ".workindex:hover" ).resizable({
//     animate: true
//   });
//
//   var animate = $( ".selector" ).resizable( "option", "animate" );
//
// // Setter
// $( ".workindex:hover" ).resizable( "option", "animate", true );
//
//
//
// $( ".workindex:hover" ).resizable({
//   animateEasing: "easeOutBounce"
// });
// 
// var animateEasing = $( ".workindex" ).resizable( "option", "animateEasing" );
//
// $( ".workindex:hover" ).resizable( "option", "animateEasing", "easeOutBounce" );

});
