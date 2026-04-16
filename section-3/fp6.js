// Excercise fp6

const reviews = [4.5, 4.0, 5.0, 2.0, 1.0, 5.0, 3.0, 4.0, 1.0, 5.0, 4.5, 3.0, 2.5, 2.0];

// 1. Using the reduce function, create an object that
// has properties for each review value, where the value
// of the property is the number of reviews with that score.
// for example, the answer should be shaped like this:
// { 4.5: 1, 4: 2 ...}


const groupByReviews = reviews.reduce(groupByReview, {});

function groupByReview(acc, review) {
    if (!acc[review]) {
        acc[review] = 1
    } else {
        acc[review] = acc[review] + 1;
    }
    return acc;
}
//console.log(groupByReviews);




// Group fruits
const fruitBasket = ['banana', 'cherry', 'orange', 'apple', 'cherry', 'orange', 'apple', 'banana', 'cherry', 'orange', 'fig'];
    


const groupFruits = fruitBasket.reduce((acc, fruit)=>{
    if(!acc[fruit]){
        acc[fruit]= 1
    } else{
        acc[fruit] = acc[fruit] + 1
    }
    return acc
    
}, {});

    
// Total calories
const meals = [
    { id: 1, description: 'breakfast', calories: 690 },
    { id: 2, description: 'lunch', calories: 1024 },
    { id: 3, description: 'dinner', calories: 200 },
    { id: 4, description: 'quick snack', calories: 120 }
];
    
const totalCalories = meals.reduce((acc, meal)=> {
    return acc.calories ? acc.calories + meal.calories : acc + meal.calories
})

console.log({groupFruits, totalCalories})

