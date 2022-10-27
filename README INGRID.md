# Tarjeta de crédito válida

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Pistas, tips y lecturas complementarias](#6-pistas-tips-y-lecturas-complementarias)

***

## 1. PREAMBULO

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),
también llamado algoritmo de módulo 10, es un método de suma de verificación,
se utiliza para validar números de identificación; tales como el IMEI de los
celulares, tarjetas de crédito, etc.

Este algoritmo es simple. Obtenemos la reversa del número a verificar (que
solamente contiene dígitos [0-9]); a todos los números que ocupan una posición
par se les debe multiplicar por dos, si este número es mayor o igual a 10,
debemos sumar los dígitos del resultado; el número a verificar será válido si
la suma de sus dígitos finales es un múltiplo de 10.

![gráfica de algoritmo de Luhn](https://www.101computing.net/wp/wp-content/uploads/Luhn-Algorithm.png)

## 2. TO DO GENERAL

Partiendo del To Do propuesto en los Tips y Primeros pasos del proyecto:
[Pistas y tips Laboratoria](https://www.youtube.com/watch?v=f0zL6Ot9y_w)

- [ ] **Preguntar el numero de tarjeta**
- [ ] **Pasar números a un array inverso**
- [ ] **Aplicar operación a números en posición par**
- [ ] **Sumar dijitos y nuevos digitos**
- [ ] **Comprobar si es válido**

Realice un alcance con subtareas a cumplir en cada actividad propuesta: 

- [ ] **Preguntar el numero de tarjeta**
     - Prototipo básico b&w de la aplicación web CARD VALIDATION.
     ![maqueta basica blanco y negro](MAQUETASIMPLE.jpg)
     - Estructura HTML basada en el prototipo
        #### Imagen señalando ubicación del numero solicitado (PENDIENTE)
        Input type=text inputmode=numeric para escribir el numero de tarjeta
        Botón para enviar la información
     - Almacenar numero obtenido en Variable
     - Convertir número en Array

- [ ] **Pasar números a un array inverso**

- [ ] **Aplicar operación a números en posición par**
- [ ] **Sumar dijitos y nuevos digitos**
- [ ] **Comprobar si es válido**

SIGUIENTES PASOS
- [ ] **Ocultar digitos y dejar visible los ultimos 4 **
- [ ] **Mejorar maqueta basica **
- [ ] **Agregar estilos **
- [ ] **Maqueta avanzada con Figma?**











## 3. Objetivos de aprendizaje

Reflexiona y luego marca los objetivos que has llegado a entender y aplicar en tu proyecto. Piensa en eso al decidir tu estrategia de trabajo.

### HTML

- [ ] **Uso de HTML semántico**

  <details><summary>Links</summary><p>

  * [HTML semántico](https://curriculum.laboratoria.la/es/topics/html/02-html5/02-semantic-html)
  * [Semantics - MDN Web Docs Glossary](https://developer.mozilla.org/en-US/docs/Glossary/Semantics#Semantics_in_HTML)
</p></details>

