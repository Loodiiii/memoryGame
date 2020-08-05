document.addEventListener('DOMContentLoaded', () => {

    //card options
    const cardArray = [
        {
            name: 'bread',
            img: 'images/bread.png'
        },
        {
            name: 'chocolate',
            img: 'images/chocolate.png'
        },
        {
            name: 'moon',
            img: 'images/moon.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'skull',
            img: 'images/skull.png'
        },
        {
            name: 'sushi',
            img: 'images/sushi.png'
        },
        {
            name: 'bread',
            img: 'images/bread.png'
        },
        {
            name: 'chocolate',
            img: 'images/chocolate.png'
        },
        {
            name: 'moon',
            img: 'images/moon.png'
        },
        {
            name: 'pizza',
            img: 'images/pizza.png'
        },
        {
            name: 'skull',
            img: 'images/skull.png'
        },
        {
            name: 'sushi',
            img: 'images/sushi.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var cardsChosenId = []
    const cardsWon = []

    //create board
    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/question-mark.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]
        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'images/question-mark.png')
            cards[optionTwoId].setAttribute('src', 'images/question-mark.png')

            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            //alert('You found a match')
            //cards[optionOneId].setAttribute('src', 'images/white.png')
            //cards[optionTwoId].setAttribute('src', 'images/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'images/question-mark.png')
            cards[optionTwoId].setAttribute('src', 'images/question-mark.png')
            //alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found all of them!'
        }
    }

    //flip card
    function flipCard() {
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 200)
        }
    }

    createBoard()
})