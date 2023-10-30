import MyButton from '../../button/MyButton'

const SubContent = ({ s, removeSubHandler, t }) => {
  return (
    <div>
      {t.id === s.taskID ? (
        <div className="sub-task">
          <div className="sub-task__container">
            <p className="sub-task__name">{s.subtodos.subtodos}</p>
            <MyButton onClick={() => removeSubHandler(s)}> delete </MyButton>
          </div>
        </div>
      ) : (
        console.log('dont sub task')
      )}
    </div>
  )
}

export default SubContent
