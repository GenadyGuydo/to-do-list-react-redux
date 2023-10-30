import { useState } from 'react'
import MyButton from '../../button/MyButton'
import MyInput from '../../input/MyInput'
import MyModal from '../../modal/Mymodal'
import { useDispatch, useSelector } from 'react-redux'

import CommentContent from './comments-content'
import { AddCommentProd, RemoveComments } from './../../redux/action/CommentAction';

const CommentSection = ({ initComment, setInitComment, t }) => {
  const [comments, setComments] = useState('')
  const CommentDispatch = useDispatch()
  const Comment = useSelector((state) => state.Comment)
  const { comment } = Comment

  const handleSubSubmit = (e) => {
    e.preventDefault()
    CommentDispatch(AddCommentProd({ comments }, t))
  }
  const removeCommentHandler = (c) => {
    CommentDispatch(RemoveComments(c))
  }

  return (
    <div className="">
      <MyModal visible={initComment} setVisible={setInitComment}>
        <form onSubmit={handleSubSubmit}>
          <div>
            <MyInput
              value={comments}
              onChange={(e) => setComments(e.target.value)}
              type="text"
              placeholder="change a new coment"
            />
            <MyButton> Save </MyButton>
          </div>
        </form>
        {comment &&
          comment.map((c, index) => (
            <CommentContent c={c} key={index} t={t} removeCommentHandler={removeCommentHandler} />
          ))}
      </MyModal>
    </div>
  )
}

export default CommentSection
