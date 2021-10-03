//Slider Swiper JS utilizado en la sección Servicios

var swiper = new Swiper(".mySwiper", {
  slidesPerView:1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    769: {
      slidesPerView: 3,
    },
  },  
});


//Switch logofilio vs redes sociales

$("#redesBtn").click(function() {
    $(".Proyectos__Contenedor").hide();
    $(".mySwiperRedes").fadeIn("slow");
    $("#redesBtn").css("filter", "none").css("z-index", "8").css("width", "169px");
    $("#logofolioBtn").css("filter", "grayscale(100%)").css("z-index", "7").css("width", "229px");
  });

  $("#logofolioBtn").click(function() {
    $(".Proyectos__Contenedor").fadeIn("slow");
    $(".mySwiperRedes").hide();
    $("#logofolioBtn").css("filter", "none").css("z-index", "8").css("width", "169px");
    $("#redesBtn").css("filter", "grayscale(100%)").css("z-index", "7").css("width", "229px");
  });

//redes sociales slider
  var swiper = new Swiper(".mySwiperRedes", {
    slidesPerView: 1,
    spaceBetween: 5,
    freeMode: true,
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 15,
      },
      769: {
        slidesPerView: 3,
        spaceBetween: 15,
      },
    },  
  });

//Creación de la info del modal de la sección Proyectos, segun el proyecto

var swiper = new Swiper(".mySwiperPopUp", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


$(".rusticopolis").click (function() {
  $("#popUpSlide2a").hide();
  $("#popUpSlide3a").hide();
  $("#popUpSlide1").attr("src", "imagenes/logofolio/logo1.png");
});

$(".nirodha").click (function() {
  $("#popUpSlide2a").hide();
  $("#popUpSlide3a").hide();
  $("#popUpSlide1").attr("src", "imagenes/logofolio/logo2.png");
});

$(".renacer").click (function() {
  $("#popUpSlide2a").show();
  $("#popUpSlide3a").show();
  $("#popUpSlide1").attr("src", "imagenes/logofolio/renacer1.jpg");
  $("#popUpSlide2").attr("src", "imagenes/logofolio/renacer2.jpg");
  $("#popUpSlide3").attr("src", "imagenes/logofolio/renacer3.jpg");
});


$(".credimoney").click (function() {
  $("#popUpSlide2a").hide();
  $("#popUpSlide3a").hide();
  $("#popUpSlide1").attr("src", "imagenes/logofolio/logo4.png");
});

$(".xy").click (function() {
  $("#popUpSlide2a").hide();
  $("#popUpSlide3a").hide();
  $("#popUpSlide1").attr("src", "imagenes/logofolio/logo5.webp");
});

$(".bombadil").click (function() {
  $("#popUpSlide2a").show();
  $("#popUpSlide3a").show();
  $("#popUpSlide1").attr("src", "imagenes/logofolio/bombadil1.jpg");
  $("#popUpSlide2").attr("src", "imagenes/logofolio/bombadil2.jpg");
  $("#popUpSlide3").attr("src", "imagenes/logofolio/bombadil3.jpg");
});

$(".epoxy").click (function() {
  $("#popUpSlide2a").hide();
  $("#popUpSlide3a").hide();
  $("#popUpSlide1").attr("src", "imagenes/logofolio/logo7.webp");
});

$(".click").click (function() {
  $("#popUpSlide2a").show();
  $("#popUpSlide3a").show();
  $("#popUpSlide1").attr("src", "imagenes/logofolio/click1.jpg");
  $("#popUpSlide2").attr("src", "imagenes/logofolio/click2.png");
  $("#popUpSlide3").attr("src", "imagenes/logofolio/click3.png");
});


$(".haini").click (function() {
  $("#popUpSlide2a").hide();
  $("#popUpSlide3a").hide();
  $("#popUpSlide1").attr("src", "imagenes/logofolio/logo9.webp");
});


$(".candys").click (function() {
  $("#popUpSlide2a").hide();
  $("#popUpSlide3a").hide();
  $("#popUpSlide1").attr("src", "imagenes/logofolio/logo10.webp");
});

