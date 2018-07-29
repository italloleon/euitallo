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

    // SECTION SCROLL REVEAL
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
        easing: 'cubic-bezier(1, 0.2, 0.6, 0.1)'
    });
    sr.reveal('.ingleshouse',{
        duration: 1000,
        origin: 'bottom',
        easing: 'linear'
    });
    sr.reveal('.excelhouse',{
        duration: 1200,
        origin: 'bottom',
        easing: 'linear'
    });
    sr.reveal('.webhouse',{
        duration: 1400,
        origin: 'bottom',
        easing: 'linear'
    });
    sr.reveal('.phphouse',{
        duration: 1600,
        origin: 'bottom',
        easing: 'linear'
    });
    sr.reveal('.mysqlhouse',{
        duration: 1800,
        origin: 'bottom',
        easing: 'linear'
    });
    sr.reveal('.wordphouse',{
        duration: 2000,
        origin: 'bottom',
        easing: 'linear'
    });
    sr.reveal('.fronthouse',{
        duration: 2200,
        origin: 'bottom',
        easing: 'linear'
    });
    sr.reveal('.angularhouse',{
        duration: 2400,
        origin: 'bottom',
        easing: 'linear'
    });

    var competencias = {
        'ingles':{'title': 'Curso de Inglês','local':'CLEC','texto':'2 anos e meio de curso para inglês intermediário', 'modulo': false},
        'excel':{'title':'Curso de Excel','local':'SENAC','texto':'72 horas de Excel', 'modulo': true, 'modulos':['Excel Básico','Excel Avançado']},
        'web':{'title':'Curso de Design Web','local':'Alura','texto':'66 horas de Web Design', 'modulo': true, 'modulos':['Photoshop para Web I','Photoshop para Web II','Illustrator para Web','E-ail marketing Design','Facebook-imagens e anúncios']},
        'php':{'title':'Back-End PHP','local':'Alura','texto':'96 horas de PHP para Back-end', 'modulo': true, 'modulos':['Http, Web por baixo dos panos','PHP e MySQL I','PHP e MySQL II','MySQL I, Primeiras consultas','PHP I, orientação a objetos','PHP II, orientação a objetos','PHP com PDO I, persistência','PHP com PDO II, persistência']},
        'mysql':{'title':'Iniciando com SQL e MySQL','local':'Alura','texto':'29 horas de SQL e MySQL', 'modulo': true, 'modulos':['MySQL I','MySQL II','Modelagem de Banco de Dados Relacional']},
        'wordpress':{'title':'Desenvolvedor Wordpress','local':'Alura','texto':'90 horas de Desenvolvedor Wordpress', 'modulo': true, 'modulos':['HTML5 CSS3 I','HTML5 CSS3 II','Wordpress I','Wordpress II','Wordpress-criação de um tema do zero','S4EO Wordpress']},
        'front':{'title':'Desenvolvedor Front-end','local':'Alura','texto':'132 horas de desenvolvedor front-end', 'modulo': true, 'modulos':['HTML5 CSS3 I','HTML5 CSS3 II','JavaScript I','Jquery I','Jquery II','Web Design Responsivo','Projeto Final']},
        'angular':{'title':'Desenvolvedor Angular','local':'Alura','texto':'72 horas de desenvolvedor angular', 'modulo': true, 'modulos':['JavaScript Avançado I','JavaScript Avançado II','JavaScript Avançado III','WebPacks','Angular 6 I','Angular 6 II']},
        }
    var listacompe = [competencias.ingles,competencias.excel,competencias.web,competencias.php,competencias.mysql,competencias.wordpress, competencias.front,competencias.angular];

    var elepai = $('.lista-modulos');
    $('.bollcap').click(function () {
        var compaspas = $(this).attr('id');
        $('.texto-header-comp').text(listacompe[compaspas].title+" - "+listacompe[compaspas].local);
        $('.texto-modulos').text(listacompe[compaspas].texto);
        console.log($(this).attr('id'));
        if(listacompe[compaspas].modulo == true){
            console.log(listacompe[compaspas].modulos[0]);

            var tamanho = listacompe[compaspas].modulos.length;
            console.log(tamanho);
            var cont = 0;
            while (cont < tamanho){
                var elementolista = "<li>"+listacompe[compaspas].modulos[cont]+"</li>";
                $(elementolista).appendTo(elepai);
                console.log(elepai);
                cont++;

            }



        }
        console.log('proximo');
        $('#pop-house').fadeIn(500).addClass('d-flex').removeClass('d-none');
    });
    $('.close-pop-compe').click(function () {
        $('#pop-house').fadeOut(500);
        setTimeout(function () {
            $('#pop-house').removeClass('d-flex');
            elepai.find('li').remove();
        },500.1);

    });

});

