import MyModal from './../../modal/Mymodal'
import MyInput from './../../input/MyInput'
import MyButton from './../../button/MyButton'
import './subtask.css'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import SubContent from '../sub-task/sub-task-content'
import { AddSubProd, RemoveSubTodo } from './../../redux/action/SubTodoAction'

const SubTask = ({ setSubModal, subModal, t }) => {
  const [subtodos, setSubTodos] = useState(' ')
  const SubTodoDispatch = useDispatch()
  const Subtodo = useSelector((state) => state.Subtodo)

  const { subtodo } = Subtodo

  const handleSubSubmit = (e) => {
    e.preventDefault()
    SubTodoDispatch(AddSubProd({ subtodos }, t))
  }
  const removeSubHandler = (s) => {
    SubTodoDispatch(RemoveSubTodo(s))
  }

  return (
    <div className="">
      <MyModal visible={subModal} setVisible={setSubModal}>
        <form onSubmit={handleSubSubmit}>
          <div>
            <MyInput
              value={subtodos}
              onChange={(e) => setSubTodos(e.target.value)}
              type="text"
              placeholder="change a new sub-task"
            />
            <MyButton> Save </MyButton>
          </div>
          {subtodo &&
            subtodo.map((s, index) => (
              <SubContent s={s} key={index} removeSubHandler={removeSubHandler} t={t} />
            ))}
        </form>
      </MyModal>
    </div>
  )
}

export default SubTask
