# Section 4 Notes


## Currying

Se convierten los parametros que recibe una funcion y se retornan como funciones dentro de la funcion

El orden de los parametros importa! El parametro general va primero y luego el especifico, por ejemplo:


``` javascript

// function before curried
function greet(greet, name){
    return `${greet}, ${name}`;
}

// function curried
function greet(greet){
    return function(name){
        return `${greet}, ${name}`
    }
}

// runs like this

greet('good morning')('Jhon');

// partially applied

const morningGreet = greet('Good morning');

morningGreet('Jhon') // same result as greet('Good morning')('Jhon')

```
En este caso, `greet` es la variable general y `name` es especifico, tambien porque `name` es el ultimo valor que recibira la funcion 


### High Order Functions

- Funciones que reciben una funcion como parametro
- Funciones que retornan una funcion

Cualquiera que se cumpla, se convierte en una HOF


## Pure & Impure functions

### Pure functions

Retornan valores basados en inputs (argumentos) sin crear efectos secundarios. Tampoco dependen de variables externas para modificar su estado.

### Impure functions

Son funciones que no retornan nada (tambien llamadas procedimientos) y que modifican valores fuera de su contexto de ejecucion

## Partial application

Va de la mano con funciones curried. Esto quiere decir que se utiliza la funcion general (Currying) y se ejecuta por partes especificas 


## Function composition

Hay dos conceptos diferentes aqui. El primero es **compose** que va ejecutando las funciones de derecha a izquierda y esta el **pipe** que va ejecutando de izquierda a derecha.


``` javascript

const sentence = 'PechaKucha is a presentation style in which 20 slides are shown for 20 seconds each (6 minutes and 40 seconds in total).';


// the order here is:
const getChars = (str) => str.split(''); // split characters as array (1)
const onlyDigits = (chars) => chars.filter(c => !isNaN(c) && c !== ' '); // filter only digits (2)
const counter = (arr) => arr.length; // length of the filtered array (3)

// pipe applies functions left-to-right:
// reduce starts with `value`, then passes it through each function in sequence
const pipe = (functions) => (value) => {
    return functions.reduce((acc, curr) => curr(acc), value);
};

// compose applies functions right-to-left: 
const compose = (functions) => (value) =>{
return functions.reduceRight((acc, curr) => curr(acc), value)
}

const numbersInString2 = compose([counter, onlyDigits, getChars])

const numbersInString = pipe([getChars, onlyDigits, counter]);

```