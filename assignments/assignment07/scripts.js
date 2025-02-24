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

        console.log("Drawing stairs...");

        // Generate 10 stairs
        for (let i = 0; i < 10; i++) {
            let stair = document.createElement("div");
            stair.classList.add("stair");
            stairsDiv.appendChild(stair);
        }

        console.log("Stairs added:", stairsDiv.children.length);

        // Add stick figure only if it doesn't exist
        if (!stickFigure) {
            stickFigure = document.createElement("img");
            stickFigure.src = "images/right.png"; // Initial climbing pose
            stickFigure.id = "stickFigure";
            stairContainer.appendChild(stickFigure);
        }

        stickFigure.style.bottom = "0px"; // Reset figure to bottom
        climbButton.style.display = "block"; // Show climb button
    });

   climbButton.addEventListener("click", function () {
    if (position < 9) {  
        position++;
        stickFigure.style.bottom = position * 40 + "px"; // Moves to next stair

        // Toggle stick figure image
        stickFigure.src = isLeft ? "images/left.png" : "images/right.png";
        isLeft = !isLeft;
    }
    });
});
