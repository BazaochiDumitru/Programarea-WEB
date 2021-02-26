console.log("Hello world!");

// EX.3.2 (Задача №2 - обработка массива)

// Создать массив который содержит минимум 5 учеников (алгоритм должен работать для любого количества учеников) и их оценки (минимум 4 оценки)

/* Написать следующие функции обработки этого массива: 
1.	считает среднюю оценку и выводит имя и среднюю оценку для каждого элемента массива
2.	выводит учеников у которых средняя оценка < 5
3.	находит учеников с максимальной и минимальной оценкой
4.	сортирует учеников по средней оценке по убыванию (с самой большой средней в начале, с наименьшим в конце списка)
5.	выводит тех учеников чья средняя оценка больше средней оценки всего класса */

let students = [
    {
        name: "Maksim",
        marks: [5, 4, 3, 4, 3]
    },
    {
        name: "Vlad",
        marks: [10, 9, 8, 7, 6]
    },
    {
        name: "Andrei",
        marks: [9, 9, 9, 8, 8]
    },
    {
        name: "Victor",
        marks: [10, 7, 6, 9, 5]
    },
    {
        name: "Dumitru",
        marks: [9, 8, 8, 9, 10]
    }
];

const marksAverage = [];


// 3.2(a)
const nameAverage = () => {
for (const person of students) {
    console.log(person.name);
    marksAverage.push(person.marks.reduce((accumulator, currentValue) => accumulator + currentValue) / person.marks.length);
    console.log(person.marks);
}

};
nameAverage();
console.log("===============================");
console.log("Students' average marks are:");
console.log(marksAverage[0]);
console.log(marksAverage[1]);
console.log(marksAverage[2]);
console.log(marksAverage[3]);
console.log(marksAverage[4]);
console.log("===============================");

// 3.2(b)

lowerAverage = () => {
for (const person of students) {
    let average = person.marks.reduce((accumulator, currentValue) => accumulator + currentValue);
    if (average / person.marks.length < 5) {
        console.log("The student with the average mark less than 5 is: ");
        console.log(person.name);
    }
}
};

lowerAverage();
console.log("===============================");


// 3.2(c)
marksAverage.sort((a, b) => a - b);
console.log("Min average is:", Math.min(...marksAverage));
console.log("Max average is:", Math.max(...marksAverage));
console.log("===============================");


// 3.2(d)
marksAverage.sort(function(a, b){return b - a});
console.log("There are the students marks in descending order: " + marksAverage);
console.log("===============================");


// 3.2(e)
classAverage = () => {
let average = 0;
for (const person of students) {
    average += studentAverage(person.marks);
}
return average / students.length
};

studentAverage = array => {
return array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0) / array.length;
};

higherAverage = (average) => {
console.log("The group's average is: ")
console.log(average);
console.log("===============================");
console.log("The students with the average mark bigger than group average are: ");
for (const person of students) {
    studentAverage(person.marks) > average ? console.log(person.name) : 0;
}
};

higherAverage(classAverage());