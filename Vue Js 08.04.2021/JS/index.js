console.log("Hello world!");

// Conectare VueJs

/* const app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        test: 123
    }
}) */

// V-Model

/* const app = new Vue({
    el: '#app',
    data: {
        message: "Vue 2 sample"
    }
}) */

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

// Computed sum of 2 numbers

var app = new Vue({
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
})