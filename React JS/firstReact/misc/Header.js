import React from "react"
import { ReactDOM } from "react"

export default function Header() {
    return(
        <header>
                <nav className = "nav">
                    <img className = "image" src = "./react-logo.png" />
                    <ul className = "nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
        </header>

    )
}
