console.log("Hello world!");

// EX.6.4 (Задача №4 - статические методы)

/* Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail 
параметром принимает строку и проверяет, является ли она корректным емейлом или нет. Если является - возвращает 
true, если не является - то false. Кроме того, класс будет иметь следующие методы: метод isDomain для 
проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона:

var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDate('12.05.2020')); */

class Validator {
  constructor(email, date, domain, phone) {
    this.email = email;
    this.date = date;
    this.domain = domain;
    this.phone = phone;
  }

  emailType = /\S+@\S+\.\S+/;
  domainType = /\S+\.\S+/;
  dateType = /^[0-9]{1,2}\.[0-9]{1,2}\.[0-9]{1,4}$/;
  phoneType = /^\+?[0-9]{3}-?[0-9]{6,12}$/;

  isEmail() {
    if (this.emailType.test(this.email)) {
      return "Right Email";
    }
    return "Error";
  }

  isDomain() {
    if (this.domainType.test(this.domain)) {
      return "Right Domain";
    }
    return "Error";
  }

  isDate() {
    if (this.dateType.test(this.date)) {
      return "Right Date";
    }
    return "Error";
  }

  isPhone() {
    if (this.phoneType.test(this.phone)) {
      return "Right Phone";
    }
    return "Error";
  }
}

let validator = new Validator("yourmail@gmail.com", "04.03.2021", "javascript.info", "+37361234567");

console.log(validator.isEmail());
console.log(validator.isDomain());
console.log(validator.isDate());
console.log(validator.isPhone());
