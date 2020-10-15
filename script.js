var questions = [

    {
        question: "Q1?",
        choices: ["Q1answer1", "Q1answer2", "Q1answer3", "Q1answer4"],
        correct: "Q1answer3"
    },

    {
        question: "Q2",
        choices: ["Q2answer1", "Q2answer2", "Q2answer3", "Q2answer4"],
        correct: "Q2answer2"
    },

    {
        question: "Q3",
        choices: ["Q3answer1", "Q3answer2", "Q3answer3", "Q3answer4"],
        correct: "Q3answer1"
    },

    {
        question: "Q4",
        choices: ["Q4answer1", "Q4answer2", "Q4answer3", "Q4answer4"],
        correct: "Q4answer3"
    },
]





var currentQuestionIndex = 0;
var time = questions.length * 15
var timerId; 
var choicesEl = document.getElementById("choices") //button per choice
var timerEl = document.getElementById("countDown")
var feedbackEl = document.getElementById("feedback")
var start = document.getElementById("start")
var questionEl = document.getElementById("quizSection")

function getQuestion(){
var currentQuestion = questions[currentQuestionIndex]
var titleEl = document.getElementById("quizTitle")
titleEl.textContent = currentQuestion.question

for (let i = 0; i < currentQuestion.choices.length; i++) {
    var choice = currentQuestion.choices[i]
    var choiceNode = document.createElement("button")
    choiceNode.setAttribute("class", "choice")
    choiceNode.setAttribute("value", choice)
    choiceNode.textContent = i + 1 + "." + choice
    choiceNode.addEventListener("click", questionClick)    
    choicesEl.appendChild(choiceNode)
    console.log(choiceNode)

}

  

}

function questionClick(){
    if (this.value !== questions[currentQuestionIndex].correct){
        time -=15
        if (time<0){
            time = 0
        }
      timerEl.textContent = time
      feedbackEl.textContent = "Wrong" 

    } 
    
    else {
        feedbackEl.textContent = "Correct"
    }

    feedbackEl.setAttribute("class", "feedback")
    
    setTimeout(function(){
        feedback.setAttribute("class", "feedback hide")
    },1000)

    currentQuestionIndex ++ 
    if (currentQuestionIndex === questions.length){
        quizEnd()
    } else {
        getQuestion()
    }

}

function quizEnd(){
clearInterval(timerId)
var endScreenEl = document.getElementById("End-Screen")
endScreenEl.removeAttribute("class")
var finalScoreEl = document.getElementById("Final-Score")
finalScoreEl.textContent = time
//questionEl.setAttribute("class" , "hide")
}

start.addEventListener("click", getQuestion) 


//Timer with Button

// document.addEventListener('DOMContentLoaded', () => {
// const timeLeftDisplay = document.querySelector ("#countDown")
// const startButton = document.querySelector("#timerButton")
// let timeLeft = 90

//     function timerCountDown(){
//         setInterval(function(){
//             if(timeLeft <= 0) {
//             clearInterval(timeLeft = 0)
//             }
//         timeLeftDisplay.innerHTML = timeLeft
//         timeLeft -=1
//         }, 1000)  
//     }

// startButton.addEventListener("click", timerCountDown)

// })


