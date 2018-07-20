$(document).ready(function () {

    // ANIMAÇÃO DO TEXTO INICIAL
    setTimeout(function () {
        $(".textoprincipal")
            .fadeToggle("slow", function () {
                $(".textoprincipal").text("Aqui você poderá saber mais sobre quem sou eu");
        })
            .delay( 800 )
            .fadeIn("slow")
            .delay( 2500 )
            .fadeToggle("slow", function () {
                $(".textoprincipal").text("minha vida acadêmica e profissional");
        })
            .delay( 800 )
            .fadeIn("slow")
            .delay( 800 )
            .fadeIn("slow")
            .delay( 2500 )
            .fadeToggle("slow", function () {
                $(".textoprincipal").text("bem como experiências e conhecimentos que tenho.");
            }).delay( 800 )
            .fadeIn("slow")
            .delay( 3000 )
            .fadeToggle("slow", function () {
                $(".textoprincipal").text("Espero que goste da estadia!");
            })
            .delay( 800 )
            .fadeIn("slow")

    },3500);
    var $doc = $('html, body');
    // FIM DA ANIMAÇÃO

    // ROLAGEM SUAVE DA NUVEM PARA SEGUNDA SESSAO
    $('.nuvemnext').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
        return false;
    });
    // FIM DA ROLAGEM

    // FUNÇÃO PARA MENU
    var count = 0;
    $('.bt-menu').click(function () {
        if(count == 0){
            $('#line1').addClass('gira1cima');
            $('#line2').addClass('d-none');
            $('#line3').addClass('gira2cima');
            $('.menu-item-my').fadeIn(600);
            $('.menu-list-section').fadeIn(350).addClass("d-flex");
            count += 1;
            die();

        }
        if(count == 1){
            $('#line1').removeClass('gira1cima');
            $('#line2').removeClass('d-none');
            $('#line3').removeClass('gira2cima');
            $('.menu-item-my').hide(1);
            $('.menu-list-section').fadeOut(350).removeClass("d-flex");
            count -= 1;
            die();
        }

        console.log('teste');
    });
    // FIM DA FUNÇÃO MENU

    // ROLAGEM DOS ITENS DO MENU PARA SUAS SESSOES
    $('.menu-item-my>a').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);
        return false;
    });
    // FIM DA ROLAGEM DOS ITENS
});