import sumar from "./sumador";
import multiplicar from "./multiplicador";
import dividir from "./divisor";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-suma-div");
const div2 = document.querySelector("#resultado-mult-div");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";

  div2.innerHTML = "<p>" + multiplicar(firstNumber, secondNumber) + "</p>";

});
