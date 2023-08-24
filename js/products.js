let burger = document.querySelector('#burger')
let menu = document.querySelector('.burger__menu__wrapper')
let hero = document.querySelector('.hero')
let discounts = document.querySelector('.discounts')

burger.addEventListener('click', () => {
    menu.style.display = 'block'
    hero.style.display = 'none'
    discounts.style.marginTop = '220px'
})


// let allProducts = document.querySelector('.discount__cards')
// let products = document.querySelector('.discount__card')
// for(let i = 0; i<4; i++){
//     allProducts.removeChild(allProducts.children[i])
// }

