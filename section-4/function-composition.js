// Count how many digits there are in the following 
// sentence, using functional composition

// NOTE: If you get stuck, you can get some hints from 
// the following jsbin: 
// https://jsbin.com/jokefus/2/edit?js,console
// my solution is here: https://jsbin.com/duxewec/1/edit?js,console




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

console.log('with pipe',numbersInString(sentence));
console.log('with compose',numbersInString(sentence));




// Composition

// 1 split
// 2 filter
// count


function split(phrase){
    return [...phrase]
}

function filterNumbers(splittedWords){
    const numbers =[]
    for(let i = 0; i < splittedWords.length; i++){
        if(splittedWords[i] !== ' '){
            if(!isNaN(splittedWords[i])){
            numbers.push(splittedWords[i])
            }
        }
    }
    return numbers;
}

function countNumbers(numbers){
    return numbers.length
}
// This is not a composition but a manually nested function call
const count = (phrase) => countNumbers(filterNumbers(split(phrase)))

console.log('manually nested function call => ',count(sentence))