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

    // funcion filter()
    /*let ubicarPares = tarjetaInvertida.filter((elemento, index, tarjetaInvertida) => { 
        return ((index+1) %2 === 0) ;
    });
    console.log (ubicarPares);*/ // el resultado es un array solo con los elementos que cumplen la condicion

    // para tarjetaInvertida, si (index+1) % 2 === 0, entonces ejecuta la función x*2

    let ubicarPares = tarjetaInvertida.map((element, index, tarjetaInvertida) => { 
        if ((index+1)%2===0){
            return element*2
        }else{
            return element*1 //para convertir el string en numero
        }
    });
    console.log (ubicarPares); //map me permite crear un nuevo array , igual numero de elementos, modificando los q si cumplen la condicion

    
    //sumar digitos en ubicacion par lenght > 1

    let cardNumberSuma = ubicarPares.map((element, index, ubicarPares) => { 
        if ((index+1)%2===0) {     
            var suma = 0;
            do{ 
                suma = suma + (element % 10);
                element = Math.floor(element/10);
            } while 
                (element > 0) //a veces con = y a veces con >
            return suma
        }else{
            return element
        }
    });
    console.log (cardNumberSuma); 

    
    //sumar todos digitos


     // EJERCICIOS OH
    // function getDay(){
    //     return new Date()
    // }

    //const getDay = () => new Date() // HDF543x24

    // const getDay = () => {
    //    return  new Date()
    // }

    // const x = 5 

    // var ref = ()=>null, {}, []


    // console.log(getDay);
    // console.log(getDay());

    
    
    //sumar todos digitos

   /*let totalSuma = (element,cardNumberSuma) => { 
            let suma2 = 0;
            var i ;
            for ( i = 0;  i < 16 ; i++) { 
            suma2 += element;
             }; 
             return suma2;
    };
    console.log(totalSuma()); //NaN */

    let totalSuma = cardNumberSuma.reduce((a, b) => { return a + b; }
    );
    console.log(totalSuma)

   
    //comprobar si es correcto (x % 10 = 0)

    if (totalSuma % 10 === 0) { 
        //alert("TARJETA VALIDA");
        document.write("SUSCRIPCIÓN CONFIRMADA")
        } else {
          alert("LA TARJETA INGRESADA NO ES VALIDA");
        }; 

    };
