let burger = document.querySelector('#burger')
let menu = document.querySelector('.burger__menu__wrapper')
let hero = document.querySelector('.hero')

burger.addEventListener('click', () => {
    menu.style.display = 'block'
    hero.style.display = 'none'
    discounts.style.marginTop = '220px'
})

let getDiscountCard = document.querySelector('.discount__cards')

let discountCards = [
    {
        img: '../img/discount1.png',
        priceWithCard: '44,50 ₽', 
        priceWithCash: '50,50 ₽', 
        name: 'Г/Ц Блинчики с мясом вес, Россия',
        raiting: [
            '../img/full-star.svg',
            '../img/full-star.svg',
            '../img/empty-star.svg',
            '../img/empty-star.svg',
            '../img/empty-star.svg'
        ]
    },

    {
        img: '../img/discount2.png',
        priceWithCard: '44,50 ₽', 
        href: '../products/milk.html',
        priceWithCash: '50,50 ₽', 
        name: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
        raiting: [
            '../img/full-star.svg',
            '../img/full-star.svg',
            '../img/full-star.svg',
            '../img/empty-star.svg',
            '../img/empty-star.svg'
        ],
    },

    {
        img: '../img/discount3.png',
        priceWithCard: '44,50 ₽', 
        priceWithCash: '50,50 ₽', 
        name: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
        raiting: [
            '../img/full-star.svg',
            '../img/full-star.svg',
            '../img/full-star.svg',
            '../img/full-star.svg',
            '../img/full-star.svg'
        ],
    },

    {
        img: '../img/discount4.png',
        priceWithCard: '44,50 ₽', 
        priceWithCash: '50,50 ₽', 
        name: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
        raiting: [
            '../img/full-star.svg',
            '../img/full-star.svg',
            '../img/full-star.svg',
            '../img/full-star.svg',
            '../img/full-star.svg'
        ],
    }
]

let disCard = ''
discountCards.map((card) => {
    disCard+=`
    <a href="${card.href}"class="discount__card">
    <div class="like"><img src="./img/like.svg" alt=""></div>
    <div class="discounts__discount"><p>-50%</p></div>
    <img src=${card.img} alt="image">
    <div class="discount__card__text">
        <div class="discount__price">
            <p>${card.priceWithCard}</p>
            <h3>${card.priceWithCash}</h3>

            <h4>С картой</h4>
            <h4>Обычная</h4>
        </div>

        <p>${card.name}</p>

        <div class="discount__raiting">
        
        </div>

        <button>В корзину</button>
    </div>
</a>
    `
})

getDiscountCard.innerHTML = disCard



let modalOpen = document.querySelector('.nav__account')
let body = document.querySelector('body')
let modal = document.querySelector('.modal')
let modalClose = document.querySelector('#modal-close')

modalOpen.addEventListener('click', () => {
    modal.style.top = '0'
    modal.style.transition = '0.5s'
})

modalClose.addEventListener('click', () => {
    modal.style.top = '-100%'
})
