const form = document.querySelector(".login-form");

form.addEventListener("submit", formSabmit);

function formSabmit(event) {
event.preventDefault();

const formData = new FormData(event.currentTarget);
const userData = {};

formData.forEach((value, name) => {
    userData[name] = value;
});
if (!userData.email || !userData.password) {
    alert("Заповніть всі поля.");
    return
}
console.log(userData);

    event.currentTarget.reset();
}
