import {
    buttonPlay, 
    buttonPause, 
    buttonStop, 
    buttonAlarmClock, 
    florestSound, 
    rainSound, 
    coffeeSound, 
    fireSound,
    increaseTime,
    decreaseTime
} from "./elements.js"

export default function({ controls, timer, sounds}) {

    buttonPlay.addEventListener("click", function() {
        controls.play()
        timer.countdown()
    })
    
    buttonPause.addEventListener("click", function() {
        controls.pause()
        timer.hold()
    })
    
    buttonStop.addEventListener("click", function() {
        controls.reset()
        timer.reset()
        sounds.stopAllSounds()
        controls.soundButtonResetColors()
    })
    
    buttonAlarmClock.addEventListener("click", function() {
        let newMinutes = controls.getMinutes()
        
        if(!newMinutes) {
            timer.reset()
            return
        }
    
        timer.updateDisplay(newMinutes, 0)
        timer.updateMinutes(newMinutes)
    })
    
    florestSound.addEventListener("click", function() {
        if(florestSound.classList.contains("activated")) {
            florestSound.classList.remove("activated")
            sounds.stopAllSounds()
        } else {
            controls.soundFlorestActivated()
            sounds.playFlorestSound()
        }
    })
    
    rainSound.addEventListener("click", function() {
        if(rainSound.classList.contains("activated")) {
            rainSound.classList.remove("activated")
            sounds.stopAllSounds()
        } else {
            controls.soundRainActivated()
            sounds.playRainSound()
        }
    })
    
    coffeeSound.addEventListener("click", function() {
        if(coffeeSound.classList.contains("activated")) {
            coffeeSound.classList.remove("activated")
            sounds.stopAllSounds()
        } else {
        controls.soundCoffeeActivated()
        sounds.playCoffeeSound()
        }
    })
    
    fireSound.addEventListener("click", function() {
        if(fireSound.classList.contains("activated")) {
            fireSound.classList.remove("activated")
            sounds.stopAllSounds()
        } else {
        controls.soundFireActivated()
        sounds.playFireSound()
        }
    })

    increaseTime.addEventListener("click", function() {
        timer.moreFiveMinutes()
    })

    decreaseTime.addEventListener("click", function() {
        timer.lessFiveMinutes()
    })
}