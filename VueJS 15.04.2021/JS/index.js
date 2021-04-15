console.log("Hello world!");

/* Задача № 1 - Подключение VueJS через CND
Подключите VueJS через CDN и выполните следующие задания:

1. Добавьте в страницу контейнер приложения
2. Добавьте переменную username
3. Выведите в шаблон значение этой переменной */

const app = new Vue({
  el: "#app",
  data: {
    username: "Dumitru",
  },
});

/* Задача № 2 - вычисляемые свойства и работа с моделью
В том же экземпляре приложения, добавьте инпут для выбора даты рождения. 
Создайте вычисляемое свойство age, в которой будет возраст в годах. Вывести возрас в шаблон. */

const app2 = new Vue({
  el: "#app2",
  data: {
    year: new Date(),
  },
  computed: {
    age() {
      return new Date().getFullYear() - new Date(this.year).getFullYear();
    },
  },
});

// Задача № 3 - отслеживание изменений переменной

const app3 = new Vue({
  el: "#app3",
  data: {
    experience: "",
    language: "",
    salary: 0,
  },
  watch: {
    experience() {
      this.salary = this.calcSalary(this.language, this.experience);
    },
    language() {
      this.salary = this.calcSalary(this.language, this.experience);
    },
  },
  methods: {
    calcSalary(language, experience) {
      let coefficient = 0;
      if (language === "JS") {
        coefficient = 1;
      } else if (language === "Python") {
        coefficient = 0.7;
      } else if (language === "Java") {
        coefficient = 1.3;
      }

      let basicRate = 0;

      if (experience === "1") {
        basicRate = 10000;
      } else if (experience === "2") {
        basicRate = 12000;
      } else if (experience === "3") {
        basicRate = 13500;
      } else if (experience === "4") {
        basicRate = 14000;
      } else if (experience === "5") {
        basicRate = 15000;
      }

      return basicRate * coefficient;
    },
  },
});
