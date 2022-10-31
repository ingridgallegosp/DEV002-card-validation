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
            return element
        }
    });
    console.log (ubicarPares); //map me permite crear un nuevo array , igual numero de elementos, modificando los q si cumplen la condicion

    
    //sumar digitos lenght > 1

    let cardNumberSuma = ubicarPares.map((element, index, ubicarPares) => { 
       // if (element.lenght > 1){
        if ((index+1)%2===0){
            var suma = 0; 
            while (element > 0){
            suma = suma + (element % 10);
            element = element / 10 ;
            }         
        }else{
            return element
        }
        
    });
    console.log (cardNumberSuma);
 


    
    //sumar todos digitos
    //let totalSuma = 0
// funtcion sumar
/*const numeros = [100, 300, 500, 70];
let suma = 0;

for (let n of numeros) {
	suma += n;
}

console.log(suma);
*/

    };
