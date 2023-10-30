import Header from './components/todo-header/todo-header'

import { Provider } from 'react-redux'

import { store } from './components/redux/store/store'

import Hub from './hubcomponent'

function App() {
  return (
    <Provider store={store}>
      <div className="wrapper">
        <Header />
        <Hub />
      </div>
    </Provider>
  )
}

export default App
