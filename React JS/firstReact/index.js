// import React from "react"
// import { ReactDOM } from "react"

// import Header from "./Header"
// import MainContent from "./MainContent"
// import Footer from "./Footer"


// function App() {
//     return(
//         <div>
//             <Header/>         
//             <MainContent/>
//             <Footer/> 
//         </div>
//     )
// }

// ReactDOM.render(
//     <App/>,
//     document.getElementById("root")
// )

import React from "react"
import ReactDOM from "react-dom"

import App from "./App"

function CustomPage() {
    return(
        <App />
    )
}

ReactDOM.render(
    <CustomPage/>,
    document.getElementById("root")
)