import React from 'react'
import "./CssHeader.css"

const Header = () => {
    return (
        <nav>
            <h1>My Movie Review App</h1>
            <ul>
                <a href="#Home"><li>Most Watched</li></a>
                <a href="#Library"><li>Best Rated</li></a>
            </ul>
        </nav>
    )
}

export default Header
