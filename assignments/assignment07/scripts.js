document.getElementById("drawStairs").addEventListener("click", function () {
    let container = document.getElementById("stairContainer");
    container.innerHTML = ""; // Clear previous stairs
    for (let i = 0; i < 10; i++) {
        let stair = document.createElement("div");
        stair.classList.add("stair");
        stair.style.bottom = i * 40 + "px";
        container.appendChild(stair);
    }

    // Add stick figure
    let stickFigure = document.createElement("img");
    stickFigure.src = "images/right.png"; // Start position image
    stickFigure.id = "stickFigure";
    container.appendChild(stickFigure);

    // Show climb button
    document.getElementById("climbStairs").style.display = "block";
});

document.getElementById("climbStairs").addEventListener("click", function () {
    let figure = document.getElementById("stickFigure");
    let position = 0;
    let isLeft = true;
    let images = ["images/left.png", "images/right.png"]; // Alternating images

    let climbInterval = setInterval(function () {
        if (position >= 9) {
            clearInterval(climbInterval);
        } 
        else {
            position++;
            figure.style.bottom = position * 40 + "px";
            figure.src = images[+isLeft]; // Toggle between images
            isLeft = !isLeft;
        }
    }, 500);
});
