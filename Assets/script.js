var pageOneEl = document.querySelector('#first')
var pageTwoEl = document.querySelector('#secondPage')
var pageThreeEl = document.querySelector('#thirdPage')
var pageFourEl = document.querySelector('#forthPage')
var startPageEl = document.querySelector('#startPage')
var goToPageTwoEl = document.querySelector('.goToPageTwo')

document.querySelector("#startQuiz")
    .addEventListener("click", startQuiz)





function startQuiz() {
    startPageEl.classList.toggle("hide");
    pageOneEl.classList.toggle("hide");
    var choices = document.querySelectorAll(".goToPageTwo")
    // console.log(choices)
    for (var i = 0; i < 4; i++) {
        console.log(choices[i])
        choices[i].addEventListener("click", nextPage)
    }
    // choices.addEventListener("click", nextPage)

}


function nextPage() {
    pageOneEl.classList.toggle("hide");
    pageTwoEl.classList.toggle("hide");
}




var strings = pageTwoEl.children[1].children[0]
var booleans = pageTwoEl.children[1].children[1]
var alerts = pageTwoEl.children[1].children[2]
var numbers = pageTwoEl.children[1].children[3]




//
//When the start button is click 
//Then a timer starts in the right hand corner
//And the first question is presented with a list of options to choose from 
//When user answers a question correctly 
//Then they are moved to the next question
//When the user answers the question incorrectly 
//Then time is subtracted from the clock
//If the user complets all the questions or the timer reaches 0
//Then the game ends
//At the end of the game user can save their initals and their score