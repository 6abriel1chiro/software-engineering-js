import Rover from "./rover";


const instructions = document.querySelector("#instructions");
const form = document.querySelector("#myform");
const div = document.querySelector("#result");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  let rovercito = new Rover;
  const instruction = instructions.value.toString();
  
  div.innerHTML = "<p>" + rovercito.excecute(instruction) + "</p>";


});
