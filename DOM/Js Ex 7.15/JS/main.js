// EX. 7.15
// Дан инпут. В него вводится число. По потери фокуса сделайте так,
// чтобы если в инпут введено недействительное число, значение инпута обнуляется.

let input = document.getElementById("input");
input.addEventListener(`blur`, () => {
  if (Number.isInteger(+input.value) == false) {
    input.value = 0;
  }
});
