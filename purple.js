
function mouseHandler(ev){
    document.getElementById('boxshadow').style.transform = 'translateY('+(ev.clientY)+'px)';
    document.getElementById('boxshadow').style.transform += 'translateX('+(ev.clientX)+'px)';            
}

document.getElementById("intro").addEventListener("mousemove", mouseHandler)
document.getElementById("talk").addEventListener("mousemove", mouseHandler)
document.getElementById("time").addEventListener("mousemove", mouseHandler)
document.getElementById("chat").addEventListener("mousemove", mouseHandler)
document.getElementById("grocery").addEventListener("mousemove", mouseHandler)

$("#intro").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#intro").mouseover(function(){
  $("#boxshadow").show()
  $("#populate").html("All my friends")
  $("#hoverimage").css("background-color", "white")
});


$("#talk").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#talk").mouseover(function(){
  $("#boxshadow").show()
  $("#populate").html("Ethan Cohen")
  $("#hoverimage").css("background-color", "green")
});

$("#time").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#time").mouseover(function(){
  $("#boxshadow").show()
  $("#populate").html("My Dad")
  $("#hoverimage").css("background-color", "yellow") 
});

$("#chat").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#chat").mouseover(function(){
  $("#boxshadow").show()
  $("#populate").html("Class<br>mates")
  $("#hoverimage").css("background-color", "pink") 
});

$("#walk").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#walk").mouseover(function(){
  $("#boxshadow").show()
  $("#populate").html("Message4")
});

$("#grocery").mouseleave(function(){
  $("#boxshadow").hide()
});

$("#grocery").mouseover(function(){
  $("#boxshadow").show()
  $("#populate").html("My mom")
  // $("#hoverimage").attr("src", "mom.jpg")
  $("#hoverimage").css("background-color", "blue") 
});