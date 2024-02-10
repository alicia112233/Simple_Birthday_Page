const card = document.getElementById('birthdayCard');
const changeColorButton = document.getElementById('changeColorButton');

changeColorButton.addEventListener('click', function() {
    const randomColor = getRandomColor();
    card.style.backgroundColor = randomColor;
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to check if a color is dark
function isDarkColor(color) {
    // Convert color to RGB format
    color = color.substring(1); // Remove the #
    const rgb = parseInt(color, 16);
    const r = (rgb >> 16) & 0xff;
    const g = (rgb >> 8) & 0xff;
    const b = (rgb >> 0) & 0xff;

    // Calculate brightness using HSP (Highly Sensitive Poo)
    const brightness = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

    // Return true if brightness is less than or equal to 127 (dark color)
    return brightness <= 127;
}

// Get the card element
const card = document.getElementById('birthdayCard');

// Get all <p> elements inside the card
const paragraphs = card.querySelectorAll('p');

// Get the current background color of the card
const currentBgColor = window.getComputedStyle(card).backgroundColor;

// Check if the background color is dark
if (isDarkColor(currentBgColor)) {
    // If background color is dark, set font color of all <p> elements to white
    paragraphs.forEach(paragraph => {
        paragraph.style.color = 'white';
    });
}
