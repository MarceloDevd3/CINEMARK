let btns = document.querySelectorAll('.bubble');
let slides = document.querySelectorAll('.card');

let btn1 = document.getElementById("bars");
let btn2 = document.getElementById("close");
let menuIcon = document.querySelector('.menu');
let navegation = document.querySelector('.nav--container');

menuIcon.addEventListener('click', function() {
   btn1.classList.toggle('active');
   btn2.classList.toggle('active');
   navegation.classList.toggle('active')
})




var slideNav = function(manual) {
   btns.forEach((btn) => {
    btn.classList.remove('active')
   })

    slides.forEach((slide) => {
    slide.classList.remove('active')
   })

   btns[manual].classList.add('active')
   slides[manual].classList.add('active')
}

btns.forEach((btn, i) => {
  btn.addEventListener('click', () => {
    slideNav(i)
  })
})


