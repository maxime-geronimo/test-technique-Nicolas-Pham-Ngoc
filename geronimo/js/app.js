$(document).ready(function(){
	$(".burger").click(function () { //parent$
		$(".burger_menu").slideToggle("slow"); //enfant
		$('.burger_menu').css({"display":"block !important"});
		return false; 
	});  
});//end function