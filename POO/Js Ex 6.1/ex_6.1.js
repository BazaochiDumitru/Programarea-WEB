console.log("Hello world!");

// EX.6.1 (Задача №1 - Основы ООП)

/* Реализуйте класс Person, который будет иметь следующие свойства: name (имя), surname (фамилия). Необходимо понять что такое конструктор класса и использовать его.

Вот так должен работать класс:

var worker = new Person('Иван', 'Иванов');

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов' */

/* class Person {
    constructor(){
        this.name = "Bazaochi";
        this.surname = "Dumitru";
    }
}

let person = new Person();
console.log(person.name);
console.log(person.surname); */

class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

let person = new Person('Bazaochi', 'Dumitru');
console.log(person.name);
console.log(person.surname);