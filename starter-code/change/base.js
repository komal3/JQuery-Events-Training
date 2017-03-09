console.log("Sanity Check: JS is working!");

$(document).ready(function(){

  $("#time").text( Date.now() );
  $( "input" ).keyup(function() {
  var num1 = $('#left').val();
   var num2 = $('#right').val();
   var newValue = Number(num1) + Number(num2);
   $('#total').val(newValue);

  
 })
 .keyup();
});
