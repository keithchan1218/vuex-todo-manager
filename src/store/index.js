import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    todos: []
  },
  getters: {
    allTodos: state => state.todos
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      //console.log(response.data);
      commit("setTodos", response.data);
    },
    async addTodo({ commit }, title) {
      console.log("Add new todo: " + title);
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/todos",
        { title, completed: false }
      );
      // console.log(response.data);
      commit("newTodo", response.data);
    },
    async deleteTodo({commit}, id){
      await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
      commit("removeTodo", id);
    },
    async filterTodos({ commit }, number) {
      console.log("Filter Todos: " + number);
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/todos?_limit=${number}`
      );
      //console.log(response.data);
      commit("setTodos", response.data);
    },
    async updateTodo({ commit }, updateItem) {
      const response = await axios.put(
        `https://jsonplaceholder.typicode.com/todos/${updateItem.id}`, updateItem
      );
      commit("updateTodo", response.data);
    }
  },
  mutations: {
    setTodos: (state, todos) => (state.todos = todos),
    newTodo: (state, todo) => state.todos.unshift(todo),
    removeTodo: (state, id) => (
      state.todos = state.todos.filter(todo => todo.id !== id)
    ),
    updateTodo: (state, updateItem) => {
      const index = state.todos.findIndex(todo => todo.id === updateItem.id);
      if(index !== -1){
        state.todos.splice(index,1,updateItem);
      }
    },
  },
  modules: {}
});
