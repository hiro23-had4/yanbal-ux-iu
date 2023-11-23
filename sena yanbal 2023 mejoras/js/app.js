//menu navegacion
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav_hidden")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav_hidden").forEach(
    n => n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }));

// menu y slider header
const nxtBtn = document.querySelector(".next-btn");
const prvBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
let slideNumber= 0;


// slider next button
nxtBtn.onclick = () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides-1)){
        slideNumber = 0;
    }

    slides[slideNumber].classList.add('active');
}


// slider Prev button
prvBtn.onclick = () =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    });

    slideNumber--;

    if(slideNumber < 0 ){
        slideNumber = numberOfSlides - 1;
    }

    slides[slideNumber].classList.add('active');
}


//swiper slide cards vendedores
let swiperCards = new Swiper('.card_contenido', {
    loop: true,
    spaceBetween: 32,
    grabCursor: true,
    autoplay: {
        delay: 5000
    },
  
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      dynamicBullets: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        },
    },
});

/* login icono */
document.getElementById('showPopup').addEventListener('click', function () {
    document.getElementById('loginPopup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('loginPopup').style.display = 'none';
});

// login sing_up & sign_in
const sign_in_btn = document.querySelector("#sign_in_btn");
const sign_up_btn = document.querySelector("#sign_up_btn");
const container = document.querySelector(".login");

sign_up_btn.addEventListener('click', () => {
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () => {
    container.classList.remove("sign-up-mode");
});


