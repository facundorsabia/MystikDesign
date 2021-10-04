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

//EMAILING CON FIREBASE Y JAVASCRIPT


  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.1.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDbJnq6vBPw4KJRXd7C_3zZ4_7ysWxXDiU",
    authDomain: "mystik-design.firebaseapp.com",
    projectId: "mystik-design",
    storageBucket: "mystik-design.appspot.com",
    messagingSenderId: "1077136849265",
    appId: "1:1077136849265:web:072d8ffe34bfcf8cab5ed0",
    measurementId: "G-0CR2CQM8NL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector("#contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let message = document.querySelector("#message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector("#contact-form").reset();

  sendEmail(name, email, message);
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

//Send Email Info

function sendEmail (name, email, message){
  Email.send({
    Host: "smtp.gmail.com", 
    Username:"facundorsabia@gmail.com", 
    To: "facundorsabia@gmail.com",
    From: "facundorsabia@gmail.com",
    Subject:`${name} te ha enviado un mensaje a través de la web de Mystik`, 
    Body:`Nombre:${name} <br> Email:${email} <br> Mensaje: ${message}`
    })
    .then(
      message => alert(message)
    );
}
