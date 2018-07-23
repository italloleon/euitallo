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

    // ROLAGEM BALAO PARA O TOPO
    $('.balaotop').click(function() {

        $('#sacos').addClass('caindob').fadeOut("slow").delay(1010).removeClass('caindob');
        setTimeout(function () {
            $doc.animate({
                scrollTop: $('#inicio').offset().top
            }, 1000);
            return false;

        },300);

    });

    // ROLAGEM SUAVE DA NUVEM PARA SEGUNDA SESSAO
    $('.nuvemnext').click(function() {
        $doc.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 700);

        return false;
    });
    // FIM DA ROLAGEM

    $( window ).scroll(function () {
        console.log($(document).scrollTop());
        console.log($('#eu').offset().top);
        if($(document).scrollTop() > 1){
            $('.nuvemnext').fadeOut("slow");
        }
        if($(document).scrollTop() == 0){
            $('.nuvemnext').fadeIn("slow");
        }
        var topoeu = $('#eu').offset().top;
        if($(document).scrollTop() > topoeu/2){
            $('.balaotop').fadeIn("slow");
            $('#sacos').fadeIn("slow");
        }
        else {
            $('.balaotop').fadeOut("slow");
        }
    })

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
    $('.menu-item-my').click(function() {
        var filho = $(this).children();
        var link = filho.attr('href')
        $doc.animate({
            scrollTop: $( link ).offset().top
        }, 700).delay(100);
        $('.menu-list-section').fadeOut(350).removeClass("d-flex");
        $('#line1').removeClass('gira1cima');
        $('#line2').removeClass('d-none');
        $('#line3').removeClass('gira2cima');
        $('.menu-item-my').hide(1);
        $('.menu-list-section').fadeOut(350).removeClass("d-flex");
        count -= 1;
        return false;
    });
    // FIM DA ROLAGEM DOS ITENS

    // SCROLL REVEAL
    window.sr = ScrollReveal();
    sr.reveal('.caixa-personagem',{
        duration: 4000,
        origin: 'left',
        easing: 'linear'
    });
    sr.reveal('.caixa-logo-ufc',{
        duration: 4000,
        origin: 'left',
        easing: 'linear'
    });
    sr.reveal('.caixa-logo-cc',{
        duration: 4000,
        origin: 'right',
        easing: 'linear'
    });
    sr.reveal('.texto-academico',{
        duration: 4000,
        origin: 'bottom',
        easing: 'linear'
    });
    sr.reveal('.eu-p1',{duration: 2800});
    sr.reveal('.eu-p2',{
        duration: 6000,
        easing: 'cubic-bezier(1, 0.2, 0.6, 0.1)'});

});

