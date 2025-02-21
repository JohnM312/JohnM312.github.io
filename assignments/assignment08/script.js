document.addEventListener("DOMContentLoaded", function () {
    const titles = {
        "Happy Birthday": "images/birthday.jpg",
        "Crazy Clown": "images/clown.jpg",
        "It's Raining": "images/rain.jpg",
        "Quiet Time": "images/read.jpg",
        "Working Hard": "images/shovel.jpg",
        "Work from Home": "images/work.jpg"
    };

    const titleList = document.getElementById("title-list");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const closeBtn = document.getElementById("close");

    // Populate the title list
    for (let title in titles) {
        let listItem = document.createElement("li");
        listItem.textContent = title;
        listItem.addEventListener("click", function () {
            popupTitle.textContent = title;
            popupImage.src = titles[title];
            popup.classList.remove("hidden");
            popup.style.display = "block";
        });
        titleList.appendChild(listItem);
    }

    // Close popup
    closeBtn.addEventListener("click", function () {
        popup.classList.add("hidden");
        popup.style.display = "none";
    });
});
