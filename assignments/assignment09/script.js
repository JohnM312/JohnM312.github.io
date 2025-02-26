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
    new Pizza("Hawaiian", "Ham, Pineapple", "Tomato", "Mozzarella", 18.5, "hawaiian.png"),
    new Pizza("Buffalo Chicken Ranch", "Chicken, Ranch, Buffalo Sauce", "Ranch", "Cheddar", 20.3, "buffalo.png"),
    new Pizza("Margarita", "Basil, Tomatoes", "Extra Virgin Olive Oil", "Fresh Mozzarella", 19.2, "margarita.png"),
    new Pizza("Pepperoni", "Pepperoni, Herbs", "Tomato", "Mozzarella", 17.8, "pepperoni.png"),
    new Pizza("Veggie", "Mushrooms, Olives, Peppers", "Tomato", "Mozzarella", 16.9, "veggie.png"),
];

// Populate pizza list
const pizzaContainer = document.getElementById("pizza-container");
pizzaContainer.innerHTML = pizzas.map(pizza => pizza.getSection()).join("");

// Modal Functions
function showModal(name) {
    const pizza = pizzas.find(p => p.name === name);
    if (pizza) {
        document.getElementById("modal-content").innerHTML = pizza.getExpandedSection();
        document.getElementById("pizzaModal").style.display = "block";
    }
}

function closeModal() {
    document.getElementById("pizzaModal").style.display = "none";
}
