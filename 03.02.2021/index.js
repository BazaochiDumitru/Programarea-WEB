// Numere pare prin ciclu for
for (let i = 0 ; i <= 100; i++) {
	if (i% 2 == 0) {
		console.log(i);
	}
}

// Numere pare prin ciclu while
/* var x = 0;
while (x !== 101) {
  if (x % 2 == 0)
    console.log(x);
  x++;
} */

// Numere pare prin ciclu do-while
/* let a = 0;
do {
  if (a % 2 == 0)
  console.log(a);
  a++;
} while (a !== 101) */

/* while (true) {
  console.log("Hello");
} */

// console.log("Hello!");

document.getElementById("button1").addEventListener("click", function() { document.body.style.backgroundColor = "red"; });
document.getElementById("button2").addEventListener("click", function() { document.body.style.backgroundColor = "green"; });
document.getElementById("button3").addEventListener("click", function() { document.body.style.backgroundColor = "blue"; });

