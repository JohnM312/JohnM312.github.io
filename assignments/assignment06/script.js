document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("menu-toggle");
    const menu = document.getElementById("menu");
    const arrow = document.getElementById("menu-arrow");

    // Toggle menu visibility only on small screens
    toggleButton.addEventListener("click", function() {
        if (menu.style.display === "block") {
            menu.style.display = "none";
            arrow.innerHTML = "▼"; // Arrow points down
        } else {
            menu.style.display = "block";
            arrow.innerHTML = "▲"; // Arrow points up
        }
    });

    // Ensure menu is always visible on larger screens
    function handleResize() {
        if (window.innerWidth > 600) {
            menu.style.display = "flex"; // Show full menu
            toggleButton.style.display = "none"; // Hide toggle button
        } else {
            menu.style.display = "none"; // Hide menu initially
            toggleButton.style.display = "block"; // Show toggle button
        }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Run on page load
});

// Update Transport Image Based on Input
document.getElementById("transport").addEventListener("input", function() {
    const transportImage = document.getElementById("transport-image");
    const transportMode = this.value.toLowerCase();
    let imageUrl = "";

    switch (transportMode) {
        case "bike":
            imageUrl = "images/bike.jpg"; // Replace with actual image path
            break;
        case "car":
            imageUrl = "images/car.jpg"; // Replace with actual image path
            break;
        case "scooter":
            imageUrl = "images/scooter.png"; // Replace with actual image path
            break;
        case "skateboard":
            imageUrl = "images/skateboard.png"; // Replace with actual image path
        default:
            imageUrl = "";
    }
    
    transportImage.innerHTML = imageUrl ? `<img src="${imageUrl}" alt="${transportMode}">` : "";
});

// Change Heart Color
function changeColor(color) {
    document.getElementById("heart").style.background = color;
    document.getElementById("heart").style.borderColor = color;
}
