import React, { useState, useEffect, useRef } from 'react'

const TodoForm = ({ submit, edit }) => {
  const [input, setInput] = useState(edit ? edit.value : '')
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
  })

  const handleChange = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    submit({
      id: Date.now(),
      text: input,
    })
    setInput('')
  }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            placeholder='Update your item...'
            value={input}
            onChange={handleChange}
            name='text'
            ref={inputRef}
            className='todo-input edit'
          />
          <button className='todo-button edit' onClick={handleSubmit}>
            Update
          </button>
        </>
      ) : (
        <>
          <input
            placeholder='Create new todo...'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
          />
          <button className='todo-button' onClick={handleSubmit}>
            Create Todo
          </button>
        </>
      )}
    </form>
  )
}

export default TodoForm
