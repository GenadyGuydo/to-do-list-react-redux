import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { TodoProject } from './../reducer/todo-project-reducer'
import { TitleProject } from './../reducer/tastreducer'
import { CommentProject } from './../reducer/CommentReducer'
import { SubTodoProject } from './../reducer/SubTodoReducer'
import { SubCommentProject } from './../reducer/SubComentReduccer'
const reducer = combineReducers({
  Prod: TodoProject,
  Title: TitleProject,
  Subtodo: SubTodoProject,
  Comment: CommentProject,
  SubComment: SubCommentProject,
})

const initialState = {}

const middleware = [thunk]

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware)),
)
