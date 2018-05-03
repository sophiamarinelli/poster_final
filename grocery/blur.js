

$( function() {
    $( ".blurbox" ).draggable({
    });
  });

$(".blurbox").click(function(){
    //assign all divs `z-index` = 90 including clicked one
    $(".blurbox").css("z-index","90");
	//assign `z-index` = 100 to clicked one
    $(this).css("z-index","100");
});

$("#one").mouseenter(function(){
	$("#beans").css("display", "inline");
});

$("#one").mouseleave(function(){
	$("#beans").css("display", "none");
});

$("#two").mouseenter(function(){
	$("#blueberry").css("display", "inline");
	// $(".circle").css("display", "inline")
});

$("#two").mouseleave(function(){
	$("#blueberry").css("display", "none");
});

$("#three").mouseenter(function(){
	$("#meat").css("display", "inline");
	// $(".circle").css("display", "inline")
});

$("#three").mouseleave(function(){
	$("#meat").css("display", "none");
});

$("#four").mouseenter(function(){
	$("#lettuce").css("display", "inline");
	// $(".circle").css("display", "inline")
});

$("#four").mouseleave(function(){
	$("#lettuce").css("display", "none");
});

$("#five").mouseenter(function(){
	$("#beets").css("display", "inline");
	// $(".circle").css("display", "inline")
});

$("#five").mouseleave(function(){
	$("#beets").css("display", "none");
});

$("#six").mouseenter(function(){
	$("#banana").css("display", "inline");
	// $(".circle").css("display", "inline")
});

$("#six").mouseleave(function(){
	$("#banana").css("display", "none");
});


function mouseHandler(ev){
    document.getElementById('boxshadow').style.transform = 'translateY('+(ev.clientY)+'px)';
    document.getElementById('boxshadow').style.transform += 'translateX('+(ev.clientX)+'px)';            
}

document.getElementById("body").addEventListener("mousemove", mouseHandler)


$("#organize").mouseover(function(){
  $("#boxshadow").show();
  $("#boxshadow").css("z-index","4000000");
});


// var lastScrollTop = 0;
// $(window).scroll(function(event){
//    var st = $(this).scrollTop();
//    if (st > lastScrollTop){
//        $("body").css("background-color", "white");
//        $(".option").css("color", "black");
//    } else {
//    		$("body").css("background-color", "blue");
//        $(".grocerylist").css("color", "green");
//    }
//    lastScrollTop = st;
// });


// var randomNumber1 = Math.floor(Math.random()*100);
// var randomNumber2 = Math.floor(Math.random()*100);
// var randomNumber3 = Math.floor(Math.random()*100);
// var randomNumber4 = Math.floor(Math.random()*100);
// var randomNumber5 = Math.floor(Math.random()*100);
// var randomNumber6 = Math.floor(Math.random()*100);
// var randomNumber7 = Math.floor(Math.random()*100);
// var randomNumber8 = Math.floor(Math.random()*100);
// var randomNumber9 = Math.floor(Math.random()*100);
// var randomNumber10 = Math.floor(Math.random()*100);
// var randomNumber11 = Math.floor(Math.random()*100);
// var randomNumber12 = Math.floor(Math.random()*100);

// console.log(randomNumber1)


// document.getElementById("body").addEventListener("click", function(){
// 	document.getElementById("one").style.left= (randomNumber1 + "%");
// 	document.getElementById("two").style.left= (randomNumber2 + "%");
// 	document.getElementById("three").style.left= (randomNumber3 + "%");
// 	document.getElementById("four").style.left= (randomNumber4 + "%");
// 	document.getElementById("five").style.left= (randomNumber5 + "%");
// 	document.getElementById("six").style.left= (randomNumber6 + "%");
// 	document.getElementById("one").style.top= (randomNumber7 + "%");
// 	document.getElementById("two").style.top= (randomNumber8 + "%");
// 	document.getElementById("three").style.top= (randomNumber9 + "%");
// 	document.getElementById("four").style.top= (randomNumber10 + "%");
// 	document.getElementById("five").style.top= (randomNumber11 + "%");
// 	document.getElementById("six").style.top= (randomNumber12 + "%");
// })
