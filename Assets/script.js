console.log('Hello World')

var pageOneEl = document.querySelector('#first')
var pageTwoEl = document.querySelector('#secondPage')
var pageThreeEl = document.querySelector('#thirdPage')
var pageFourEl = document.querySelector('#forthPage')

document.querySelector("#startQuiz")
    .addEventListener("click", switchPages)


function switchPages() {
    pageOneEl.classList.toggle("hide");
    pageTwoEl.classList.toggle("hide");
}

var strings = pageTwoEl.children[1].children[0]
var booleans = pageTwoEl.children[1].children[1]
var alerts = pageTwoEl.children[1].children[2]
var numbers = pageTwoEl.children[1].children[3]




//
//When the start button is click 
//Then a timer starts in the corner and the first question is presented
//When user answers a question then they are moved to the next question
//When the user answers the question incorrectly 
//Then time is subtracted from the clock
//If the user complets all the questions or the timer reaches 0
//Then the game ends
//At the end of the game user can save their initals and their score