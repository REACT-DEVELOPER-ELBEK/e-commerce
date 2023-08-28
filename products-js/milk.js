let burger = document.querySelector('#burger')
let menu = document.querySelector('.burger__menu__wrapper')

burger.addEventListener('click', () => {
    menu.style.display = 'block'
})

let product = [
{
    name: "butter",
    category: "protein",
    price: 89,
    rating: 3,
    discount: '-50$',
    images: [
        "../products-data-img/1.png",
        "../products-data-img/2.png",
        "../products-data-img/3.png",
        "../products-data-img/4.png",
        "../products-data-img/5.png",
    ]
}
]

// let productParent = document.querySelector('.product__card__choice')
// let cardButtons = document.querySelectorAll('#choice')
// let mainSrc = document.querySelector('.card__main>img')

// let str = ''
// product.map((e) => {
//     str += `
//     <div class="product__choices">
//     <button id="choice"><img src= ${e.images[0]} alt=""></button>
//     <button id="choice"><img src= ${e.images[1]} alt=""></button>
//     <button id="choice"><img src= ${e.images[2]} alt=""></button>
//     <button id="choice"><img src= ${e.images[3]} alt=""></button>
//     <button id="choice"><img src= ${e.images[4]} alt=""></button>
//     </div>

//     <img class="cards__main" src= ${e.images[0]} >

//     `
// })

// productParent.innerHTML = str

// for(let i = 0; i<cardButtons.length; i++){
//     cardButtons[i].addEventListener('click', () => {
//         mainSrc.src=`${product.images[i].innerHTML}`
//     })
// }

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

