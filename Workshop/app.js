document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const scoreDisplay = document.querySelector('span')
  const startBtn = document.querySelector('.start')

  const keyUp = 38
  const keyDown = 40
  const keyLeft = 37
  const keyRight = 39

  const width = 10
  let currentIndex = 0 //so first div in our grid
  let appleIndex = 0 //so first div in our grid
  let currentSnake = [2,1,0] // so the 3rd div in our grid being 2 (or the HEAD), and 0 being the end (TAIL, with all 1's being the body fro now on)
  let direction = 1
  let score = 0
  let speed = 0.9
  let intervalTime = 0
  let interval = 0


  //to start, and restart the game
  function startGame() {
    // todo: implement restart of the game
  }


  //function that deals with ALL the ove outcomes of the Snake
  function moveOutcomes() {

    //todo: implement snake hitting border and snake hitting self

    //todo: implement the movement of the snake (remove tail of snake, give direction to the head of snake)

    //todo: implement snake getting apple
    
  }


  //todo: implement generate new apple once apple is eaten
  function randomApple() {
    
  }


  //assign functions to keycodes
  function control(e) {
    // todo: remove snake class from all tiles, implement function for keyCodes
    
  }

  document.addEventListener('keyup', control)
  startBtn.addEventListener('click', startGame)
})
