window.addEventListener('scroll', function () {
    let nav = document.querySelector('nav');
    let windowPosition = window.scrollY > 0;
    nav.classList.toggle('scrolling-active', windowPosition);
})

ScrollReveal().reveal('.card-container', {
    scale: .75,
    duration: 750,
    interval: 50,
    reset: true
});

const rightBtn = document.querySelector('.right-btn');
const leftBtn = document.querySelector('.left-btn');

let slideIndex = 1;

showSlides(slideIndex);

rightBtn.addEventListener('click', function(){
    changeSlide(1);
})

leftBtn.addEventListener('click', function(){
    changeSlide(-1);
})

function changeSlide(n){
    showSlides(slideIndex += n);
}

function showSlides(n){
    let slides = document.getElementsByClassName('slider-image');
    if(n > slides.length){
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slideIndex-1].style.display = "block";
}


var images = new Array(
    'images/wccr_pic.webp',
    'images/studio1.jpg',
    'images/bw_concert1.webp',
    'images/studio2.jpg',
    'images/bw_concert2.webp'
    );
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){
      nextimage=0;
    }
    $('.hero-image')
    .css('background-image','url("'+images[nextimage++]+'")')
    setTimeout(doSlideshow,10000);
}





