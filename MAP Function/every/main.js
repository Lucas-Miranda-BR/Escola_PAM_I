const numbers = [1, 34, 32194, 2, 500, 123];

const positiveNumbers = numbers.every(number => number > 0);
console.log(positiveNumbers);

const names = ["Itsuni", "Maiko", "May"];
const longerThan3 = names.every(name => name.length > 3);
console.log(longerThan3);

const students = [
    {
        name: "Ash",
        inCourse: true
    },
    {
        name: "Rose",
        inCourse: true
    }
];

const isInCourse = students.every(student => student.inCourse);
console.log(isInCourse)