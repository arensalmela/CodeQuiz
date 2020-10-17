

var questions = [

    {
        question: "Which of the following type of variable takes precedence over other if names are same?",
        choices: ["both", "neither", "local variable" , "global variable"],
        correct: "local variable"
    },

    {
        question: "Which built-in method returns the characters in a string beginning at the specified location?",
        choices: ["getSubstring()", "substr()", "slice()", "none of the above"],
        correct: "substr()"
    },

    {
        question: "Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?",
        choices: ["big()", "anchor()", "blink()", "italics()"],
        correct: "big()"
    },

    {
        question: "Which of the following function of Array object removes the last element from an array and returns that element?",
        choices: ["push()", "join()", "pop()", "map()"],
        correct: "pop()"
    },
]




var intervalId 
var currentQuestionIndex = 0;
var timeLeft = questions.length * 10
var timerBanner = document.getElementById("timerBanner")
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
        choiceNode.addEventListener("click", choiceClick) //Click runs questionClick function  
        choicesEl.appendChild(choiceNode)
        console.log(choiceNode)
}

}

function choiceClick(){
  console.log(timeLeft)
    if (this.value !== questions[currentQuestionIndex].correct){ //Player will face 10 second penalty for wrong answer
        timeLeft -=5
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
         feedbackEl.setAttribute("class", "hide") //Question result hides after a second.
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
//Function to end quiz, hide elements, show score, and player name.
function quizEnd(){
    clearInterval(intervalId)
    document.getElementById("score").setAttribute("class", "")
    var finalScoreEl = document.getElementById("Final-Score")
    finalScoreEl.textContent = "Your score " + timeLeft
    questionEl.setAttribute("class", "hide")
    timerBanner.setAttribute("class", "hide")
    start.setAttribute("class", "hide")
    
}

start.addEventListener("click", getQuestion) 


//Timer 

 document.addEventListener('DOMContentLoaded', () => {
 const timeLeftDisplay = document.querySelector ("#countDown")
 
     function timerCountDown(){
         intervalId = setInterval(function(){
             if(timeLeft <= 0) {
             clearInterval(timeLeft = 0)
             }
        timeLeftDisplay.innerHTML = timeLeft
         timeLeft -=1
         }, 1000)  
     }

 start.addEventListener("click", timerCountDown)

 })

submitButton.addEventListener("click", function(){
    var name = document.getElementById("name").value
    var scoreData = {
    name: name,
    score: timeLeft

    }
    localStorage.setItem("scoreData", JSON.stringify(scoreData)) 
})

document.getElementById("scoreBoard").textContent = localStorage.getItem("scoreData")

