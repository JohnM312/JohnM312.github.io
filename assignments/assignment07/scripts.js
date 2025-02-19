document.addEventListener("DOMContentLoaded", function () {
    const drawButton = document.getElementById("drawStairs");
    const climbButton = document.getElementById("climbStairs");
    const stairContainer = document.getElementById("stairContainer");
    const stairsDiv = document.getElementById("stairs");

    let position = 0;  // Stick figure's position
    let isLeft = true; // Track climbing direction
    let stickFigure;   // Store stick figure reference

    drawButton.addEventListener("click", function () {
        stairsDiv.innerHTML = ""; // Clear old stairs
        position = 0; // Reset climbing

        // Create 10 stairs
        for (let i = 0; i < 10; i++) {
            let stair = document.createElement("div");
            stair.classList.add("stair");
            stairsDiv.appendChild(stair);
        }

        // Add stick figure
        if (!stickFigure) {
            stickFigure = document.createElement("img");
            stickFigure.src = "images/right.png"; // First climbing position
            stickFigure.id = "stickFigure";
            stairContainer.appendChild(stickFigure);
        }

        stickFigure.style.bottom = "0px"; // Reset to bottom

        // Show climb button
        climbButton.style.display = "block";
    });

    climbButton.addEventListener("click", function () {
        if (position < 9) {  // Ensure it doesn’t climb too high
            position++;
            stickFigure.style.bottom = position * 32 + "px"; // Move up

            // Toggle images for climbing effect
            stickFigure.src = isLeft ? "images/left.png" : "3 (1).png";
            isLeft = !isLeft;
        }
    });
});
