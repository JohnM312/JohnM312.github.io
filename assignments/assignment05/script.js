// Say Hello Function
const sayHello = () => {
    const helloOutput = document.getElementById("hello-output");
    helloOutput.innerHTML += "hello<br>";
};

// Change Star Color
const changeColor = () => {
    const color = document.getElementById("colorPicker").value;
    document.getElementById("star").style.color = color;
};

// Switch Image
const switchImage = () => {
    const img = document.getElementById("changeImage");
    img.src = img.src.includes("placeholder") ? "https://place-hold.it/200x200" : "https://place-hold.it/200x200";
};
