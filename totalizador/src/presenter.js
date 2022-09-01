import impuestos from "./impuesto";
import multiplicar from "./multiplicador";
import {descuentos, tipoDescuento} from "./descuento";

const first = document.querySelector("#cantidad");
const second = document.querySelector("#precio");
const form = document.querySelector("#mult-form");
const div1 = document.querySelector("#recibo-div");

const div2 = document.querySelector("#resultado-div");
const div3 = document.querySelector("#descuento-div")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);
  let total = multiplicar(firstNumber, secondNumber);

  total = impuestos(total);

  div1.innerHTML = "<p>" + "ingresaste: " + "<hr>" + "cantidad de producto: " + firstNumber + "<br>" +  "precio de producto: " + secondNumber + "<hr>" +"</p>";

  div2.innerHTML = "<p>"+ "total: "+ total + "</p>";

if(descuentos(total)<total)
{
  total = descuentos(total);
  div3.innerHTML = "<p>" + "descuento aplicado: " + tipoDescuento(total) + "%" + "<hr>" + " nuevo total: "+ total + "</p>";


}

});
