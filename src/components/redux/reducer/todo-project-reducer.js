export const TodoProject = (state = { prod: [] }, action) => {
  switch (action.type) {
    case "ADD_PROD":
      return { prod: action.payload }
    case "REMOVE_PROD":
      return { prod: action.payload }
    default:
      return state;
  }
}