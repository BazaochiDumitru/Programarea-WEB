console.log("Hello world!");

// EX.6.5 (Задача №5 - Наследование)

/* Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это 
сделано в теоретической части урока. Этот класс должен иметь следующие свойства: name (имя, наследуется от User), 
surname (фамилия, наследуется от User), year (год поступления в вуз). Класс должен иметь 
метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента. 
Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5). 
Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно.

Вот так должен работать наш класс:
var student = new Student('Иван', 'Иванов', 2018);

console.log(worker.name); //выведет 'Иван'
console.log(worker.surname); //выведет 'Иванов'
console.log(worker.getFullName()); //выведет 'Иван Иванов'
console.log(worker.year); //выведет 2018
console.log(worker.getCourse()); //выведет 3 - третий курс, так как текущий год 2021 
class User {
	constructor(name, surname) {
		this.name = name;
		this.surname = surname;
	}

	getFullName() {
		return this.name + '  ' + this.surname;
	}
} */

class User{
    constructor(name, surname, year){
        this._name = name;
        this._surname = surname;
        this._year = year;
    }

    getFullName() {
		return `${this._name} ${this._surname}`;
	}

    getCourse(){
        let today = new Date();
        let currentyear = today.getFullYear();
        return currentyear - this._year;
    }
}

class Student extends User{
    constructor(name, surname, year){
        super();
        this._name = name;
        this._surname = surname;
        this._year = year;
    }
}

const user = new User('Bazaochi', 'Dima', 2019);
console.log(user);

const student = new Student('Bazaochi', 'Dumitru', 2019);
console.log(student);
console.log(student._name); 
console.log(student._surname); 
console.log(student.getFullName()); 
console.log(student._year);
console.log(`Cursul ${student.getCourse()}`);

