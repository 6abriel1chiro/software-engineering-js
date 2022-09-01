function descuentos(total) {

    if (total>=1000 && total <3000){

         total  = total + total * 0.03;
    }else if (total>=3000 && total<7000)
    {
        total  = total - total * 0.05;

    }
    else if (total>=7000 && total<10000)
    {
        total  = total - total * 0.07;

    }
    else if (total>=10000 && total<30000)
    {
        total  = total - total * 0.1;

    }
    else if (total>=30000)
    {
        total  = total - total * 0.15;

    }
    console.log(total);
    return total;
  }
  

  function tipoDescuento(total) {

    if (total>=1000 && total <3000){

        return 3;
    }else if (total>=3000 && total<7000)
    {
        return 5;

    }
    else if (total>=7000 && total<10000)
    {
        return 7;

    }
    else if (total>=10000 && total<30000)
    {
        return 10;

    }
    else if (total>=30000)
    {
        return 15;

    }    else{return 0;}

  }
  export { descuentos, tipoDescuento};
  