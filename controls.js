
export default function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAlarmClock,
    florestSound,
    rainSound,
    coffeeSound,
    fireSound,
}) {
    
    
    function play() {
        buttonPlay.classList.add("hide")
        buttonPause.classList.remove("hide")
        buttonAlarmClock.classList.add("hide")
        buttonStop.classList.remove("hide")
    }
    
    function pause() {
        buttonPause.classList.add("hide")
        buttonPlay.classList.remove("hide")
    }

    function reset() {
        buttonPlay.classList.remove("hide")
        buttonPause.classList.add("hide")
        buttonStop.classList.add("hide")
        buttonAlarmClock.classList.remove("hide")
    }

    function getMinutes() {
        let newMinutes = prompt("Quantos minutos?")
        if(!newMinutes) {
            return false
        }
    
        return newMinutes
    }

    function soundFlorestActivated() {
        florestSound.classList.add("activated")
        rainSound.classList.remove("activated")
        coffeeSound.classList.remove("activated")
        fireSound.classList.remove("activated")
    }

    function soundRainActivated() {
        florestSound.classList.remove("activated")
        rainSound.classList.add("activated")
        coffeeSound.classList.remove("activated")
        fireSound.classList.remove("activated")
    }

    function soundCoffeeActivated() {
        florestSound.classList.remove("activated")
        rainSound.classList.remove("activated")
        coffeeSound.classList.add("activated")
        fireSound.classList.remove("activated")
    }

    function soundFireActivated() {
        florestSound.classList.remove("activated")
        rainSound.classList.remove("activated")
        coffeeSound.classList.remove("activated")
        fireSound.classList.add("activated")
    }

    function soundButtonResetColors() {
        florestSound.classList.remove("activated")
        rainSound.classList.remove("activated")
        coffeeSound.classList.remove("activated")
        fireSound.classList.remove("activated")
    }

    return {
        reset,
        play,
        pause,
        getMinutes,
        soundFlorestActivated,
        soundRainActivated,
        soundCoffeeActivated,
        soundFireActivated,
        soundButtonResetColors
    }
}

