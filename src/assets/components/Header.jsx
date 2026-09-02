import React from 'react'
import "./CssHeader.css"

const Header = () => {
    return (
        <nav>
            <h1>My Movie Review App</h1>
            <ul>
                <a href="#Home"><li>Home</li></a>
                <a href="#Library"><li>Library</li></a>
                <a href="#Basket"><li>Basket</li></a>
            </ul>
        </nav>
    )
}

export default Header
