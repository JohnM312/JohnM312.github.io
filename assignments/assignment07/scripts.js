document.addEventListener("DOMContentLoaded", function () {
    const drawButton = document.getElementById("drawStairs");
    const climbButton = document.getElementById("climbStairs");
    const stairsDiv = document.getElementById("stairs");
    const stairContainer = document.getElementById("stairContainer");

    let stickFigure;
    let position = 0;
    let isLeft = true;

    drawButton.addEventListener("click", function () {
        stairsDiv.innerHTML = ""; // Clear old stairs
        position = 0; // Reset position

        // Generate 10 stairs
        for (let i = 0; i < 10; i++) {
            let stair = document.createElement("div");
            stair.classList.add("stair");
            stairsDiv.appendChild(stair);
        }

        // Add stick figure only if it doesn't exist
        if (!stickFigure) {
            stickFigure = document.createElement("img");
            stickFigure.src = "images/right.png"; // Initial climbing pose
            stickFigure.id = "stickFigure";
            stairContainer.appendChild(stickFigure);
        }

        stickFigure.style.bottom = "0px"; // Reset figure to bottom

        // Show climb button
        climbButton.style.display = "block";
    });

    climbButton.addEventListener("click", function () {
        if (position < 9) {  
            position++;
            stickFigure.style.bottom = position * 32 + "px"; // Move up step by step

            // Toggle between climbing images
            stickFigure.src = isLeft ? "images/left.png" : "images/right.png";
            isLeft = !isLeft;
        }
    });
});
