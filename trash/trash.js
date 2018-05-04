$( document ).ready(function() {

    $("#plus").click(function(){
      var $width = $("img").width();
      $("img").css("width", $width + 200 + "px")
    });

	$("#minus").click(function(){
		var $width = $("img").width();
      $("img").css("width", $width - 200 + "px")
	});

	$("#two").mouseenter(function(){
		$("#twopop").css("display", "inline")
	})
	$("#two").mouseleave(function(){
		$("#twopop").css("display", "none")
	})

	$("#three").mouseenter(function(){
		$("#threepop").css("display", "inline")
	})
	$("#three").mouseleave(function(){
		$("#threepop").css("display", "none")
	})

	$("#four").mouseenter(function(){
		$("#fourpop").css("display", "inline")
	})
	$("#four").mouseleave(function(){
		$("#fourpop").css("display", "none")
	})

	$("#five").mouseenter(function(){
		$("#fivepop").css("display", "inline")
	})
	$("#five").mouseleave(function(){
		$("#fivepop").css("display", "none")
	})

	$("#six").mouseenter(function(){
		$("#sixpop").css("display", "inline")
	})
	$("#six").mouseleave(function(){
		$("#sixpop").css("display", "none")
	})

	$("#seven").mouseenter(function(){
		$("#sevenpop").css("display", "inline")
	})
	$("#seven").mouseleave(function(){
		$("#sevenpop").css("display", "none")
	})

	$("#eight").mouseenter(function(){
		$("#eightpop").css("display", "inline")
	})
	$("#eight").mouseleave(function(){
		$("#eightpop").css("display", "none")
	})

	$("#nine").mouseenter(function(){
		$("#ninepop").css("display", "inline")
	})
	$("#nine").mouseleave(function(){
		$("#ninepop").css("display", "none")
	})

	$("#ten").mouseenter(function(){
		$("#tenpop").css("display", "inline")
	})
	$("#ten").mouseleave(function(){
		$("#tenpop").css("display", "none")
	})

	$("#eleven").mouseenter(function(){
		$("#elevenpop").css("display", "inline")
	})
	$("#eleven").mouseleave(function(){
		$("#elevenpop").css("display", "none")
	})

	$("#twelve").mouseenter(function(){
		$("#twelvepop").css("display", "inline")
	})
	$("#twelve").mouseleave(function(){
		$("#twelvepop").css("display", "none")
	})
});

