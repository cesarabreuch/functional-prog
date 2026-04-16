function greet(greeting){
    return function(name){
        return `${greeting}, ${name}`
    }
}

const morningGreet = greet('Good Morning');
const afternoonGreet = greet('Good Afternoon');
const eveningGreet = greet('Good evening');
    

console.log(morningGreet('Chapulin'));
console.log(afternoonGreet('Chapulin'));
console.log(eveningGreet('Chapulin'));