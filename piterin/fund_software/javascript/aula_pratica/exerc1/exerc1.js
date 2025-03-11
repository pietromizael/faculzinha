const button = document.querySelector("button");
button.style.backgroundColor = "blue";

let mouseClick = false;

button.addEventListener("click", () => {
  mouseClick = true;
  button.style.backgroundColor = "red";
  button.innerText = "Quebrei";
});

button.addEventListener("mouseover", () => {
  if (!mouseClick) {
    button.style.backgroundColor = "green";
  }
});

button.addEventListener("mouseout", () => {
  if (!mouseClick) {
    button.style.backgroundColor = "blue";
  }
});
