document.addEventListener("DOMContentLoaded", () => {
    const drawStairsBtn = document.getElementById("drawStairsBtn");
    const climbStairsBtn = document.getElementById("climbStairsBtn");
    const stairsContainer = document.getElementById("stairsContainer");

    let stickFigure;
    let stepIndex = 0;
    let climbInterval;
    const steps = 10;
    const images = ["images/right.png", "images/left.png"]; // Use the uploaded images

    // Draw stairs function
    drawStairsBtn.addEventListener("click", () => {
        stairsContainer.innerHTML = ""; // Clear previous stairs

        // Create stairs dynamically
        for (let i = 0; i < steps; i++) {
            let stair = document.createElement("div");
            stair.classList.add("stair");
            stairsContainer.appendChild(stair);
        }

        // Add stick figure
        stickFigure = document.createElement("img");
        stickFigure.src = images[0];
        stickFigure.id = "stickFigure";
        stairsContainer.appendChild(stickFigure);

        // Show climb button
        climbStairsBtn.style.display = "block";
    });

    // Climb stairs function
    climbStairsBtn.addEventListener("click", () => {
        stepIndex = 0;

        climbInterval = setInterval(() => {
            if (stepIndex >= steps) {
                clearInterval(climbInterval);
            } else {
                stickFigure.style.bottom = `${stepIndex * 22}px`;
                stickFigure.src = images[stepIndex % 2]; // Alternate images for movement
                stepIndex++;
            }
        }, 500);
    });
});
