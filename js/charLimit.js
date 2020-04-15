//jQuery(document).ready(function($){

	//jQuery('#forumTextArea').on('input', function() {
		//var textarea = document.getElementById("forumTextArea");
		//var length = textarea.length;
		//var charactersLeft = 400 - length; 
	//	console.log(charactersLeft);
	//});
	
	//$('#forumTextArea').on('input', function() {
	//	console.log("Function Test");
	//});

//console.log("Test");
//});
jQuery(document).ready(function($){
    var textarea = document.getElementById("forumTextArea");
	textarea.addEventListener("keypress", function(){
		//console.log("keypress in textarea")
		var length = textarea.value.length;
        var charactersLeft = 400 - length;
		console.log(charactersLeft);
		$('.char-limit').html(charactersLeft)

	}, false);
});