
var app = new Vue({
    el: '#app2',
    data: {
        newTask: "",
        tasks: ["Первая задача", "Вторая задача", "Третья задача"]
    },
    methods: {
        addTask: function(){
            this.tasks.push(this.newTask);
            this.newTask = "";
        },
        editTask: function(i){
            let newTask = prompt("Измените задачу:", this.tasks[i]);
            Vue.set(this.tasks, i, newTask);
        },
        deleteTask: function(i){
            if(confirm("Удалить?"))
            {this.tasks.splice(i, 1);}
        }
    }
});