const friends = ['Jhon', 'James', 'Jim', 'Kelso'];

// START

// function greet(greeting, name){
//     return `${greeting}, ${name}`
// }

// console.log(greet('Good Morning', 'Ce'))

// const friendsGreetings = friends.map(friend => {
//     return greet('Good morning', friend)
// })

// console.log(friendsGreetings)

// GOING ON

function greet(greeting){
    return (name) => `${greeting}, ${name}`
        
    
}

console.log(greet('Good Morning')('Lilith'));

const friendsGreetings = friends.map(greet('Good Morning'));

console.log(friendsGreetings);  







