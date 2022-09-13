import impuestos from "./impuesto.js";
import multiplicar from "./multiplicador.js";
import {descuentos, tipoDescuento} from "./descuento.js";
describe("Impuesto", () => {


  
  it("deberia sumar dos numeros", () => {
    expect(impuestos(3, 2)).toEqual(5);
  });


});