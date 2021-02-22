console.log("Hello world!");

// EX.3.9 (Задача №9 - функции обработки массивов)

/* Задан массив [1, “a”, 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100]
Напишите функцию filter которая удалить лишнее из массива (все что не является цифрой) 
и вернет чистый массив [1, 2, 3, 4, 5, 6, 7, 8, 9] */

const numbers = [1, "a", 2, null, 3, undefined, 4, {}, 5, 6, `word`, 7, 8, false, 9, 100];

function isNumber(num) {
  for( let i = 0; i < numbers.length; i++) {
    if ( typeof num !== 'number') {
        return false;
    } else if ( num > 9) {
      return false;
    }
  }
  return num;
}

console.log(numbers.filter(isNumber));