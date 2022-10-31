import validator from './validator.js';

console.log(validator);

    document.getElementById('Formulario').onsubmit = function(event){
        event.preventDefault()
        //evitar que la pagina se recargue por completo
        //evento submit en formulario recarga la pagina
    }

    //pedir numero y hacer clic en el boton
    document.getElementById("botonValidar").onclick = 
    function (){
    
    //almacenar valor en variable
    let valorObtenido = document.getElementById("cardNumber").value;
    console.log(valorObtenido)

    //colocar elementos en array
    let valorTarjeta = Array.from(valorObtenido);
    console.log(valorTarjeta)

    //colocar en reversa el valor 
    let tarjetaInvertida = valorTarjeta.reverse();
    console.log(tarjetaInvertida);

    /*filtrar numeros >5 FUNCIONA
    //let numerosPares = tarjetaInvertida.filter(tarjetaInvertida => tarjetaInvertida > 5 );
    //console.log(numerosPares); se desglosa abajo
    
    let mayoraCinco = tarjetaInvertida.filter(
    function (tarejtaInvertida) {
        return tarjetaInvertida>5 ;
        });
    console.log(mayoraCinco);*/


    // para tarjetaInvertida, si (index+1) % 2 === 0    //entonces ejecuta la función x*2

    /*let ubicarPares = tarjetaInvertida.filter((elemento, index, tarjetaInvertida) => { 
        return ((index+1) %2 === 0) ;
    });
    console.log (ubicarPares);*/

    
let ubicarPares = tarjetaInvertida.map((elemento, index, tarjetaInvertida) => { 
       // return ((index+1) %2 === 0) ;

        if ((index+1)%2===0){
            return elemento*2
        }else{
            return elemento
        }
    });
    console.log (ubicarPares);


    };
