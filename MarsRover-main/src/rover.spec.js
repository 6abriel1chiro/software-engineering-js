import Rover from "./rover.js";
describe("Rover Movement", () => {
    let rover;
    beforeEach(()=>{
      rover=new Rover(10)
    })
    it("return initial position", () => {
      expect(rover.excecute("")).toEqual("0,0N");
    });
    it("return position after single movement", () => {
      expect(rover.excecute("A")).toEqual("0,1N");
    });
    it("return position after several movement", () => {
      expect(rover.excecute("AAA")).toEqual("0,3N");
    });
    it("return position after direction change", () => {
      expect(rover.excecute("DDD")).toEqual("0,0W");
    });

  it("return position after a 360 degree turn", () => {
    expect(rover.excecute("DDDD")).toEqual("0,0N");
  });

  it("return position after diagonal movement ", () => {
    expect(rover.excecute("DA")).toEqual("1,0E");
  });
  it("south movement", () => {
    expect(rover.excecute("AIIA")).toEqual("0,0S");
  });

  it("controlling up out of range", () => {
    expect(rover.excecute("AAAAAAAAAAAA")).toEqual("0,10N");
  });
  it("controlling right outrange", () => {
    expect(rover.excecute("IA")).toEqual("0,0W");
  });
 

  });




  
  