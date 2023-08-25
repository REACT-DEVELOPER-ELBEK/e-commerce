let burger = document.querySelector('#burger')
let menu = document.querySelector('.burger__menu__wrapper')
let hero = document.querySelector('.hero')
let discounts = document.querySelector('.discounts')

burger.addEventListener('click', () => {
    menu.style.display = 'block'
    hero.style.display = 'none'
    discounts.style.marginTop = '220px'
})
// console.log(productsName[2].textContent.toLowerCase())
// for(let i = 0; i<=productsName.length-1; i++){
//     console.log(productsName[i].innerHTML)
// }

let allProducts = document.querySelector('.discount__cards')

let products = [
    {
        id: 1,
        discount: '-50%',
        img: '../img/all-products1.png',
        price: '599,99 ₽',
        productName: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...'
    },

    {
        id: 2,
        discount: '-50%',
        img: "../img/all-products2.png",
        price: '44,50 ₽',
        productName: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...'
    },

    {
        id: 3,
        discount: '-50%',
        img: '../img/all-products3.png',
        price: '159,99 ₽',
        productName: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...'
    },

    {
        id: 4,
        discount: '-50%',
        img: '../img/all-products4.png',
        price: '49,39 ₽',
        productName: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...'
    },

    {
        id: 5,
        discount: '-50%',
        img: '../img/all-products5.png',
        price: '159,99 ₽',
        productName: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...'
    },

    {
        id: 6,
        discount: '-50%',
        img: '../img/all-products1.png',
        price: '44,50 ₽',
        productName: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...'
    },

    {
        id: 7,
        discount: '-50%',
        img: '../img/all-products3.png',
        price: '599,99 ₽',
        productName: 'Г/Ц Блинчики с мясом вес, Россия'
    },

    {
        id: 8,
        discount: '-50%',
        img: '../img/all-products4.png',
        price: '49,39 ₽',
        productName: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...'
    }
]

let str = ''
products.map((item) => {
    str+=`
        <div class="discount__card">
        <div class="like"><img src="./img/like.svg" alt=""></div>
        <div class="discounts__discount"><p>-50%</p></div>
        <img src= ${item.img} alt="">
        <div class="discount__card__text">
            <div class="discount__price">
                <p>${item.price}</p>
            </div>

            <p>${item.productName}</p>

            <div class="discount__raiting">
                <img src="../img/full-star.svg" alt="">
                <img src="../img/full-star.svg" alt="">
                <img src="../img/full-star.svg" alt="">
                <img src="../img/full-star.svg" alt="">
                <img src="../img/full-star.svg" alt="">
            </div>

            <button>В корзину</button>
        </div>
    </div>
    `
})

allProducts.innerHTML = str




