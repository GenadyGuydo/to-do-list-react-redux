import { useState } from 'react'
import MyButton from '../../button/MyButton'

import './comment.css'

import SubComentForm from './sub-comment/sub-comment'

const CommentContent = ({ c, t, removeCommentHandler }) => {
  const [input, setInput] = useState(false)

  return (
    <div>
      {t.id === c.taskID ? (
        <div className="comment">
          <div className="comment__container">
            <div className="coment_flex__container">
              <p className="comment__name">{c.comments.comments}</p>
              <div className="button_comment_section">
                <MyButton onClick={() => removeCommentHandler(c)}> delete </MyButton>
                <MyButton onClick={() => setInput(true)}> Reply </MyButton>
              </div>
            </div>
            <div className="sub__comment">
              <SubComentForm input={input} setInput={setInput} c={c} />
            </div>
          </div>
        </div>
      ) : (
        console.log('dont c')
      )}
    </div>
  )
}

export default CommentContent
