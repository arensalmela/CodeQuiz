

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
var timeLeft = questions.length * 10
var timerBanner = document.getElementById("timerBanner")
//var timerID
var choicesEl = document.getElementById("choices") //button per choice
var timerEl = document.getElementById("countDown")
var feedbackEl = document.getElementById("feedback")
var start = document.getElementById("start")
var questionEl = document.getElementById("quizSection")



function getQuestion(){
var currentQuestion = questions[currentQuestionIndex]
var titleEl = document.getElementById("quizTitle")
titleEl.textContent = currentQuestion.question
choicesEl.innerHTML = "";

for (let i = 0; i < currentQuestion.choices.length; i++) { //For each choices button
    var choice = currentQuestion.choices[i]
    var choiceNode = document.createElement("button") //Creates a button for each choice
    choiceNode.setAttribute("class", "choice") //Gives button class choice
    choiceNode.setAttribute("value", choice) //Sets button value to choice
    choiceNode.textContent = i + 1 + "." + choice //Adds number to each button
    choiceNode.addEventListener("click", questionClick) //Click runs questionClick function  
    choicesEl.appendChild(choiceNode)
   
    

    console.log(choiceNode)

}


  

}

function questionClick(){
  console.log(timeLeft)
    if (this.value !== questions[currentQuestionIndex].correct){
        timeLeft -=10
        if (timeLeft<0){
            timeLeft = 0
        }
      timerEl.textContent = timeLeft
      feedbackEl.textContent = "Wrong" 

    } 
    
    else {
        feedbackEl.textContent = "Correct"
    }
    
    
    feedbackEl.setAttribute("class", "feedback")
    
    setTimeout(function(){
         feedbackEl.setAttribute("class", "feedbackHide")
    },1000)

    console.log(currentQuestionIndex)
    console.log(questions.length)
    if (currentQuestionIndex == 3){
        quizEnd()
    } else {
        currentQuestionIndex ++
        getQuestion()
    }

}

function quizEnd(){
    clearInterval(timeLeft)
    var endScreenEl = document.getElementById("End-Screen")
    endScreenEl.removeAttribute("class")
    var finalScoreEl = document.getElementById("Final-Score")
    finalScoreEl.textContent = timeLeft
    questionEl.setAttribute("class", "hide")
    timerBanner.setAttribute("class", "hide")
    start.setAttribute("class", "hide")
}

start.addEventListener("click", getQuestion) 


//Timer with Button

 document.addEventListener('DOMContentLoaded', () => {
 const timeLeftDisplay = document.querySelector ("#countDown")
 //const startButton = document.querySelector("#timerButton")
     function timerCountDown(){
         setInterval(function(){
             if(timeLeft <= 0) {
             clearInterval(timeLeft = 0)
             }
        timeLeftDisplay.innerHTML = timeLeft
         timeLeft -=1
         }, 1000)  
     }

 start.addEventListener("click", timerCountDown)

 })


