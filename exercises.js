// Simple problems to solve using the native .reduce and .map array methods. Each of these problems can be solved in many
// different ways, but try to solve them using the requested higher order function.

// MAP

// Write a function capitalize that takes a string and uses .map to return the same string in all caps. 
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"

var word = 'hey gurl, lets javascript together sometime';

var capitalize = function(string) {
    return string.split(' ')
        .map((val) => val.toUpperCase());
}

console.log(capitalize(word));


// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize() 
// function to return a string where every other word is in all caps. 
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take. 
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"
var swapCase = function(string) {
    return capitalize(string).map((value, index) => {
        if (index % 2 !== 0) {
            return value.toLowerCase(index).toString();
        } else {
            return value;
        }
    });
}

console.log(swapCase(word));

// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the 
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"
var word2 = 'hola';
var shiftLetters = function(string) {
    return [...string].map(val => String.fromCharCode(val.charCodeAt(0) + 1));
}

console.log(shiftLetters(word));
// REDUCE

// Write a function that takes a string and returns an object representing the character 
// count for each letter. Use .reduce to build this object. 
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}
var word3 = 'abbcccddddeeeee';
var countLetters = function(string) {
    return [...string].reduce((total, letter) => {
        if (!total[letter]) {
            total[letter] = 1
        } else {
            total[letter] = total[letter] + 1;
        }
        return total;
    }, {})
};

console.log(countLetters(word3));

// Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use
// .reduce to acomplish this.
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false
var isPresent = function(string, target) {
    return [...string].reduce((total, letter) => {
        if (letter === target) {
            total = true
        }
        return total
    }, false);
}
console.log(isPresent('abcgfd', 'd'));

// PARTY WITH MAP AND REDUCE *AT THE SAME TIME*

// Write a function decode that will take a string of number sets and decode it using the following rules:
// When each digit of each set of numbers is added together, the resulting sum is the ascii code for a single letter.
// Convert each set of numbers into a letter and discover the secret message! 
// Try using map and reduce together to accomplish this task.
// ex. decode("361581732726247521644353 4161492813593986955 84654117917337166147521") // => "abc"
// ex. decode("584131398786538461382741 444521974525439455955 71415168525426614834414214 353238892594759181769 48955328774167683152 77672648114592331981342373 5136831421236 83269359618185726749 2554892676446686256 959958531366848121621517 4275965243664397923577 616142753591841179359 121266483532393851149467 17949678591875681")
// => "secret-message"
var secretCode = "361581732726247521644353 4161492813593986955 84654117917337166147521";
var decode = function(string) {
    return [...string].reduce((total, numero) => {
        return total + numero;
    })
}

console.log(typeof decode(secretCode));

// Once you successfully write a decoding function, use it to decode this secret message!