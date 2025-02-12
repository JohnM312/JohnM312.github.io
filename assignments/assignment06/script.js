function toggleMenu() {
    let menu = document.getElementById("menu-items");
    menu.classList.toggle("show");
}

function showExercise(num) {
    document.getElementById("traveling").style.display = num === 1 ? "block" : "none";
    document.getElementById("color-my-heart").style.display = num === 2 ? "block" : "none";
}

function updateImage() {
    let input = document.getElementById("transport-input").value.toLowerCase();
    let imageDiv = document.getElementById("transport-image");

    const images = {
        "bike": "bike.png",
        "scooter": "scooter.png",
        "car": "car.png",
        "skateboard": "skateboard.png"
    };

    imageDiv.innerHTML = images[input] ? `<img src="${images[input]}" alt="${input}">` : "";
}

function changeHeartColor(color) {
    document.getElementById("heart").style.backgroundColor = color;
}
