class Rover{
  constructor(max){
    this.x=0;
    this.y=0;
    this.index=0;
    this.directions=["N","E","S","W"];
    this.max=max
  }
  getPosition()
  {
    let ansStr=""
    ansStr+=this.x+","+this.y+this.directions[this.index]
    return ansStr
  }
  excecute(instruction)
  {
      for(let i=0;i<instruction.length;i++)
      {
          if(instruction[i]=="A")
          {
              this.moveBasedOnDirection()
          }
          else
          {
              this.TurnDirection(instruction[i])
          }
      }
      return this.getPosition()
  }
  moveBasedOnDirection()
  {
    let direction=this.directions[this.index]
    if(direction=="N")
    {
      this.y+=1
      if(this.y>this.max)
          this.y=this.max
    }
    if(direction=="E")
    {
      this.x+=1
      if(this.x>this.max)
          this.x=this.max
    }
    if(direction=="S")
    {
      this.y-=1
      if(this.y<0)
          this.y=0
    }
    if(direction=="W")
    {
      this.x-=1
      if(this.x<0)
          this.x=0
    }
  }
  TurnDirection(Dir)
  {
      if(Dir=="D")
      {
          this.index+=1
          if(this.index>3)
              this.index=0
      }
      if(Dir=="I")
      {
          this.index-=1
          if(this.index<0)
              this.index=3
      }
  }
}
export default Rover;