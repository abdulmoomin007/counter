// Document Object Model
const counter = document.getElementsByClassName("counter")[0];

const button1 = document.getElementById("inc");
const button2 = document.getElementById("dec");

let count = localStorage.getItem("count");

if (!count) {
  localStorage.setItem("count", 0);
  count = 0;
}

counter.textContent = count;
const increase = () => {
  counter.textContent = ++count;
  localStorage.setItem("count", count);
};

const decrease = () => {
  counter.textContent = --count;
  localStorage.setItem("count", count);
};

button1.addEventListener("click", increase);
button2.addEventListener("click", decrease);
