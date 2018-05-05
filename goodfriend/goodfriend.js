$(document).ready(function(){

	// var randomNumber1 = Math.floor(Math.random()*300);
	// var randomNumber2 = Math.floor(Math.random()*300);
	// var randomNumber3 = Math.floor(Math.random()*300);
	// var randomNumber4 = Math.floor(Math.random()*300);
	// var randomNumber5 = Math.floor(Math.random()*300);
	// var randomNumber6 = Math.floor(Math.random()*300);
	// var randomNumber7 = Math.floor(Math.random()*300);
	// var randomNumber8 = Math.floor(Math.random()*300);
	// var randomNumber9 = Math.floor(Math.random()*300);
	// var randomNumber10 = Math.floor(Math.random()*300);
	// var randomNumber11 = Math.floor(Math.random()*300);
	// var randomNumber12 = Math.floor(Math.random()*300);

	// console.log(randomNumber1)


	// document.getElementById("body").addEventListener("click", function(){
	// 	document.getElementById("olivia").style.left= (randomNumber1 + "%");
	// 	document.getElementById("mark").style.left= (randomNumber2 + "%");
	// 	document.getElementById("diana").style.left= (randomNumber3 + "%");
	// 	document.getElementById("emma").style.left= (randomNumber4 + "%");
	// 	document.getElementById("nolan").style.left= (randomNumber5 + "%");
	// 	document.getElementById("monica").style.left= (randomNumber6 + "%");
	// 	document.getElementById("olivia").style.top= (randomNumber7 + "%");
	// 	document.getElementById("mark").style.top= (randomNumber8 + "%");
	// 	document.getElementById("diana").style.top= (randomNumber9 + "%");
	// 	document.getElementById("emma").style.top= (randomNumber10 + "%");
	// 	document.getElementById("nolan").style.top= (randomNumber11 + "%");
	// 	document.getElementById("monica").style.top= (randomNumber12 + "%");
	// 	console.log()
	// })

	document.getElementById("body").addEventListener("click", function(){

		$( ".box" ).each(function( index ) {
			var degree = Math.floor(Math.random()*300);
  			$(this).css({ WebkitTransform: 'rotate(' + degree + 'deg)'});
		});
		// document.getElementById("olivia").style.transform= ("rotate(" + randomNumber1 + "deg)");
		// document.getElementById("mark").style.transform= ("rotate(" + randomNumber2 + "deg)");
		// document.getElementById("diana").style.transform= ("rotate(" + randomNumber3 + "deg)");
		// document.getElementById("emma").style.transform= ("rotate(" + randomNumber4 + "deg)");
		// document.getElementById("nolan").style.transform= ("rotate(" + randomNumber5 + "deg)");
		// document.getElementById("monica").style.transform= ("rotate(" + randomNumber6 + "deg)");
		// document.getElementById("paige").style.transform= ("rotate(" + randomNumber7 + "deg)");
		// document.getElementById("tay").style.transform= ("rotate(" + randomNumber8 + "deg)");
		// document.getElementById("katie").style.transform= ("rotate(" + randomNumber9 + "deg)");
		// document.getElementById("charlie").style.transform= ("rotate(" + randomNumber10 + "deg)");
		// document.getElementById("izzy").style.transform= ("rotate(" + randomNumber11 + "deg)");
		// document.getElementById("ethan").style.transform= ("rotate(" + randomNumber12 + "deg)");

	})


	$( ".box" ).mouseover(function() {
	  $(".box").css( "z-index", "100" );
	  console.log("1")
	});

	$( ".box" ).mouseenter(function() {
		var $theImage = $(this).find(".image");
		$theImage.hide();
	}).mouseleave(function(){
		var $theImage = $(this).find(".image");
		$theImage.show();
	});

	$(".title").click(function(){
		$(".info").toggle()

	});

});


