//jshint esversion:6
document.addEventListener("DOMContentLoaded", () =>{


//card options
const cardArray = [
  {
    name: '1',
    img: 'img/1.png'
  },
  {
    name: '1',
    img: 'img/1.png'
  },
  {
    name: '2',
    img: 'img/2.png'
  },
  {
    name: '2',
    img: 'img/2.png'
  },
  {
    name: '3',
    img: 'img/3.png'
  },
  {
    name: '3',
    img: 'img/3.png'
  },
  {
    name: '4',
    img: 'img/4.png'
  },
  {
    name: '4',
    img: 'img/4.png'
  },
  {
    name: '5',
    img: 'img/5.png'
  },
  {
    name: '5',
    img: 'img/5.png'
  },
  {
    name: '6',
    img: 'img/6.png'
  },
  {
    name: '6',
    img: 'img/6.png'
  }
]

const grid = document.querySelector('.grid')
var cardChosen = []
var cardsChosen = []
var cardsWon = []
//creating board

 function createBoard(){
   for (let i= 0; i < cardArray.length; i++){
     var card = document.createElement('img')
     card.setAttribute('src', 'img/0.png')
     card.setAttribute('data-id', i)
     card.addEventListener('click', flipCard)
     grid.appendChild(card)
   }
 }

//check for matches
function checkForMatch(){
  var cards = document.querySelectorAll('img')
  const optionOneId = cardsChosenId[0]
  const optionTwoId = cardChosenId[1]

  if (cardChosenId[0] === cardChosenId[1]) {
    alert('you found a match')
    cards[optionOneId].setAttribute('src', 'img/7.png')
    cards[optionTwoId].setAttribute('src', 'img/7.png')
    cardsWon.push(cardsChosen)
  }else{
    cards[optionOneId].setAttribute('src', 'img/0.png')
    cards[optionTwoId].setAttribute('src', 'img/0.png')
  }

  cardsChosen = []
  cardsChosenId = []

}
//flip your card
function flipCard(){
  var cardId = this.getAtrribute('data-id')
  cardChosen.push(cardArray[cardId].name)
  cardChosenId.push(cardId)
  this.setAttribute('src', cardArray[cardId].img)

  if (cardChosen.length === 2) {
    setTimeout(checkForMatch, 500)
  }
}



createBoard()

});
