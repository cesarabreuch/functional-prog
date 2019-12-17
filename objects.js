const meal = {
    id: 1,
    description: 'lunch'
}


// spread operator ...

const updatedMeal = {
    ...meal,
    calories: 660
}

console.log(meal, updatedMeal); // no data has mutated.