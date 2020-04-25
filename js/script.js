$(document).ready(function(){
    $(".box").on("mouseenter", function(){
        var classNames = $(this).attr("class").split(" ");
        var boxClass = classNames[0];
        var className = classNames[1];

        if($(this).css("background-color") == "rgb(255,0,0)") {
            $("." + classNames[1]).css("background-color", "#000");
        } else {
            $("." + boxClass).css("background-color", "#000");
            $("." + className).css("background-color", "red");
        }            
    });
    $(".box").on("mouseleave", function(){
        var classNames = $(this).attr("class").split(" ");
        var className = classNames[1];
        
        $("." + className).css("background-color", "#000");
    });
});