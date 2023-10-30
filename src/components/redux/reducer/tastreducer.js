export const TitleProject = (state = { title: [] }, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return { title: action.payload }
    case "REMOVE_TASK":
      return { title: action.payload }
   case "EDIT":
      return { title: action.payload }
    case "UPDATE__TASK":
      return {title: action.payload } 
      default:
      return state;
  }
}

