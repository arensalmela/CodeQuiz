//Variables for actual quiz.

const question= document.getElementbyId("question");
const choiceA= document.getElementbyId("A")
const choiceB= document.getElementbyId("B")
const choiceC= document.getElementbyId("C")
const choiceD= document.getElementbyId("D")

//Timer with Button

document.addEventListener('DOMContentLoaded', () => {
const timeLeftDisplay = document.querySelector ("#countDown")
const startButton = document.querySelector("#timerButton")
let timeLeft = 90

    function timerCountDown(){
        setInterval(function(){
            if(timeLeft <= 0) {
            clearInterval(timeLeft = 0)
            }
        timeLeftDisplay.innerHTML = timeLeft
        timeLeft -=1
        }, 1000)  
    }

startButton.addEventListener("click", timerCountDown)

})



let questions = [

    {
        question: "Where do you link your external JS file within your HTML?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        choiceD: "Wrong",
        correct: "C"
    },

    {
        question: "Where do you link your external JS file within your HTML?",
        choiceA: "Wrong",
        choiceB: "Correct",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "B" 
    },

    {
        question: "Where do you link your external JS file within your HTML?",
        choiceA: "Correct",
        choiceB: "Wrong",
        choiceC: "Wrong",
        choiceD: "Wrong",
        correct: "A"
    },

    {
        question: "Where do you link your external JS file within your HTML?",
        choiceA: "Wrong",
        choiceB: "Wrong",
        choiceC: "Correct",
        choiceD: "Wrong",
        correct: "C"
    },
]

const lastQuestion = questions.length - 1;
let currentQuestion = 0;

function callQuestion(){
    let q = questions[currentQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;

}


