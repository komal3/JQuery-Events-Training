console.log("Sanity Check: JS is working!");
$(document).ready(function(){
  $( "span" ).click(function() {
    var num = $(this).attr('id');
    var text = $( "span" ).eq(Number(num - 1)).text();

    $('#list').text(text);

  });
  $("#time").text( Date.now() );
});
