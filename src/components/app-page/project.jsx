import MyModal from '../modal/Mymodal'
import { useState } from 'react'
import SectonToDo from './../todo-section/section'

const Project = ({ p }) => {
  const [task, setTask] = useState(false)

  return (
    <div>
      <div className="project">
        <div className="project_wrapper">
          <h1 className="prod-title">{p.prods}</h1>

          <div className="link">
            <button children="to_task" onClick={() => setTask(true)}>
              To Task
            </button>
          </div>
        </div>
      </div>
      <MyModal visible={task} setVisible={setTask}>
        <SectonToDo p={p} />
      </MyModal>
    </div>
  )
}

export default Project
