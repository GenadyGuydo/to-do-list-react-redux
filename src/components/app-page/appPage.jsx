import React, { useState } from 'react'
import './appPage.css'
import MyModal from './../modal/Mymodal'
import { useDispatch, useSelector } from 'react-redux'
import MyInput from './../input/MyInput'
import MyButton from '../button/MyButton'
import { AddTodoProd } from '../redux/action/todo-project-action'
import Project from './project'

const AppPage = () => {
  const [modal, setModal] = useState(false)
  const [prods, setProds] = useState()
  const dispatch = useDispatch()
  const Prod = useSelector((state) => state.Prod)
  const { prod } = Prod

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(AddTodoProd(prods))
  }

  return (
    <div className="app_page">
      <div className="app_page__wrapper">
        {prod && prod.map((p, index) => <Project p={p} key={index} />)}
        
        <MyModal visible={modal} setVisible={setModal}>
          <form onSubmit={handleSubmit}>
            <MyInput
              onChange={(e) => setProds(e.target.value)}
              type="text"
              placeholder="change your project"
            />
            <MyButton type="submit"> Save </MyButton>
          </form>
        </MyModal>

        <div className="button_wrapper">
          <button className="add_project" onClick={() => setModal(true)}>
            {' '}
            add new project{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default AppPage
