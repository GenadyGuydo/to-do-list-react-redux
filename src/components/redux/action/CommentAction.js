export const AddCommentProd = (comments,t) => (dispatch,getState) =>{
  const{
    Comment:{comment},
  } = getState();
  const hasProdsub = comment.find((i)=> i.comments === comments)
  if(!hasProdsub && !comments !== ""){
    dispatch({
      type :"ADD_COMMENT",
      payload: [{id: `${Date.now()}`, taskID:t.id , comments}, ...comment]
    })
  }
}


export const RemoveComments = (comments) => (dispatch,getState)=> {
  const{
     Comment:{comment},
    } = getState();
    dispatch({
      type: "REMOVE_COMMENT",
      payload: comment.filter((c) => c.id !== comments.id)
    })
  }