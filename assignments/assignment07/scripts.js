const drawStairsButton = document.getElementById('drawStairsButton');
const climbStairsButton = document.getElementById('climbStairsButton');
const stairsContainer = document.getElementById('stairs');
const stickFigure = document.getElementById('stickFigure');

let stairCount = 10;  // Number of stairs
let treadHeight = 20; // Matching CSS .tread height
let climbingInterval = null; // Variable to hold the interval ID
let currentStair = 0; // Keeps track of the stair the stick figure is climbing
let isRightImage = true;

function drawStairs() {
    stairsContainer.innerHTML = ''; // Clear existing stairs

    for (let i = 0; i < stairCount; i++) {
        const tread = document.createElement('div');
        tread.classList.add('tread');
        tread.style.top = (stairCount - i - 1) * treadHeight + 'px'; // Position from the bottom up
        stairsContainer.appendChild(tread);
    }

    climbStairsButton.style.display = 'block';
    stickFigure.style.display = 'block'; // show stick figure

    // Initial position of the stick figure
    stickFigure.style.top = '0px'; // Bottom stair
    stickFigure.src = 'images/right.png';
}


function climbStairs() {
    const climbSpeed = 2; // Adjust for climb speed

    climbingInterval = setInterval(() => {
        // Calculate the target Y position for the current stair
        let targetY = (stairCount - currentStair -1) * treadHeight;


        if (parseInt(stickFigure.style.top) < targetY)
        {
            clearInterval(climbingInterval);
            return;
        }


        stickFigure.style.top = (parseInt(stickFigure.style.top) + climbSpeed) + 'px';

        stickFigure.src = isRightImage ? 'images/left.png' : 'images/right.png';
        isRightImage = !isRightImage;

        if (parseInt(stickFigure.style.top) >= (stairCount - 1) * treadHeight) {
            clearInterval(climbingInterval);
            console.log("Reached the top!");
        }

    }, 20); // Animation interval (adjust for smoothness)
}


drawStairsButton.addEventListener('click', drawStairs);
climbStairsButton.addEventListener('click', climbStairs);
