$(document).ready(function () {
    setTimeout(function () {
        $(".textoprincipal").fadeToggle("slow",function () {
            $(".textoprincipal").text("Aguade para novidades...");
        }).delay( 800 ).fadeIn("slow");
    },3000)

});
