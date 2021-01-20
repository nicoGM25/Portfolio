$(document).ready(function(){

    // Menu scroll

    $(window).scroll(function(){
        if(this.scrollY > 20){
            $(".navbar").addClass("sticky")
        }else{
            $(".navbar").removeClass("sticky")
        }
        if(this.scrollY > 500){
            $(".scroll-up-btn").addClass("show")
        }else{
            $(".scroll-up-btn").removeClass("show")
        }
    })

    // Slide-up

    $(".scroll-up-btn").click(function(){
        $("html").animate({scrollTop:0})
        $('html').css("scrollBehavior", "auto")
    })

    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth")
    });
    
    // Toggle Menu

    $(".menu-btn").click(function(){
        $(".navbar .menu").toggleClass("active")
        $(".menu-btn i").toggleClass("active")
    })

    // Typing

    new Typed(".typing",{
        strings:["Desarrollador Web","Programador"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    })

    new Typed(".typing-2", {
        strings:["Desarrollador Web","Programador"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    //Vanilla Tilt

    VanillaTilt.init(document.querySelector(".curriculum")
    ,{
        max:25,
        speed:400,
        glare:true,
        "max-glare":1
    })

    //Text oculto

    $(".skills .skills-content .left .text2").toggle();

    $(".skills .skills-content .left .despliegue").click(function(){
        $(".skills .skills-content .left .text2").animate({
            height: "toggle"
          }, 300);
        ($(".skills .skills-content .left .despliegue").text() == "Desplegar") ? $(".skills .skills-content .left .despliegue").text("Ocultar") : $(".skills .skills-content .left .despliegue").text("Desplegar");
    })

    // owl carousel

    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
})