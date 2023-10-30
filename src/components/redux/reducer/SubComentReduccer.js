export const SubCommentProject = (state = { subComment: [] }, action) => {
  switch (action.type) {
    case "ADD_SUB_COMMENT":
      return { subComment: action.payload }
    case "REMOVE_SUB_COMMENT":
      return { subComment: action.payload }
    default:
      return state;
  }
}