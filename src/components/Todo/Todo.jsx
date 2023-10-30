import { useState } from 'react'

import { useDispatch } from 'react-redux'

import { EditTodo, RemoveTodo } from '../redux/action/taskaction'
import ToDoContent from './todocontent'

const Todo = ({ t, number, p }) => {
  const [titles, setTitles] = useState('')
  const titleDispatch = useDispatch()

  const removeHandler = (t) => {
    titleDispatch(RemoveTodo(t))
  }

  const editHandler = (event, todo) => {
    event.preventDefault()
    titleDispatch(EditTodo(todo, titles))
  }
  console.log(t)
  return (
    <div>
      {p.id === t.prodID ? (
        <ToDoContent
          t={t}
          number={number}
          removeHandler={removeHandler}
          editHandler={editHandler}
          setTitles={setTitles}
        />
      ) : (
        console.log(1)
      )}
    </div>
  )
}

export default Todo
