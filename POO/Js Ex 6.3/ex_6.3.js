console.log("Hello world!");

// EX.6.3 (Задача №3 - Основы ООП)

/* Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), 
surname (фамилия), rate (ставка за день работы), days (количество отработанных дней). 
Также класс должен иметь метод getSalary(), который будет выводить зарплату работника. 
Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.

Вот так должен работать класс:

var worker = new Worker('Иван', 'Иванов', 10, 31);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.rate); //выведет 10
console.log(worker.days); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31
С помощью класса, создайте двух рабочих и найдите сумму их зарплат. */

class Worker{
    constructor(){
        this.name = "Bazaochi";
        this.surname = "Dumitru";
        this.rate = 10;
        this.days = 31;
    }
    
    getSalary(){
        return this.rate * this.days;
    }
}

class Worker1{
    constructor(){
        this.name = "John";
        this.surname = "Doe";
        this.rate = 8;
        this.days = 25;
    }
    
    getSalary(){
        return this.rate * this.days;
    }
}

let worker = new Worker();
console.log("Primul lucrator: ")
console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days); 
console.log(worker.getSalary());

let worker1 = new Worker1();
console.log("Al doilea lucrator: ")
console.log(worker1.name);
console.log(worker1.surname);
console.log(worker1.rate);
console.log(worker1.days); 
console.log(worker1.getSalary());