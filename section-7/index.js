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
