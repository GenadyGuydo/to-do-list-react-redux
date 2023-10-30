export const CommentProject = (state = { comment: [] }, action) => {
  switch (action.type) {
    case "ADD_COMMENT":
      return { comment: action.payload }
    case "REMOVE_COMMENT":
      return { comment: action.payload }
    default:
      return state;
  }
}