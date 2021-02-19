// creati un masiv cu 5 numere, calculati si afisati suma lor

/* const numbers = [1, 2, 3, 4, 5];

let sum = 0;
for (let n of numbers)
  sum += n;
alert(sum); */

// With reduce

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce ((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);
alert(sum);


// aveti masiv cu notele unui elev, calculati si afisati in consola nota medie

/* const marks = [9.2, 8.35, 10, 10, 7, 9.15];

let sum = 0;
for (let n of marks)
  sum += n;
const average = sum/marks.length;
console.log(average); */

// With reduce

/* const marks = [9.2, 8.35, 10, 10, 7, 9.15];

const sum = marks.reduce ((accumulator, currentValue) => {
	return accumulator + currentValue;
}, 0);
const average = sum/marks.length;
alert(average); */


// afisati daca elevul este restantier sau nu, daca o nota este mai mica decat 5 da, altfel nu

/* const marks = [4.75, 9.5, 10];
nota.forEach(element => {
    if (element < 5) {
        alert("Restantier");
    } else {
        alert("Nu este restantier");
    }
}); */