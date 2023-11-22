let clickCount = 0;
let musicVolume = 1;

const chocolates = document.getElementById('chocolates');
const overlay = document.getElementById('overlay');
const backgroundMusic = document.getElementById('background-music');

// Start playing the music when the game begins
backgroundMusic.play();

chocolates.addEventListener('click', () => {
    clickCount++;

    // Melt the ice (reduce overlay opacity)
    const opacity = 1 - (clickCount * 0.1);
    overlay.style.opacity = opacity;

    // Increase music volume
    musicVolume += 0.1;
    if (musicVolume <= 1) {
        backgroundMusic.volume = musicVolume;
    }

    // Check if the game is finished
    if (clickCount === 10) {
        endGame();
    }
});

function endGame() {
    // Display "YOU WON A BOX OF CHOCOLATES" text
    const winText = document.createElement('div');
    winText.innerText = 'YOU WON A BOX OF CHOCOLATES';
    winText.className = 'win-text';
    document.body.appendChild(winText);

    // Stop further clicks and music
    chocolates.style.pointerEvents = 'none';
    backgroundMusic.pause();
}
