import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

const TodoList = () => {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    if (todo.text) {
      const newTodos = [todo, ...todos]
      setTodos(newTodos)
    }
  }

  const deleteTodo = (id) => {
    const remTodo = [...todos].filter((todo) => todo.id !== id)
    setTodos(remTodo)
  }

  const editTodo = (todoId, newValue) => {
    if (newValue.text) {
      setTodos((prev) =>
        prev.map((item) => (item.id === todoId ? newValue : item))
      )
    }
  }

  return (
    <div>
      <h1>Todo-List</h1>
      <TodoForm submit={addTodo} />
      <Todo todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  )
}

export default TodoList
