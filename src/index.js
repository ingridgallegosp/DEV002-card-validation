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
    //console.log(numerosPares); se desglosa abajo
    
    /*let mayoraCinco = inputInverso.filter(
    function (inputInverso) {
        return inputInverso>5 ;
        }
        );
    console.log(mayoraCinco);*/


    // para input inverso, si (index+1) % 2 entonces ejecuta la función x*2
    
    let indexPares = inputInverso.filter(
        function (inputInverso) {
            return inputInverso*2 ;
            }
            );
        console.log(indexPares);


     let numerosimpares =inputInverso.filter(inputInve);*/

// concat() une dos o más arreglos y devuelve un nuevo arreglo.
    };
