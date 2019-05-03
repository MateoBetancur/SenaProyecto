$(document).ready(function(){
    var contenedores ={ 
        prehisUno: $('.prehisUno').offset().left,
        prehisDos: $('.prehisDos').offset().left,

        desUno: $('.greciaUno').offset().left,
        desDos: $('.greciaDos').offset().left,
        desTres: $('.greciaTres').offset().left,

        exiUno: $('.romaUno').offset().left,
        exiDos: $('.romaDos').offset().left,

        enigUno: $('.enigmaUno').offset().left,
        enigDos: $('.enigmaDos').offset().left,

        moderUno: $('.modernaUno').offset().left,
        moderDos: $('.modernaDos').offset().left,
        moderTres: $('.modernaTres').offset().left,
    }
    //Los edificion tienen una clase llamada 'mamut'

    //Inicio
    $('.cartelAvance').css('Animation-play-state', 'running');

    

    //Menu
    $(".navPrincipal .iconosSecciones li a").on('click', function(e){
        e.preventDefault();
        var atributo = $(this).attr("href");
        $('body, html').stop().animate({
            scrollLeft: $(atributo).offset().left
        }, 1500, 'easeInOutQuart');
    });

    //Icono Sonido
    $('.iconoSonido li').mouseenter(function(){
        $('.audio').animate({
            height: '20px',
        }, 500, 'easeInBack');

    })
    $('.iconoSonido li').mouseleave(function(){
        $('.audio:nth-child(1)').animate({
            marginTop: '6px',
            height: '15px',
        }, 500, 'easeInBack');
        $('.audio:nth-child(3)').animate({
            height: '27px',
        }, 500, 'easeInBack');
        $('.audio:nth-child(5)').animate({
            marginTop: '6px',
            height: '15px',
        }, 500, 'easeInBack');
    })

    

    //Fin de Inicio


    //Origen
    var nubesPrehistoria = {
        pares: $('.nubesEvento:nth-child(odd)'),
        impares: $('.nubesEvento:nth-child(even)')
    };
    var sol = $('.sol');
    var arbolesPrehistoria = {
        Uno: $('.prehisUno .moverArboles'),
        Dos: $('.prehisDos .moverArboles'),
    };
    $(window).on('scroll', function(){
        if($(window).scrollLeft() >= contenedores.prehisUno-50){
            $('.nubesEvento').css('position','fixed');
            $('.nubesEvento').css('z-index','1');
            nubesPrehistoria.impares.animate({
                top: '-10px',
            }, 1000, 'easeOutBounce');
            nubesPrehistoria.pares.animate({
                top: '0px',
                
            }, 1500, 'easeOutBounce');

            sol.animate({
                top: '0px',
            }, 1800, 'easeOutBounce');
            sol.css('position','fixed');
            arbolesPrehistoria.Uno.animate({
                top: 0,
            }, 1000, 'easeOutBounce');
            $('.contOrigen').animate({
                bottom: '0',
            }, 1200, 'easeOutElastic');
            $('.mamut').animate({
                top: '0',
            }, 1200, 'easeOutBounce')
            
        
        }else{
            $('.nubesEvento').css('position','absolute');
            sol.css('position','absolute');
        }

        if($(window).scrollLeft() >= contenedores.prehisDos){
            arbolesPrehistoria.Dos.animate({
                top: 0,
            }, 1000, 'easeOutBounce');
            $('.cartelPrehi').animate({
                bottom: '250px',
            }, 1200, 'easeOutElastic');
            $('.cavernicola').animate({
                top: '-100px',
            }, 1000, 'easeOutBounce');
        }
    });
    /* ================ Infografía Origen ============== */
    $('.infoOri1').hide()
    
    $('.cavernicola').click(function(){
        $('.infoOri1').slideToggle(1000);

    })
    $('.infoOri1 .btnBack').click(function(){
        $('.infoOri1').hide(1000);
    })

    $('.infoOri1 .btnOri').click(function(){
        $('.contInfo').slideToggle();
    })
    $('.infoOri2 .btnOri2').click(function(){
        $('.infoOri2 .contInfo').slideToggle();
    })
    $('.infoOri3 .btnOri2').click(function(){
        $('.infoOri3 .contInfo').slideToggle();
    })
    $('.infoOri2').hide();
    $('.infoOri1 .btnNextOri').click(function(){
        $('.infoOri1').hide(1500);
        $('.infoOri2').show(500);
    })
    $('.infoOri2 .btnBack').click(function(){
        $('.infoOri2').hide(1500);
        $('.infoOri1').show(500);
    })
    $('.infoOri3').hide();
    $('.infoOri2 .btnNextOri').click(function(){
        $('.infoOri2').hide(1500);
        $('.infoOri3').show(500);
    })
    $('.infoOri3 .btnBack').click(function(){
        $('.infoOri3').hide(1500);
        $('.infoOri2').show(500);
    })
    $('.infoOri3 .btnNextOri').click(function(){
        $('.infoOri3').slideToggle(1000);
    })



    

    /* ================ Fin de Infografía Origen ============== */
    //Fin de Origen


    //Desnudo
    var arbolesDesnudo = {
        Uno: $('.greciaUno .moverArboles'),
        Dos: $('.greciaDos .moverArboles'),
        Tres: $('.greciaTres .moverArboles'),
    };

    $(window).on('scroll', function(){
        if($(window).scrollLeft() >= contenedores.desUno-50){
            arbolesDesnudo.Uno.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.gimanasioGrecia').animate({
                top: "0px",
                }, 1000, 'easeOutBounce');
            $('.contGrecia').animate({
                top: "35%",
                }, 1000, 'easeOutBounce');
           
        }
        if($(window).scrollLeft() >= contenedores.desDos){
            arbolesDesnudo.Dos.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.greciaDos .introduccion img').animate({
                left: "0px",
                opacity: "1",
            }, 1500, 'easeOutBounce');
            $('.greciaDos .introduccion p').animate({
                left: "0px",
                opacity: "1",
                }, 1500, 'easeOutBounce');
                $('.edificioGrecia').animate({
                    top: "0px",
                }, 2000, 'easeOutBounce');
                
           
        }
        if($(window).scrollLeft() >= contenedores.desTres){
            arbolesDesnudo.Tres.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.alDesnudo .animacion img:nth-child(1)').animate({
                top: "100px",
                opacity:"1",
            }, 2000, 'easeOutQuart');
            $('.alDesnudo .animacion img:nth-child(2)').animate({
                top: "100px",
            }, 2000, 'easeOutBounce');
            $('.griego').animate({
                top: "-150px",
            }, 2000, 'easeOutBounce');
            $('.alDesnudo .animacion p').animate({
                opacity: "1",
                }, 1500, 'easeOutBounce');
           
        }
    })
    //Fin de Desnudo
    

   


    //Roma
    var arbolesExilio = {
        Uno: $('.romaUno .moverArboles'),
        Dos: $('.romaDos .moverArboles'),
    };

    $(window).on('scroll', function(){
        if($(window).scrollLeft() >= contenedores.exiUno-50){
            arbolesExilio.Uno.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.contRoma').animate({
                top: '35%'
            }, 1000, 'easeOutBounce');
            $('.romaUno .edificioRoma').animate({
                top: "0px",
                }, 1300, 'easeOutBounce');
        }
        if($(window).scrollLeft() >= contenedores.exiDos){
            arbolesExilio.Dos.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.romaDos .introduccion img').animate({
                top: "-100px",  
            }, 1000, 'easeOutBounce');
            $('.romaDos .introduccion p').animate({
                opacity: "1",
            }, 4000, 'easeOutBounce');
            $('.romano').animate({
                top: '-150px'
            }, 1000, 'easeOutBounce');
        }
        
        

    })


    /* ================ Infografía Roma ============== */
    $('.infoRoma1').hide()
    $('.romano').click(function(){
        $('.infoRoma1').slideToggle(1000);

    })
    $('.infoRoma1 .btnBack').click(function(){
        $('.infoRoma1').hide(1000);
    })

    $('.infoRoma1 .btnRoma').click(function(){
        $('.contInfo').slideToggle();
    })
    $('.infoRoma2 .btnRoma2').click(function(){
        $('.infoRoma2 .contInfo').slideToggle();
    })
    $('.infoRoma3 .btnRoma2').click(function(){
        $('.infoRoma3 .contInfo').slideToggle();
    })
    $('.infoRoma2').hide();
    $('.infoRoma1 .btnNext').click(function(){
        $('.infoRoma1').hide(1500);
        $('.infoRoma2').show(500);
    })
    $('.infoRoma2 .btnBack').click(function(){
        $('.infoRoma2').hide(1500);
        $('.infoRoma1').show(500);
    })
    $('.infoRoma3').hide();
    $('.infoRoma2 .btnNext').click(function(){
        $('.infoRoma2').hide(1500);
        $('.infoRoma3').show(500);
    })
    $('.infoRoma3 .btnBack').click(function(){
        $('.infoRoma3').hide(1500);
        $('.infoRoma2').show(500);
    })
    $('.infoRoma3 .btnNext').click(function(){
        $('.infoRoma3').slideToggle(1000);
    })



    

    /* ================ Fin de Infografía Roma ============== */
    //Fin de Roma


    //Enigma
    var arbolesEnigma = {
        Uno: $('.enigmaUno .moverArboles'),
        Dos: $('.enigmaDos .moverArboles'),
    };
    $(window).on('scroll', function(){
        if($(window).scrollLeft() >= contenedores.enigUno-50){
            arbolesEnigma.Uno.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.castillo').animate({
                top: "0px",
                }, 1000, 'easeOutBounce');
            $('.contEnigma').animate({
                top:"35%",
            }, 1000, 'easeOutBounce');
        }
        
        
        if($(window).scrollLeft() >= contenedores.enigDos){
            arbolesEnigma.Dos.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.enigmaDos .introduccion img').animate({
                top:"-160px",
            }, 1000, 'easeOutBounce');
            $('.enigmaDos .introduccion p').animate({
                top:"0px",
            }, 1000, 'easeOutBounce');
            $('.arlequin').animate({
                top: "-160px",
                opacity:"1",
                }, 1500, 'easeOutBounce');
        }
    })
    /* ================ Infografía Enigma ============== */
    $('.infoEnig1').hide()
    $('.arlequin').click(function(){
        $('.infoEnig1').slideToggle(1000);

    })
    $('.infoEnig1 .btnBack').click(function(){
        $('.infoEnig1').hide(1000);
    })

    $('.infoEnig1 .btnEnig').click(function(){
        $('.contInfo').slideToggle();
    })
    $('.infoEnig2 .btnEnig2').click(function(){
        $('.infoEnig2 .contInfo').slideToggle();
    })
    $('.infoEnig2').hide();
    $('.infoEnig1 .btnNext').click(function(){
        $('.infoEnig1').hide(1500);
        $('.infoEnig2').show(500);
    })
    $('.infoEnig2 .btnBack').click(function(){
        $('.infoEnig2').hide(1500);
        $('.infoEnig1').show(500);
    })
    $('.infoEnig3').hide();
   /*  $('.infoEnig2 .btnNext').click(function(){
        $('.infoEnig2').hide(1500);
        $('.infoEnig3').show(500);
    }) */
    $('.infoEnig3 .btnBack').click(function(){
        $('.infoEnig3').hide(1500);
        $('.infoEnig2').show(500);
    })
    $('.infoEnig2 .btnNext').click(function(){
        $('.infoEnig2').slideToggle(1000);
    })



    

    /* ================ Fin de Infografía Enigma ============== */


    //Fin deEnigma


    //Moderna
    var arbolesModerna = {
        Uno: $('.modernaUno .moverArboles'),
        Dos: $('.modernaDos .moverArboles'),
        Tres: $('.modernaTres .moverArboles'),
    };

    $(window).on('scroll', function(){
        if($(window).scrollLeft() >= contenedores.moderUno-50){
            arbolesModerna.Uno.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.gimnasio').animate({
                 top: '0px' 
            }, 1500, 'easeOutBounce').fadeIn();
            $('.contModerna').animate({
                top: '35%' 
            }, 2000, 'easeOutElastic').fadeIn();
            
        }

        if($(window).scrollLeft() >= contenedores.moderDos){
            arbolesModerna.Dos.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.modernaDos .introduccion p').animate({
                opacity: '1' 
            }, 3000, 'easeOutBounce').fadeIn();
            $('.introduccion').animate({
                bottom: '300px' 
            }, 1500, 'easeOutBounce').fadeIn();
            $('.modernaDos .coliseoGim').animate({
                top: '0px' 
            }, 1500, 'easeOutBounce').fadeIn();
        }

        if($(window).scrollLeft() >= contenedores.moderTres){
            arbolesModerna.Tres.animate({
                top: '0',
            }, 1000, 'easeOutBounce');
            $('.nadia').animate({ 
                top: '-50px' 
            }, 1000, 'easeOutBounce').fadeIn();
            $('.moderna .animacion img:nth-child(1)').animate({
                top: '80px' 
            }, 1700, 'easeOutBounce').fadeIn();
            $('.moderna .animacion img:nth-child(2)').animate({
                top: '160px' 
            }, 2000, 'easeOutBounce').fadeIn();
            $('.moderna .animacion p').animate({
                top: '400px', 
                opacity: '1' 
            }, 3400, 'easeInOutQuart').fadeIn();
        }
    })        
    //Fin de Moderna

})