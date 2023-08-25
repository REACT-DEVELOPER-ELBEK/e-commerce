let burger = document.querySelector('#burger')
let menu = document.querySelector('.burger__menu__wrapper')
let hero = document.querySelector('.hero')
let discounts = document.querySelector('.discounts')

burger.addEventListener('click', () => {
    menu.style.display = 'block'
    hero.style.display = 'none'
    discounts.style.marginTop = '220px'
})

let specialDeals = document.querySelector('.special__discount__cards')
let childsToObj = specialDeals.children
let arr = [...childsToObj]
console.log(arr);

    // for(let i = 0; i<specialDeals.children.length; i++){
    //     let arrays = Object.assign({}, [specialDeals.children[i]])
    // console.log(arrays)
    // }

let recentBought = document.querySelector(".recent__cards")
let recentBoughtChilds = recentBought.children
let recentBoughtArray = [...recentBoughtChilds]
let getLastChilds = recentBoughtArray.splice(-4)
console.log(getLastChilds)

let discount = document.querySelector(".discounts")



