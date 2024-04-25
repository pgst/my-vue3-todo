import { ref } from 'vue'

export const useTodoList = (id) => {
  const todoList = ref([])
  const ls = localStorage.todoList

  todoList.value = ls ? JSON.parse(ls) : []

  const findTodo = todoList.value.find((todo) => todo.id === id)
  const idx = todoList.value.findIndex((todo) => todo.id === id)

  return { findTodo, idx }
}
