document.addEventListener("DOMContentLoaded", function () {
    fetch("cards.json") // Fetch the JSON file
        .then(response => response.json()) // Convert response to JSON
        .then(data => displayCards(data)) // Call function to display cards
        .catch(error => console.error("Error loading JSON:", error));
});

function displayCards(cards) {
    const container = document.getElementById("pokemon-cards-container");
    container.innerHTML = ""; // Clear existing content

    cards.forEach(card => {
        const cardElement = document.createElement("div");
        cardElement.classList.add("pokemon-card");
        cardElement.innerHTML = `
            <img src="${card.img_name}" alt="${card.name}">
            <h2>${card.name}</h2>
            <p><strong>Type:</strong> ${card.type}</p>
            <p><strong>HP:</strong> ${card.hp}</p>
            <p><strong>Abilities:</strong> ${card.abilities.join(", ")}</p>
            <p><strong>Rarity:</strong> ${card.rarity}</p>
            <p><strong>Set:</strong> ${card.set}</p>
        `;
        console.log(PokeInfo)
        container.appendChild(cardElement);
    });
}
