document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const arrow = document.getElementById("menu-arrow");

    toggleButton.addEventListener("click", function() {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            arrow.innerHTML = "▼"; // Change arrow to down when menu closes
        } else {
            menu.style.display = "block";
            arrow.innerHTML = "▲"; // Change arrow to up when menu opens
        }
    });
});

function showExercise(num) {
    document.getElementById("traveling").style.display = num === 1 ? "block" : "none";
    document.getElementById("color-my-heart").style.display = num === 2 ? "block" : "none";
}

function updateImage() {
    let input = document.getElementById("transport-input").value.toLowerCase();
    let imageDiv = document.getElementById("transport-image");

    const images = {
        "bike": "images/bike.jpg",
        "scooter": "images/scooter.png",
        "car": "images/car.jpg",
        "skateboard": "images/skateboard.png"
    };

    imageDiv.innerHTML = images[input] ? `<img src="${images[input]}" alt="${input}">` : "";
}

function changeHeartColor(color) {
    document.getElementById("heart").style.backgroundColor = color;
}
