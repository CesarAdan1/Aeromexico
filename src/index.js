import React from "react"
import ReactDom from "react-dom"
import App from "./App"
import "./static/styles/App.scss"

ReactDom.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
, document.getElementById('app'))