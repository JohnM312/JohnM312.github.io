//PokeInfo.js
document.addEventListener("DOMContentLoaded", function () {
    fetch("json/PokeInfo.json") // Fetch the JSON file
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
        container.appendChild(cardElement);
    });
}

// contact.js

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const message = document.getElementById("form-message");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        // Simulate async submission (e.g., fetch to backend)
        try {
            if (!data.name || !data.email || !data.message) {
                throw new Error("Please fill in all fields.");
            }

            if (!/\S+@\S+\.\S+/.test(data.email)) {
                throw new Error("Invalid email address.");
            }

            // Simulate delay
            await new Promise((resolve) => setTimeout(resolve, 1000));

            message.textContent = "✅ Message sent successfully!";
            message.style.color = "green";
            form.reset();
        } catch (error) {
            message.textContent = `❌ ${error.message}`;
            message.style.color = "red";
        }
    });
});
