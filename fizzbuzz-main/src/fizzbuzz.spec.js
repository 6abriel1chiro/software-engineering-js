import FizzBuzz from "./fizzbuzz.js"
describe("fizzbuzz para un numero", () => {


  
  it("deberia mostrar el numero 1 que no tiene regas", () => {

    const fb = new FizzBuzz();
    const strnum = fb.generateFor(1);
        expect(strnum).toEqual('1');
  });
  it("deberia mostrar el numero 2 que no tiene reglas", () => {

    const fb = new FizzBuzz();
    const strnum = fb.generateFor(2)
    expect(strnum).toEqual('2');
  });

  it("deberia mostrar fizz con multiplos de 3", () => {

    const fb = new FizzBuzz();
    const strnum = fb.generateFor(3)
    expect(strnum).toEqual('Fizz');
  });
  it("deberia mostrar buzz con multiplos de 5", () => {

    const fb = new FizzBuzz();
    const strnum = fb.generateFor(10);
        expect(strnum).toEqual('Buzz');
  });
  it("deberia mostrar fizzbuss con multiplos de 3 y 5", () => {

    const fb = new FizzBuzz();
    const strnum = fb.generateFor(15);
        expect(strnum).toEqual('FizzBuzz');
  });


});
