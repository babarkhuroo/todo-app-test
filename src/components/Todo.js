import React, { useState } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { AiFillEdit } from 'react-icons/ai'
import TodoForm from './TodoForm'

const Todo = ({ todos, deleteTodo, editTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  })

  const submitEdit = (value) => {
    editTodo(edit.id, value)
    setEdit({
      id: null,
      value: '',
    })
  }

  if (edit.id) {
    return <TodoForm edit={edit} submit={submitEdit} />
  }

  return todos.map((todo) => (
    <div key={todo.id} className='todo-row'>
      <h4>{todo.text}</h4>
      <div className='icons'>
        <RiCloseLine onClick={() => deleteTodo(todo.id)} />
        <AiFillEdit
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ))
}

export default Todo
