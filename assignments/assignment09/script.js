class Pizza {
    constructor(name, ingredients, sauce, cheese, price, image) {
        this.name = name;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
        this.image = image;
    }

    getSection() {
        return `
            <div class="pizza-box" onclick="showModal('${this.name}')">
                <img src="images/${this.image}" alt="${this.name}">
                <h3>${this.name}</h3>
            </div>
        `;
    }

    getExpandedSection() {
        return `
            <h2>${this.name}</h2>
            <p><strong>Ingredients:</strong> ${this.ingredients}</p>
            <p><strong>Sauce:</strong> ${this.sauce}</p>
            <p><strong>Cheese:</strong> ${this.cheese}</p>
            <p><strong>Price:</strong> $${this.price}</p>
            <img src="images/${this.image}" alt="${this.name}">
        `;
    }
}

// Create pizza objects
const pizzas = [
    new Pizza("Hawaiian", "Ham, Pineapple", "Tomato", "Mozzarella", 18.5, "images/hawaiian pizza.png"),
    new Pizza("Buffalo Chicken Ranch", "Chicken, Ranch, Buffalo Sauce", "Ranch", "Cheddar", 20.3, "images/buffalo chicken ranch pizza.png"),
    new Pizza("Margarita", "Basil, Tomatoes", "Extra Virgin Olive Oil", "Fresh Mozzarella", 19.2, "images/margarita pizza.png"),
    new Pizza("Pepperoni", "Pepperoni, Herbs", "Tomato", "Mozzarella", 17.8, "images/pepperoni pizza.png"),
    new Pizza("Veggie", "Mushrooms, Olives, Peppers", "Tomato", "Mozzarella", 16.9, "images/veggie pizza.png"),
];

// Populate pizza list
const pizzaContainer = document.getElementById("pizza-container");
pizzaContainer.innerHTML = pizzas.map(pizza => pizza.getSection()).join("");

// Modal Functions
function openModal(title, imgSrc, ingredients, sauce, cheese, price) {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-ingredients").innerText = `Ingredients: ${ingredients}`;
    document.getElementById("modal-sauce").innerText = `Sauce: ${sauce}`;
    document.getElementById("modal-cheese").innerText = `Cheese: ${cheese}`;
    document.getElementById("modal-price").innerText = `Price: $${price}`;
    document.getElementById("modal-image").src = imgSrc;
    document.getElementById("modal").style.display = "flex";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}
