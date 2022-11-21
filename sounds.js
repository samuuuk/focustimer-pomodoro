export default function Sounds({
    playerFlorest,
    playerRain,
    playerCoffee,
    playerFire
}) {

    function playFlorestSound() {
        
        playerFlorest.play()
        playerFlorest.loop = true
        playerRain.pause()
        playerCoffee.pause()
        playerFire.pause()
    }

    function playRainSound() {

        playerRain.play()
        playerRain.loop = true
        playerFlorest.pause()
        playerCoffee.pause()
        playerFire.pause()
    }

    function playCoffeeSound() {
        playerCoffee.play()
        playerCoffee.loop = true
        playerFlorest.pause()
        playerRain.pause()
        playerFire.pause()
    }

    function playFireSound() {
        playerFire.play()
        playerFire.loop = true
        playerFlorest.pause()
        playerRain.pause()
        playerCoffee.pause()
    }

    function stopAllSounds() {
        playerFire.pause()
        playerFlorest.pause()
        playerRain.pause()
        playerCoffee.pause()
    }

    return {
        playFlorestSound,
        playRainSound,
        playCoffeeSound,
        playFireSound,
        stopAllSounds
    }

}

