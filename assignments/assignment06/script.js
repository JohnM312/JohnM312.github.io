document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const arrow = document.getElementById("menu-arrow");

    // Toggle menu visibility
    toggleButton.addEventListener("click", function() {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            arrow.innerHTML = "▼"; // Arrow points down
        } else {
            menu.style.display = "block";
            arrow.innerHTML = "▲"; // Arrow points up
        }
    });
});

// Function to toggle exercises
function showExercise(exerciseNumber) {
    document.getElementById("exercise-1").classList.add("hidden");
    document.getElementById("exercise-2").classList.add("hidden");

    if (exerciseNumber === 1) {
        document.getElementById("exercise-1").classList.remove("hidden");
    } else {
        document.getElementById("exercise-2").classList.remove("hidden");
    }
}

// Function for Exercise 1: Update Transport Image
function updateTransportImage() {
    const transportInput = document.getElementById("transport-input").value.toLowerCase();
    const container = document.getElementById("transport-image-container");
    container.innerHTML = ""; // Clear previous image

    const validTransports = {
        "bike": "images/bike.jpg",
        "scooter": "images/scooter.png",
        "car": "images/car.jpg",
        "skateboard": "images/skateboard.png"
    };

    if (validTransports[transportInput]) {
        const img = document.createElement("img");
        img.src = `images/${validTransports[transportInput]}`;
        container.appendChild(img);
    }
}

// Function for Exercise 2: Change Heart Color
function changeHeartColor(color) {
    document.getElementById("heart").style.backgroundColor = color;
}
