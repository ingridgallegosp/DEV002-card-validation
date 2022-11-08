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

   // se realizan las operacion de validacion//

    // resultado true or false
    let resultadoValidacion = validator.isValid(valorObtenido)
    let resultadoMask = validator.maskify(valorObtenido)

    if(resultadoValidacion){ //true
        //alert("TARJETA VALIDA");
        alert("LA TARJETA " + resultadoMask + " ES VÁLIDA")
        alert("SUSCRIPCIÓN CONFIRMADA")
        } else { // false
          alert("LA TARJETA INGRESADA NO ES VALIDA");
        }

    };
