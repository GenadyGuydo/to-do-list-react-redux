import { useState } from 'react'
import MyButton from '../button/MyButton'
import MyInput from '../input/MyInput'
import MyModal from '../modal/Mymodal'
import CommentSection from '../todo-section/coments-section/coment'
import SubTask from '../todo-section/sub-task-section/sub-task'
import ts from './Todo.module.css'
const ToDoContent = ({ t, number, removeHandler, editHandler, setTitles }) => {
  const [activables, setActivable] = useState(false)
  const [renameModal, setRenameModal] = useState(false)
  const [subModal, setSubModal] = useState(false)
  const [initComment, setInitComment] = useState(false)

  const handleActive = () => {
    if (setActivable) {
      const activables = true
    }
  }

  const rootClasess = [ts.section__content]
  if (activables) {
    rootClasess.push(ts.active)
  }

  return (
    <div className={rootClasess.join(' ')} onClick={() => setActivable(true)}>
      <div className={ts.number_section}>
        <p className={ts.num}>{number}</p>
        <p className={ts.date}>{t.date}</p>
        <p className={ts.title_task}>{t.titles.titles}</p>
      </div>
      <div className={ts.discription__section}>
        <p className={ts.discription}>{t.titles.diskripts}</p>
      </div>

      <div className={ts.functionality__section}>
        <button className={ts.delete} onClick={() => removeHandler(t)}>
          delete
        </button>
        <button
          className={ts.rename}
          onClick={() => {
            setRenameModal(true)
          }}
        >
          {''}rename
        </button>

        <button className={ts.sub__task_btn} onClick={() => setSubModal(true)}>
          sub-task
        </button>
        <button className={ts.comment} onClick={() => setInitComment(true)}>
          comment
        </button>
        <button className={ts.check} onClick={() => handleActive(setActivable)}>
          check
        </button>
        <MyModal visible={renameModal} setVisible={setRenameModal}>
          <form>
            <MyInput
              onChange={(e) => setTitles(e.target.value)}
              type="text"
              placeholder="change a new title of task"
            />
            <MyButton onClick={(event) => editHandler(event, t)}> Save </MyButton>
          </form>
        </MyModal>
        <SubTask subModal={subModal} setSubModal={setSubModal} t={t} />
        <CommentSection initComment={initComment} setInitComment={setInitComment} t={t} />
      </div>
    </div>
  )
}

export default ToDoContent
