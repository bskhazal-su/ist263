// Function to hide all planet images and texts
function PlanetsOff() {
    // Hiding all planet images
    document.getElementById('mercury-image').style.display = 'none';
    document.getElementById('venus-image').style.display = 'none';
    document.getElementById('earth-image').style.display = 'none';
    document.getElementById('mars-image').style.display = 'none';
    document.getElementById('jupiter-image').style.display = 'none';
    document.getElementById('saturn-image').style.display = 'none';
    document.getElementById('uranus-image').style.display = 'none';
    document.getElementById('neptune-image').style.display = 'none';

    // Hiding all planet texts
    document.getElementById('mercury-text').style.display = 'none';
    document.getElementById('venus-text').style.display = 'none';
    document.getElementById('earth-text').style.display = 'none';
    document.getElementById('mars-text').style.display = 'none';
    document.getElementById('jupiter-text').style.display = 'none';
    document.getElementById('saturn-text').style.display = 'none';
    document.getElementById('uranus-text').style.display = 'none';
    document.getElementById('neptune-text').style.display = 'none';
}

// Functions to display specific planet image and text
function showMercury() {
    document.getElementById('mercury-image').style.display = 'block';
    document.getElementById('mercury-text').style.display = 'block';
}

function showVenus() {
    document.getElementById('venus-image').style.display = 'block';
    document.getElementById('venus-text').style.display = 'block';
}

function showEarth() {
    document.getElementById('earth-image').style.display = 'block';
    document.getElementById('earth-text').style.display = 'block';
}

function showMars() {
    document.getElementById('mars-image').style.display = 'block';
    document.getElementById('mars-text').style.display = 'block';
}

function showJupiter() {
    document.getElementById('jupiter-image').style.display = 'block';
    document.getElementById('jupiter-text').style.display = 'block';
}

function showSaturn() {
    document.getElementById('saturn-image').style.display = 'block';
    document.getElementById('saturn-text').style.display = 'block';
}

function showUranus() {
    document.getElementById('uranus-image').style.display = 'block';
    document.getElementById('uranus-text').style.display = 'block';
}

function showNeptune() {
    document.getElementById('neptune-image').style.display = 'block';
    document.getElementById('neptune-text').style.display = 'block';
}
