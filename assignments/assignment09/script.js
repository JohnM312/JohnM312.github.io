document.addEventListener("DOMContentLoaded", function () {
    const pizzaItems = document.querySelectorAll(".pizza-item");
    const modal = document.getElementById("pizzaModal");
    const modalContent = document.getElementById("modalContent");
    const closeBtn = document.getElementById("closeModal");

    pizzaItems.forEach(item => {
        item.addEventListener("click", function () {
            const pizzaName = this.getAttribute("data-name");
            const ingredients = this.getAttribute("data-ingredients");
            const sauce = this.getAttribute("data-sauce");
            const cheese = this.getAttribute("data-cheese");
            const price = this.getAttribute("data-price");
            const imageSrc = this.getAttribute("data-image");

            modalContent.innerHTML = `
                <div class="modal-content">
                    <div class="modal-text">
                        <h2>${pizzaName}</h2>
                        <p><strong>Ingredients:</strong> ${ingredients}</p>
                        <p><strong>Sauce:</strong> ${sauce}</p>
                        <p><strong>Cheese:</strong> ${cheese}</p>
                        <p><strong>Price:</strong> ${price}</p>
                    </div>
                    <div class="modal-image">
                        <img src="${imageSrc}" alt="${pizzaName}">
                    </div>
                </div>
            `;

            // Show the modal
            modal.style.display = "flex";
        });
    });

    // Close modal when clicking "X" button
    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    // Close modal when clicking outside it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
