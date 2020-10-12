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