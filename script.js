var questions = [

    {
        question: "Where do you link your external JS file within your HTML?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "C"
    },

    {
        question: "Where do you link your external JS file within your HTML?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "B" //correct needs to be index or match string
    },

    {
        question: "Where do you link your external JS file within your HTML?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "A"
    },

    {
        question: "Where do you link your external JS file within your HTML?",
        choices: ["answer1", "answer2", "answer3", "answer4"],
        correct: "C"
    },
]





var currentQuestionIndex = 0;
var time = questions.length * 15
var timerId; 
var choicesEl = document.getElementById("choices") //button per choice
var timerEl = document.getElementById("countDown")
var feedbackEl = document.getElementById("feedback")
var start = document.getElementById("start")
//var questionEl = document.getElementById("quizSection")

function getQuestion(){
var currentQuestion = questions[currentQuestionIndex]
var titleEl = document.getElementById("questionTitle")
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
    if (this.value !== question[currentQuestionIndex].correct){
        time -=15
        if (time<0){
            time = 0
        }
      timerEl.textContent = time
      feedbackEl.textContent = "Wrong" 

    } else {
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


