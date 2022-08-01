var expression = "";
const inputables = document.querySelectorAll(".inputable");
const inputElement = document.querySelector(".resultInput input");
const equal = document.querySelector(".equals");
const clear = document.querySelector(".clear");

const audio = new Audio("./click.mp3");

inputables.forEach((inputable) => {
  inputable.addEventListener("click", (e) => {
    audio.play();
    expression += e.target.innerHTML;
    inputElement.value = expression;
  });
});

inputElement.addEventListener("change", (e) => {
  audio.play();
  expression = e.target.value;
});

clear.addEventListener("click", () => {
  audio.play();
  inputElement.value = "";
  expression = "";
});

equal.addEventListener("click", () => {
  audio.play();
  inputElement.style.display = "none";
  setInterval(() => {
    inputElement.style.display = "block";
  }, 100);
  console.log(expression);
  if (eval(expression)) {
    expression = eval(String(expression));
    inputElement.value = expression;
  }
  inputElement.style.display = "none";
  setInterval(() => {
    inputElement.style.display = "block";
  }, 100);
});
