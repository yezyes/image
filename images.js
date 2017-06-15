$(document).ready(function(){

	$(".before").click(function(){

		$(".before").fadeOut()
		$(".after").fadeIn()

})

		$('.after').click(function(){
		$('.after').fadeOut();
		$('.before').fadeIn();	

})

});