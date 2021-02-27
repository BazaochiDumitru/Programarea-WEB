console.log("Hello world!");

// EX.6.8 (Задача №8 - работа с ключами объекта)

/* Задан объект 
const weekDays = {
	“Mo”: “Понедельник”,
	“Tu”: “Вторник”,
	“We”: “Среда”,
	“Th”: “Четверг”,
	“Fr”: “Пятница”,
	“Sa”: “Суббота”,
	“Su”: “Воскресенье”,
}

Напишите функцию translate которая переводит названия дней на румынском

const weekDays = {
	“Mo”: “Luni”,
	“Tu”: “Marti”,
	“We”: “Miercuri”,
	“Th”: “Joi”,
	“Fr”: “Vineri”,
	“Sa”: “Simbata”,
	“Su”: “Duminica”
}
Примечание: нельзя делать так weekDays[“mon”] = “Luni”
Используйте методы для работы с объектами или массивами. */

const weekDays = {
  Mo: "Понедельник",
  Tu: "Вторник",
  We: "Среда",
  Th: "Четверг",
  Fr: "Пятница",
  Sa: "Суббота",
  Su: "Воскресенье",
};

let translate = (day) => {
  const romanianDays = [
    "Luni",
    "Marti",
    "Miercuri",
    "Joi",
    "Vineri",
    "Simbata",
    "Duminica",
  ];
  const newTranslateDays = Object.entries(day);
  for (let key in newTranslateDays) {
    newTranslateDays[key][1] = romanianDays[key];
  }

  return Object.fromEntries(newTranslateDays);
};

console.log(translate(weekDays));
