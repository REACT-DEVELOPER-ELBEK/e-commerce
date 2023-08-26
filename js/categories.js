let burger = document.querySelector('#burger')
let menu = document.querySelector('.burger__menu__wrapper')

burger.addEventListener('click', () => {
    menu.style.display = 'block'
})

let cards = [
    {
        id: 'protains',
        image: '../img/catalog1.png'
    },

    {
        id: 'breads',
        image: '../img/catalog2.png'
    },

    {
        id: 'frozenProducts',
        image: '../img/catalog3.png'
    },

    {
        id: 'drinks',
        image: '../img/catalog4.png'
    },

    {
        id: 'candies',
        image: '../img/catalog5.png'
    },

    {
        id: 'teaCoffee',
        image: '../img/catalog6.png'
    },

    {
        id: 'grocery',
        image: '../img/catalog7.png'
    },

    {
        id: 'protains',
        image: '../img/catalog8.png'
    },

    {
        id: 'healthFoods',
        image: '../img/catalog9.png'
    },

    {
        id: 'kidsFood',
        image: '../img/catalog10.png'
    },

    {
        id: 'meats',
        image: '../img/catalog11.png'
    },

    {
        id: 'cleaning',
        image: '../img/catalog12.png'
    }
]

let catalogCards = document.querySelector('.catalog__cards')

let str = ''
cards.map((catalog) => {
    str+=`
    <a href="#"><img src=${catalog.image} alt="img"></a>
    `
})

catalogCards.innerHTML = str