document.getElementById('draw-stairs-btn').addEventListener('click', drawStairs);
document.getElementById('climb-stairs-btn').addEventListener('click', climbStairs);

function drawStairs() {
    const stairsContainer = document.getElementById('stairs-container');
    stairsContainer.innerHTML = ''; // Clear any existing stairs

    for (let i = 0; i < 10; i++) {
        const stair = document.createElement('div');
        stair.classList.add('stair');
        stair.style.bottom = `${i * 20}px`;
        stair.style.left = `${i * 20}px`;
        stairsContainer.appendChild(stair);
    }

    document.getElementById('climb-stairs-btn').style.display = 'block';
    const stickFigure = document.getElementById('stick-figure');
    stickFigure.style.display = 'block';
    stickFigure.style.bottom = '0';
    stickFigure.style.left = '0';
}

function climbStairs() {
    const stickFigure = document.getElementById('stick-figure');
    let step = 0;
    const interval = setInterval(() => {
        if (step >= 10) {
            clearInterval(interval);
            return;
        }
        stickFigure.style.bottom = `${step * 20}px`;
        stickFigure.style.left = `${step * 20}px`;
        stickFigure.src = step % 2 === 0 ? 'images/right.png' : 'images/left.png';
        step++;
    }, 500);
}
