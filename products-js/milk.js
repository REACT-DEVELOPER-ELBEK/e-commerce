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

let productParent = document.querySelector('.product__card__choice')
let cardButtons = document.querySelectorAll('#choice')
let mainImage = document.querySelector('.card__main > img')

let str = ''

product.map((e) => {
    str += `
    <div class="product__choices">
    <button id="choice"><img src= ${e.images[0]} alt=""></button>
    <button id="choice"><img src= ${e.images[1]} alt=""></button>
    <button id="choice"><img src= ${e.images[2]} alt=""></button>
    <button id="choice"><img src= ${e.images[3]} alt=""></button>
    <button id="choice"><img src= ${e.images[4]} alt=""></button>
    </div>
    <div class="card__main">
    <img src="" alt="img">
    </div>
    `
})

productParent.innerHTML = str

// for(let i = 0; i<cardButtons.length; i++){
//     cardButtons[i].addEventListener('click', () => {
//         mainImage.src = cardButtons[i]
//     })
// }