import impuestos from "./impuesto.js";
import multiplicar from "./multiplicador.js";
import {descuentos, tipoDescuento} from "./descuento.js";
describe("Descuento", () => {


  
  it("deberia sumar dos numeros", () => {
    expect(descuentos(3, 2)).toEqual(5);
  });



});