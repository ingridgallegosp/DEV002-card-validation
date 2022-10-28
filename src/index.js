import validator from './validator.js';

//console.log(validator);


    //pedir numero y hacer clic en el boton
    document.getElementById("botonValidar").onclick = 
    function (){
    
    //almacenar valor en variable
    let valorInput = document.getElementById("cardNumber").value;
    console.log(valorInput)

    //colocar elementos en array
    let valorInputArr = Array.from(valorInput);
    console.log(valorInputArr)

    //colocar en reversa el valor 
    let inputInverso = valorInputArr.reverse();
    console.log(inputInverso);

   
    //filtrar numeros >5 FUNCIONA

    //let numerosPares = inputInverso.filter(inputInverso => inputInverso > 5 );
    //console.log(numerosPares);


    };
