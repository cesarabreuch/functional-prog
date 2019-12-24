const meals = [
    { id: 1, description: 'breakfast', calores: 690 },
    { id: 2, description: 'lunch', calores: 1024 },
    { id: 3, description: 'dinner', calores: 200 }
];
console.log(meals);

const meal = { id: 4, description: 'quick snack', calories: 120 }

const updatedMeals1 = [meals, meal];
const updatedMeals2 = [...meals, meal];

console.log(updatedMeals1);
console.log(updatedMeals2);

const updatedMeal2 = updatedMeals2.map((val) => {
    if (val.id === 2) {
        val.description = 'fast lunch';
    }
    return val;
});

// returns just one that matches
// const removeMeal = updatedMeals2.filter((val) => val.id == 1);
// returns excluded one that matches
const removeMeal = updatedMeals2.filter((val) => val.id !== 1);

console.log(removeMeal);
console.log(updatedMeal2);

// ##########################################################################

const numbers = [1, 2, 3, 4];

const numbers2 = [];
for (let i of numbers) {
    i = i * 2;
    numbers2.push(i);
}
console.log(numbers2);

function double(numbers) {
    const newNumber = [];
    for (let i of numbers) {
        newNumber.push(i * 2);
    }
    return newNumber;
}

const numbersMap = numbers.map((val) => val * 3);
console.log(numbersMap);

console.log(double(numbers2));

// ##########################################################################

const friends = ['anastasia', 'juancita'];
const updatedFriends = [...friends, 'nicanor'];
const friendsNameLengths = updatedFriends.map((val) => val.length);
const maxLengthName = Math.max(...friendsNameLengths);
const shorterNamedFriends = updatedFriends.filter((val) => {
    return val.length < maxLengthName;
});
console.log(friends);
console.log(updatedFriends);
console.log(friendsNameLengths);
console.log(shorterNamedFriends);


// ##########################################################################

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4: 2 ...}

const reviewCounts = reviews.reduce((total, review) => {
    const count = total[review] || 0;
    return {
        ...total,
        [review]: count + 1
    }
}, {});
console.log(reviewCounts);

const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];

// const count = fruitBasket.reduce((tally, fruit) => {
//     tally[fruit] = (tally[fruit] || 0) + 1;
//     return tally;
// }, {});

const initialValue = {};

const reducer = function(total, item) {
    if (!total[item]) {
        total[item] = 1
    } else {
        total[item] = total[item] + 1
    }

    return total;
}

const total = fruitBasket.reduce(reducer, initialValue);

console.log(total);

// TODO: https://egghead.io/lessons/javascript-reduce-an-array-into-a-single-object