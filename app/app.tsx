import React from 'react'
import { Provider } from 'react-redux'
import { store } from "./services/redux/store"
import PlatformApp from './platformApp'


const App: React.FC = (): JSX.Element => {
    return (
      <Provider store={store}>
        <PlatformApp />
      </Provider>
    )
  }
  
  export default App