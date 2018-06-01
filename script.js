var chatFace = "";
$(document).ready(function(){
$("h1").html("<button class='btn btn-lg btn-primary'>Click Me</button>");
$("body").css("padding-left","20px");
$("button").addClass("animated bounce");

});
$(function(){
alert( "Welcome Buddy");
$("h1").click(function(){
     var greetings  = ["I love fruit", "I like cake", "I prefer IceCream", "None is my thing", "It's really Cool!"];

    $("input").attr(" type='button', value='click here'");
    prompt("greetings");
    
 
}); 
});