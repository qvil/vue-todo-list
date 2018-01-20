// Vue.config.devtools = true;

Vue.component("todo-item", {
  template: "\
    <li>\
      {{ title }}\
      <button v-on:click=\"$emit(\'remove\')\">X</button>\
    </li>\
  ",
  props: ['title']
});

new Vue({
  el: '#todo-list-example',
  data: {
    newTodoText: '',
    todos: [
      {
        id: 1,
        title: 'Talk',
      },
      {
        id: 2,
        title: 'Play',
      },
      {
        id: 3,
        title: 'Love',
      },
    ],
    nextTodoId: 4,
  },
  methods: {
    addNewTodo: function() {
      this.todos.push({
        id: this.newTodoId++,
        title: this.newTodoText,
      })
      this.newTodoText = ''
    }
  }
})