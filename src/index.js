import React from "react"
import ReactDOM from "react-dom"
import "./index.scss"
import App from "./App"
import { store } from "./app/store"
import { Provider } from "react-redux"

ReactDOM.render(
  <React.Fragment>
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById("root")
)
