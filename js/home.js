let burger = document.querySelector('#burger')
let menu = document.querySelector('.burger__menu__wrapper')
let hero = document.querySelector('.hero')
let discounts = document.querySelector('.discounts')

burger.addEventListener('click', () => {
    menu.style.display = 'block'
    hero.style.display = 'none'
    discounts.style.marginTop = '220px'
})


let specialDiscounts = document.querySelector('.special__discount__cards')
let arr = [...specialDiscounts.children]
let obj = {}
for(let i = 0; i<=1; i++){
    obj+=arr[i].innerHTML
    console.log(obj)
}
// console.log(obj)
