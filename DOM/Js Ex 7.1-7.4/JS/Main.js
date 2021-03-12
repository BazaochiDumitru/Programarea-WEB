// EX.7.1 
// Сразу после открытия документа, установить красный цвет фона страницы.
// (задачи 1-4 выполнить в одном документе)

 document.body.style.backgroundColor = "red";

// EX.7.2
// Через 3 секунды после загрузки страницы, установить цвет фона в зеленый.

setTimeout(() => document.body.style.backgroundColor = "green", 3000);

// EX.7.3
// Добавить кнопку с текстом Orange, при нажатии на которой, цвет страницы становится оранжевым.

document.addEventListener("DOMContentLoaded", () => { 
    console.log("DOM loaded"); 
    const buttonElement = document.getElementById("btn"); 
    buttonElement.addEventListener("click", () => { 
    document.body.style.backgroundColor = "Orange"; 
    }); 
});

// EX.7.4
// Добавить в странице нумерованный список(ol). После открытия страницы, каждые 2 секунды, 
// в список добавится новый элемент (li) с текстом `Элемент ${i}`. Заполнение списка 
// остановится когда в списке будет 20 элементов.
// У четных элементов будет зеленый фон а у нечетных фиолетовый.

const listItems = document.getElementsByTagName("li"); 

let i = 1;
setInterval (() => {
    if (i <= 20){
        const node = document.createElement("LI");
        const textNode = document.createTextNode(`Element ${i}`);
        node.appendChild(textNode);
        document.getElementById("listID").appendChild(node);
        if (i % 2 === 0) {
            node.style.backgroundColor = "#0DE61A"; // verde
        } else {
            node.style.backgroundColor = "purple";
        }
        i++;
    }
}, 2000);
