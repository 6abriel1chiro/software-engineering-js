import sumar from "./sumador.js";
import multiplicar from "./multiplicador.js"
describe("Sumar", () => {


  
  it("deberia sumar dos numeros", () => {
    expect(sumar(3, 2)).toEqual(5);
  });

  it("deberia multiplicar dos numeros", () => {
    expect(multiplicar(3, 2)).toEqual(6);
  });


  

});
