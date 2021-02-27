console.log("Hello world!");

// EX.6.9 (Задача №9 - работа с ключами объекта)

/* Задан объект
const weekDays = {
	“Luni”: “Mo”,
	“Marti”: “Tu”,
	“Miercuri”: “We”,
	“Joi”: “Th”,
	“Vineri”: “Fr”,
	“Simbata”: “Sa”,
	“Duminica”: “Su”
}
Напишите функцию которая получит как параметр этот объект и вернет следующий объект
const weekDays = {
	“Mo”: “Luni”,
	“Tu”: “Marti”,
	“We”: “Miercuri”,
	“Th”: “Joi”,
	“Fr”: “Vineri”,
	“Sa”: “Simbata”,
	“Su”: “Duminica”
}
Придумайте подходящее название для этой функции. */

const weekDays = {
    "Luni": "Mo",
    "Marti": "Tu",
    "Miercuri": "We",
    "Joi": "Th",
    "Vineri": "Fr",
    "Simbata": "Sa",
    "Duminica": "Su"
};

let changeValue = (obj) => {
    const temporaryValue = {};

    Object.keys(obj).forEach(function(value) {
        let key = obj[value];
        temporaryValue[key] = value;
    });
    return temporaryValue;
}

console.log(changeValue(weekDays));
