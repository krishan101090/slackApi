import React from "react"
import ReactDOM from "react-dom"
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles"
import CssBaseline from "@material-ui/core/CssBaseline"
import { Provider } from "react-redux"
import store from "./store/index"
import "./index.css"
import "./styles/styles.scss"
import App from "./components/App/App"
import * as serviceWorker from "./serviceWorker"

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
  }
})
ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </Provider>,
  document.getElementById("root")
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
