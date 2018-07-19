$(document).ready(function () {
    setTimeout(function () {
        $(".textoprincipal").fadeToggle("slow",function () {
            $(".textoprincipal").text("Aguarde para um novo conteúdo");
        }).delay( 800 ).fadeIn("slow");
    },6000)

});