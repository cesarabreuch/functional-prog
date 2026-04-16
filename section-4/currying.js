// Functional Programming for Beginners Excercise

// create the code to go from studentGrades array, 
// to studentFeedback (as shown in comments below)

const studentGrades = [ 
  {name: 'Joe', grade: 88},
  {name: 'Jen', grade: 94},
  {name: 'Steph', grade: 77},
  {name: 'Allen', grade: 60},
  {name: 'Gina', grade: 54},
{name: 'James', grade:98}
];


/*
const studentFeedback = [
  'Nice Job Joe, you got an b',
  'Excellent Job Jen, you got an a',
  'Well done Steph, you got an c',
  'What happened Allen, you got an d',
  'Not good Gina, you got an f',
]; 
*/

/*
OLD VERSION (kept for learning/reference):

function gradeMapper(grade){
    if(grade >= 90){
        return 'a'
    } else if(grade >=80){
        return 'b'
    } else if(grade >=70){
        return 'c'
    } else if(grade >=60){
         return 'd'
    } else {
         return 'f'
    }
}

function messageMapper(grade){
    if(grade >= 90){
        return 'Excellent job'
    } else if(grade >=80){
        return 'Nice job'
    } else if(grade >=70){
        return 'Well done'
    } else if(grade >=60){
         return 'What happened'
    } else {
         return 'Not good'
    }
}

function message(name){    
    return function(grade){
        return `${messageMapper(grade)} ${name}, you got an ${gradeMapper(grade)}`    
    } 
}

function feedback(studentGrade){
    const {grade, name } = studentGrade;
    return message(name)(grade)
}

const studentFeedback = studentGrades.map(feedback);
console.log(studentFeedback);
*/

// NEW VERSION: fully curried message builder + cleaner mapping functions
const gradeMapper = grade => {
  if (grade >= 90) return 'a';
  if (grade >= 80) return 'b';
  if (grade >= 70) return 'c';
  if (grade >= 60) return 'd';
  return 'f';
};

const messageMapper = grade => {
  if (grade >= 90) return 'Excellent Job';
  if (grade >= 80) return 'Nice Job';
  if (grade >= 70) return 'Well done';
  if (grade >= 60) return 'What happened';
  return 'Not good';
};

// Currying: one argument per function call
const message = messageText => name => gradeLetter =>
  `${messageText} ${name}, you got an ${gradeLetter}`;

const feedback = ({ name, grade }) =>
  message(messageMapper(grade))(name)(gradeMapper(grade));

const studentFeedback = studentGrades.map(feedback);

console.log(studentFeedback);
