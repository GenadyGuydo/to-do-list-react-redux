import ci from './commentInput.module.css'

const CommentInput = ({ children, visible, setVisible }) => {
  const rootClasess = [ci.myInput]
  if (visible) {
    rootClasess.push(ci.active)
  }

  return (
    <div className={ci.comentform}>
      <div className={rootClasess.join(' ')} onClick={() => setVisible(false)}>
        <div className={ci.inputcontent} onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default CommentInput
