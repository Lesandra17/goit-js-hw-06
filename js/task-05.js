const inputName = document.querySelector("#name-input");
const userName = document.querySelector("#name-output");

inputName.addEventListener("input", onInputChange);

function onInputChange(event) {
    userName.textContent = event.currentTarget.value.trim() || "Anonymous";
}