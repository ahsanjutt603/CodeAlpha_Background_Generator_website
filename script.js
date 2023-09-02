const mainTag = document.querySelector('main');
const colorCode = document.getElementById('colorCode');

document.getElementById('colorGenerateBtn').addEventListener('click', () => {
    const colors = [
        '#045b62', //Green
        '#a0144f', //lightred
        '#14539a', //blue
        '#6d41a1', //lightpurple
        '#ffe0e6', //pink
        '#c4e1c5', //lightgreen
        '#b7e1e4', //coolblue
        '#cbdcf7', //lightblue
        '#808080', // Gray
        '#D3D3D3', // Light Gray
        '#A9A9A9', // Dark Gray
        '#008000', // Green
        '#0000FF', // Blue
        '#FFFF00', // Yellow
        '#FFA500', // Orange
        '#800080', // Purple
        '#FFC0CB', // Pink
        '#008080', // Teal
        '#A52A2A', // Brown
        '#E6E6FA', // Lavender
        '#98FB98', // Mint Green
        '#87CEEB', // Sky Blue
        '#FF6B6B', // Coral
        '#C0C0C0'  // Silver
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];
    mainTag.style.backgroundColor = randomColor;
    colorCode.value = randomColor;

    
});