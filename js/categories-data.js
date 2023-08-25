let burger = document.querySelector('#burger')
let menu = document.querySelector('.burger__menu__wrapper')
let hero = document.querySelector('.hero')
let discounts = document.querySelector('.discounts')

burger.addEventListener('click', () => {
    menu.style.display = 'block'
    hero.style.display = 'none'
    discounts.style.marginTop = '220px'
})


let getCatalogCards = document.querySelector('.catalog__cards')
let getCards = getCatalogCards.children
let cardsArray = Object.assign({}, getCards)
console.log(cardsArray);
