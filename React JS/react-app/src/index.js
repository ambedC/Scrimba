import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import App from "./App";

function CustomPage() {
    return(
        <App />
    )
}

ReactDOM.render(
    <CustomPage/>,
    document.getElementById("root")
)