$(document).ready(function () {
    setTimeout(function () {
        $(".textoprincipal").fadeToggle("slow",function () {
            $(".textoprincipal").text("Aguade para um novidades");
        }).delay( 800 ).fadeIn("slow");
    },6000)

});
