// EX. 7.6
// Добавить в страницу таблицу 8*8. При помощи JS кода закрасить
// цвет фона чтобы получилась шахматная доска.
// Использовать querySelector*

const tableRows = document.querySelectorAll(".row");

for (let row in tableRows) {
  let tableCells = tableRows[row].cells;
  if (row % 2 == 1) {
    for (let cell in tableCells) {
      if (cell % 2 == 0) {
        tableCells[cell].classList.add("black");
      }
    }
  } else {
    for (let cell in tableCells) {
      if (cell % 2 == 1) {
        tableCells[cell].classList.add("black");
      }
    }
  }
}
