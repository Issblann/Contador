const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

let counter = 0;

// Disminuir el contador
const decrease = () => {
  counter--;
  value.textContent = counter;
  if (counter < 0) {
    value.style.color = "red";
  } else if (counter === 0) {
    value.style.color = "black";
  }
};

// Reiniciar el contador
const resetCounter = () => {
  counter = 0;
  value.textContent = counter;
  value.style.color = "black";
};

// Aumentar el contador
const increase = () => {
  counter++;
  value.textContent = counter;
  if (counter > 0) {
    value.style.color = "green";
  } else if (counter === 0) {
    value.style.color = "black";
  }
};
// Escuchador
btns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    const action = this.dataset.action;
    if (action === "action1") {
      increase();
    } else if (action === "action2") {
      resetCounter();
    } else if (action === "action3") {
      decrease();
    }
  });
});
