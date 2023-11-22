// snowflakes.js
const snowflakesContainer = document.getElementById('snowflakes');

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.left = Math.random() * window.innerWidth + 'px';
    snowflakesContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 5000); // Remove snowflake after 5 seconds
}

// Create a new snowflake every second
setInterval(createSnowflake, 1000);
