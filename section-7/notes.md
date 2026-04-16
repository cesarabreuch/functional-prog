# Section 7 notes

## Counter App

### Requerimientos minimo

- Un texto que diga: "Counter" seguido del valor, que sera cambiado.
- Un boton con el texto "+" que aumente el valor de "Counter"
- Un boton con el texto "-" que disminuya el valor de "Counter"

### Requerimiento tecnico

- Usar mayormente funciones puras
- No tener side effects (en este caso si hay, pero de forma controlada)

### Evidencia de avance

#### Version que no funcionaba

```js
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const counterValue = document.getElementById('counter-value');

function increment(nodeElement){
    return function(value){
        return Number(counterValue.innerText) + value
    }
}

function decrement(nodeElement){
    return function(value){
        return Number(counterValue.innerText) - value
    }
}

const pepe1 = ()=> increment(counterValue);
const pepe2 = ()=> decrement(counterValue);

incrementBtn.addEventListener('click', pepe1(1));
decrementBtn.addEventListener('click', pepe2(1));
```

#### Version final (funcional)

```js
const incrementBtn = document.getElementById('increment-btn');
const decrementBtn = document.getElementById('decrement-btn');
const counterValue = document.getElementById('counter-value');
    

function updateCounter(currentValue){
    return function(delta){
        return currentValue + delta;
    };
}

function updateNodeCounter(nodeElement){
    return function(value){
        return function(event){ // this is for event handler function
            const currentValue = Number(nodeElement.innerText) || 0;
            nodeElement.innerText = updateCounter(currentValue)(value);
        };
    };
}

const incrementCounterByOne = updateNodeCounter(counterValue)(1);
const decrementCounterByOne = updateNodeCounter(counterValue)(-1);

incrementBtn.addEventListener('click', incrementCounterByOne);
decrementBtn.addEventListener('click', decrementCounterByOne);
```

#### Resumen muy breve

- Primero habia funciones currificadas, pero el evento y la actualizacion del DOM estaban mal conectados.
- Despues se corrigio el callback del `addEventListener` para que el contador respondiera al click.
- Al final se unifico en una funcion generica para sumar/restar y se dejo mas clara la separacion entre calculo y efecto en DOM.

### Side effects y manejo de estado

#### Que es un side effect en este ejemplo

- Leer del DOM (`nodeElement.innerText`) es un side effect porque depende del mundo externo.
- Escribir en el DOM (`nodeElement.innerText = ...`) es un side effect porque cambia el mundo externo.
- Registrar eventos (`addEventListener`) tambien es side effect.

#### Como se manejan bien en programacion funcional

- La parte de calculo debe ser pura: misma entrada, misma salida.
- En este caso, la funcion de calculo suma/resta y devuelve el nuevo valor sin tocar el DOM.
- Los side effects se dejan en el borde (event handler), en un lugar pequeno y controlado.

#### Manejo de estado en este contador

- El estado actual vive en el valor mostrado en pantalla.
- Flujo recomendado:
  1. Leer estado actual.
  2. Calcular nuevo estado con funcion pura.
  3. Persistir nuevo estado en el DOM.
- Esto permite separar reglas de negocio (calculo) de infraestructura (UI/DOM).
