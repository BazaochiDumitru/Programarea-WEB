// EX. 7.6
// Добавить в страницу таблицу 8*8. При помощи JS кода закрасить 
// цвет фона чтобы получилась шахматная доска.

for (let i = 0; i < 64; i++) {
  document.getElementById("sah").appendChild(document.createElement("div")).style.backgroundColor = parseInt((i / 8) + i) % 2 == 0 ? 'black' : 'white';
}
