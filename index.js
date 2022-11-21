import Timer from "./timer.js"
import Controls from "./controls.js"
import Sounds from "./sounds.js"
import Events from "./events.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonAlarmClock,
    increaseTime,
    decreaseTime,
    minutesDisplay,
    secondsDisplay,
    florestSound,
    rainSound,
    coffeeSound,
    fireSound,
    playerFlorest,
    playerRain,
    playerCoffee,
    playerFire
} from "./elements.js"


const sounds = Sounds({
    playerFlorest,
    playerRain,
    playerCoffee,
    playerFire
})

const controls = Controls({
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
})

const timer = Timer({
    minutesDisplay,
    secondsDisplay,
    resetControls: controls.reset,
    stopAllSounds: sounds.stopAllSounds
})

Events({controls, timer, sounds})