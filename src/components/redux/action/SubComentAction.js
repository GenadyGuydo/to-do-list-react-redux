export const AddSubCommentProd = (subComments,c) => (dispatch,getState) =>{
  const{
    SubComment:{subComment},
  } = getState();
  const hasProdsubCom = subComment.find((i)=> i.subComments === subComments)
  if(!hasProdsubCom && !subComments !== ""){
    dispatch({
      type :"ADD_SUB_COMMENT",
      payload: [{id: `${Date.now()}`, commentID:c.id , subComments}, ...subComment]
    })
  }
}


// export const RemoveComments = (comments) => (dispatch,getState)=> {
//   const{
//      Comment:{comment},
//     } = getState();
//     dispatch({
//       type: "REMOVE_COMMENT",
//       payload: comment.filter((c) => c.id !== comments.id)
//     })
//   }