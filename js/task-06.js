const inputName = document.querySelector("#validation-input");

inputName.addEventListener("blur", () => {
    const length = parseInt(inputName.getAttribute("data-length"));
    const enteredLength = inputName.value.length;

    if (enteredLength === length) {
        inputName.classList.remove("invalid");
        inputName.classList.add("valid");
    } else {inputName.classList.remove("valid");
        inputName.classList.add("invalid");

    }
});