function impuestos(total) {

    const e  = document.getElementById("select-state");
    let estado = e.value;
    if (estado==="CA"){

         total  = total + total * 0.0825;
    }else if (estado=="TX")
    {
        total  = total + total * 0.0625;

    }
    else if (estado=="NV")
    {
        total  = total + total * 0.08;

    }
    else if (estado=="UT")
    {
        total  = total + total * 0.0665;

    }
    else if (estado=="AL")
    {
        total  = total + total * 0.04;

    }
    return total;
  }

  
  export default impuestos;
  