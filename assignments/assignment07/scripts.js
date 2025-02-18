// Wait until the entire page has loaded
window.addEventListener("load", function () {
    const drawButton = document.getElementById("drawStairs");
    const climbButton = document.getElementById("climbStairs");
    const container = document.getElementById("stairContainer");

    drawButton.addEventListener("click", function () {
        container.innerHTML = ""; // Clear previous stairs
        for (let i = 0; i < 10; i++) {
            let stair = document.createElement("div");
            stair.classList.add("stair");
            stair.style.bottom = i * 40 + "px";
            container.appendChild(stair);
        }

        // Add stick figure
        let stickFigure = document.createElement("img");
        stickFigure.src = "images/left.png"; // Initial position image
        stickFigure.id = "stickFigure";
        container.appendChild(stickFigure);

        // Show climb button
        climbButton.style.display = "block";
    });

    climbButton.addEventListener("click", function () {
        let figure = document.getElementById("stickFigure");
        let position = 0;
        let isLeft = true;
        let images = ["images/right.png", "images/left.png"]; // Alternating images

        let climbInterval = setInterval(function () {
            if (position >= 9) {
                clearInterval(climbInterval);
            } else {
                position++;
                figure.style.bottom = position * 40 + "px";
                figure.src = images[+isLeft]; // Toggle between images
                isLeft = !isLeft;
            }
        }, 500);
    });
});

// Dynamically inject the script file into the page
const script = document.createElement("script");
script.src = "script.js";
document.body.appendChild(script);

