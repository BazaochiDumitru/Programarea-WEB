console.log("Hello world!");

// EX.6.2 (Задача №2 - Основы ООП)

/* Реализуйте класс Person, который будет иметь следующие свойства: name (имя), surname (фамилия). 
Необходимо понять что getter и setter класса и использовать их.

Вот так должен работать класс:

var worker = new Person('Иван', 'Иванов');

console.log(worker.getName()); //выведет 'Иван'
console.log(worker.getSurname()); //выведет 'Иванов'
console.log(worker.setSurname('Петров')); //выведет 'Иванов'
console.log(worker.getSurname()); //выведет 'Петров' */

class Person {
    constructor(name, surname){
        this._name = name;
        this._surname = surname;
    }

    getName(){
        return this._name;
    }

    getSurname(){
        return this._surname;
    }

    setSurname(value){
        return this._surname = value;
    }
}

let person = new Person('Bazaochi', 'Dumitru');
console.log(person.getName());
console.log(person.getSurname());
console.log(person.setSurname("Dima"));
console.log(person.getSurname());