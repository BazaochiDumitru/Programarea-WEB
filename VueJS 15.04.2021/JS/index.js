console.log("Hello world!");

/* Задача № 1 - Подключение VueJS через CND
Подключите VueJS через CDN и выполните следующие задания:

1. Добавьте в страницу контейнер приложения
2. Добавьте переменную username
3. Выведите в шаблон значение этой переменной */

const app = new Vue({
    el: '#app',
    data: {
        username: 'Dumitru'
    }
}) 

/* Задача № 2 - вычисляемые свойства и работа с моделью
В том же экземпляре приложения, добавьте инпут для выбора даты рождения. 
Создайте вычисляемое свойство age, в которой будет возраст в годах. Вывести возрас в шаблон. */

const app2 = new Vue({
    el: '#app2',
    data: {
        year: new Date(),
    },
    computed: {
        age() {
            return new Date().getFullYear() - new Date(this.year).getFullYear();
        }
    }
})


// Задача № 3 - отслеживание изменений переменной

const app3 = new Vue({
    el: '#app3',
    data: {
        Javascript: 1,
        Python: 0.7,
        Java: 1.3,
        Experience: 0,
        salary: 0
        
    },
    computed: {
    },
    watch: {
        
    }
})
// V-for

/* var app = new Vue({
    el: '#app',
    data: {
        students: [
            "Lungu Andrei",
            "Maidacenco Anastasia",
            "Maneev Dumitru",
            "Mihalachi Alexandrina",
            "Munteanu Victor"
        ]
    }
}) */

// V-if

/* var app = new Vue({
    el: '#app',
    data: {
        gender: "M"
    }
}) */

// Computed + - * /

/* var app = new Vue({
    el: '#app',
    data: {
        a: 0,
        b: 0,
        operand: '+'
    },
    computed: {
        suma() {
            return parseInt(this.a) + parseInt(this.b);
        },
        multiplication() {
            return parseInt(this.a) * parseInt(this.b);
        },
        diference() {
            return parseInt(this.a) - parseInt(this.b);
        },
        divide() {
            return parseInt(this.a) / parseInt(this.b);
        }
    }
}) */