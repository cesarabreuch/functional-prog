const randomGrades = ()=> Math.round(100 * Math.random());

const studentGrades = [
    {name: "Jim", grade: randomGrades()},
    {name: "Jhon", grade: randomGrades()},
    {name: "Peter", grade: randomGrades()},
    {name: "Charles", grade: randomGrades()},
    {name: "Eugene", grade: randomGrades()},
    {name: "Sofia", grade: randomGrades()},
]


// over 80 Nice job, over 90 Excellent, over 70 Well done, over 60 what happened, below 60 not good


function messageToStudent(student) {
    if(student.grade < 60){
        return `Not Good ${student.name}, you got an ${student.grade}`
    }
    if(student.grade > 60 && student.grade < 70){
        return `What happened ${student.name}, you got an ${student.grade}`
    }
    if(student.grade > 70 && student.grade < 80){
        return `Well done ${student.name}, you got an ${student.grade}`
    }
    if(student.grade > 80 && student.grade <= 90){
        return `Nice job ${student.name}, you got an ${student.grade}`
    }
    return `Excellent Job ${student.name}, you got an ${student.grade}`
}

const studentFeedback = studentGrades.map(messageToStudent)

console.log(studentFeedback)



