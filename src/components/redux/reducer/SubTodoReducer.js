export const SubTodoProject = (state = { subtodo: [] }, action) => {
  switch (action.type) {
    case "ADD_SUB_TASK":
      return { subtodo: action.payload }
    case "REMOVE_SUB_TASK":
      return { subtodo: action.payload }
    default:
      return state;
  }
}