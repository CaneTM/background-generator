const css = document.querySelector("h3");
const [color1, color2] = document.querySelectorAll(".colorInput");
const body = document.querySelector("#gradient");

function setGradient() {
    body.style.background = "linear-gradient(to right, " + 
    color1.value + ", " + color2.value + ")";

    css.textContent = body.style.background;
}

setGradient();

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);