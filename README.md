# Vuex Todo Manager

This project shows you a basic Vuex components. You can use your own API to perform this state todos. We made four different widgets with axios.

**CRUD**
1. Get Todo List `@Todos.vue`
2. Add Todo items `@AddTodo.vue`
3. Filter Todo items `@FilterTodos.vue`
4. Update the Todo item `@Todos.vue`

# Get start
Create a folder called store and make a index.js

## Step 1: Use Vuex in our new widget
- Use `mapGetters` to use getter functions in store
  - get the list of todos from [jsonplaceholder](https://jsonplaceholder.typicode.com/todos)

## Step 2: Use Vuex acion methods
- Use `actions` and `mapActions` to call API @`store/index.js`
  - fetchTodos - get
  - addTodo    - post
  - updateTodo - put
  - deleteTodo - delete

We use `mutations` to update the state of store
- setTodos
- newTodo
- updateTodo
- removeTodo

# Notes
| item | Details |
| ---- | ------- |
| dblclick | check onchange of double click action |

***
Credit: [Vuex](https://vuex.vuejs.org/)
***