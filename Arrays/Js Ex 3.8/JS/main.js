console.log("Hello world!");

// EX.3.8 (Задача №8 - функции обработки массивов)

/* Задан массив
	const colors = [“red”, “green”, “blue”];
Написать функцию
	checkColor(color)
которая вернет позицию цвета в массиве если она есть или -1 если цвета нет. */

const colors = ['red', 'green', 'blue'];

let checkColor = (color) => {
    return colors.indexOf(color, 0);
}

console.log(checkColor('red'));
console.log(checkColor('green'));
console.log(checkColor('blue'));
console.log(checkColor('black')); 