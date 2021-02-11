// =========================== ex 1 =========================

const number = prompt("Enter a number: ");

if (number < 0) {
  alert(-1);
}
else if (number == 0){
  alert(0);
}
else if (number > 0){
  alert(1);
}
else {
  alert("ERROR")
}

// =========================== ex 2 =========================

/*const age = prompt('Enter your age ');

if (age >= 14 && age <= 90) {
  alert("True");
} else {
  alert("False");
}*/


/*const age = prompt('Enter your age ');

if (!(age >= 14 && age <= 90)) {
  alert("False");
} else {
  alert("True");
}*/

// =========================== ex 3 =========================

/*const validLoghin = 'Dumitru';
const validPassword = 'aaa111';

const inputLoghin = document.getElementById('form_login');
const inputPassword = document.getElementById('form_password');
const submit = document.getElementById('form_submit');

const checkInput = () => {
  if (inputLoghin.value !== validLoghin && inputPassword.value == validPassword){
    alert('Incorrect login');
  }

  if (inputLoghin.value == validLoghin && inputPassword.value !== validPassword){
    alert('Incorrect password');
  }

  if (inputLoghin.value !== validLoghin && inputPassword.value !== validPassword){
    alert('Validation error');
  }
}

submit.addEventListener('click', () => {
  checkInput();
}); */


// =========================== ex 4 =========================

/* const a = prompt("Enter minimum number: ");
const b = prompt("Enter maximum number: ");

let calc = () =>{
  let sum = 0;
  for (let i = a ; i <= b ; i++) {
    if(i % 2 == 0) {
        sum = sum + i;
    }
  }
  return sum;
}

console.log(calc()); */
