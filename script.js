let clickCount = 0;
let musicVolume = 0;

const chocolates = document.getElementById('chocolates');
const overlay = document.getElementById('overlay');

chocolates.addEventListener('click', () => {
    clickCount++;

    // Melt the ice (reduce overlay opacity)
    const opacity = 1 - (clickCount * 0.1);
    overlay.style.opacity = opacity;

    // Increase music volume
    musicVolume += 0.1;
    if (musicVolume <= 1) {
        chocolates.style.opacity = musicVolume;
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

    // Stop further clicks
    chocolates.style.pointerEvents = 'none';
}
