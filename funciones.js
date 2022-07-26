
let vehiculo;

    vehiculo = parseInt(prompt("elija el vehiculo: \n1) fiat\n 2) ford"));


    if (vehiculo == 1)
    {
    catalogoFiat();
    }

    else if (vehiculo == 2)
    {
    catalogoFord();
    }

    else

    {
    console.log ("no es valido el valor ingresado");
   
    }


function catalogoFiat()
{
    console.log("novoUno $1.520.000\n ducato $9.450.500\n cronos $3.620.230\n palio $2.000.500\n siena $2.500.000\n pulse $3.600.000\n toro $4.820.000\n mobi $3.000.000\n fiorino $2.500.000\n strada $3.000.000\n ");
}

function catalogoFord()
{
    console.log("focus $3.200.000\n fiesta $2.500.000\n kuga $9.900.000\n mondeo $5.500.000\n ecoSport $4.000.000\n ranger $12.000.000\n bronco $6.300.000\n raptor $18.000.000\n maverickv $6.300.000\n territory $7.300.500");

}