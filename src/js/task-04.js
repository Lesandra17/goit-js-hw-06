const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

let counterValue = 0;

const movCounter = () => {
    valueSpan.textContent = counterValue;
  };

counter.addEventListener("click", handlerClick);
function counterMov = ()  => {
    valueSpan.textContent = counterValue;
  };