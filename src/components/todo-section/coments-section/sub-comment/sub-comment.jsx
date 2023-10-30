import { useDispatch, useSelector } from "react-redux";
import MyButton from "../../../button/MyButton";
import CommentInput from "../../../comment-input/commnt-input";
import MyInput from "./../../../input/MyInput";
import SubCommentContent from "./sub-comment-content";
import { useState } from "react";
import { AddSubCommentProd } from './../../../redux/action/SubComentAction';


const SubComentForm = ({ input, setInput, c }) => {
  const [subComments, setSubComments] = useState("");
  const SubCommentDispatch = useDispatch();
  const SubComment = useSelector((state) => state.SubComment);
  const { subComment } = SubComment;

  const handleComentsSubmit = (e) => {
    e.preventDefault();
    SubCommentDispatch(AddSubCommentProd({ subComments },c));
  };

  return (
    <div className="coment_form">
      <form onSubmit={handleComentsSubmit}>
        <CommentInput visible={input} setVisible={setInput}>
          <MyInput
            type="text"
            placeholder="change a new coment"
            onChange={(e) => setSubComments(e.target.value)}
          />
          <MyButton onClick={() => setInput(false)}> Submit </MyButton>
        </CommentInput>
      </form>
      <div className="sub__comment_content">
        {subComment &&
          subComment.map((s, index) => (
            <SubCommentContent s={s} key={index} c={c} />
          ))}
      </div>
    </div>
  );
};

export default SubComentForm;
