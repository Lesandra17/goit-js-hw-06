const counter = document.querySelector("#counter");
const value = document.querySelector("#value");

let counterValue = 0;

 const updateCounterUI = () => {
    value.textContent = counterValue;
  };

counter.addEventListener("click", (event) => {
  const target = event.currentTarget;
  const action = event.target.dataset.action;
   if (action === "decrement") {
      counterValue -= 1;
    } else if (action === "increment") {
      counterValue += 1;
    }

    updateCounterUI();
  });
