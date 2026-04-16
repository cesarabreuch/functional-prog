// TODO
// 1. Average grade
// 2. How many A's B's, C's, D's, F's...
// NOTE: Use only reduce


const grades = [60, 55, 80, 90, 99, 92, 75, 72];


const gradeSum = grades.reduce(sum);

function sum(acc, current) {
    return acc + current
}

const totalAverage = gradeSum / grades.length





const groupGrades = grades.reduce(groupByGradeOpt2, {});

// Option 1
function groupByGrade(acc, grade) {
    const { a = 0, b = 0, c = 0, d = 0, f = 0 } = acc;

    if (grade >= 90) {
        return { ...acc, a: a + 1 }
    }
    if (grade >= 80) {
        return { ...acc, b: b + 1 }
    }
    if (grade >= 70) {
        return { ...acc, c: c + 1 }
    }
    if (grade >= 60) {
        return { ...acc, d: d + 1 }
    }
    return { ...acc, f: f + 1 }
}

function groupByGradeOpt2(acc, grade){
    acc['a'] = 0;
    acc['b'] = 0
    if(grade >=90){
        acc['a'] = acc['a']+ 1;
        return acc;
    } else {
        acc['b'] = acc['b'] + 1;
            return acc;
    }
}

console.log(totalAverage) // 1
console.log(groupGrades) // 2