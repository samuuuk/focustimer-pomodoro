export default function Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls,
    stopAllSounds
}) {

    let timerTimeout
    let minutes = Number(minutesDisplay.textContent)

    function reset() {
        updateDisplay(minutes, 0)
        clearTimeout(timerTimeout)
    }
    
    function updateDisplay(newMinutes, seconds) {
        newMinutes = newMinutes === undefined ? minutes : newMinutes
        seconds = seconds === undefined ? 0 : seconds
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
        secondsDisplay.textContent = String(seconds).padStart(2, "0")
    }

    function countdown() {
        timerTimeout = setTimeout(function() {
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
            updateDisplay(minutes, 0)
            
            if(isFinished) {
                resetControls()
                reset()
                stopAllSounds()
                return
            }

            if(seconds <= 0) {
                seconds = 60
                --minutes
            }
    
    
            updateDisplay(minutes, String(seconds -1))
            
            countdown()
        }, 1000)
    }

    function updateMinutes(newMinutes) {
        minutes = newMinutes
    }

    function hold() {
        clearTimeout(timerTimeout)
    }

    function moreFiveMinutes(newMinutes) {
        newMinutes = minutes + 5
        minutesDisplay.textContent = String(newMinutes).padStart(2, "0")
    }

    
    function lessFiveMinutes() {
        minutesDisplay.textContent = Number(minutes - 5)
    }

    return {
        countdown,
        reset,
        updateDisplay,
        updateMinutes,
        hold,
        moreFiveMinutes,
        lessFiveMinutes
    }
}


