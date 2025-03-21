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
