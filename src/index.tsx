import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './views/pages/entrypoint/Main'
import * as serviceWorker from './serviceWorker'
import { Provider } from "mobx-react"
import { UserStore } from "./stores/user-store"
import { BrowserRouter as Router } from "react-router-dom"

const Root = (

  <Provider userStore={UserStore}>
    <Router>
      <App />
    </Router>
  </Provider>

)

ReactDOM.render(Root, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
