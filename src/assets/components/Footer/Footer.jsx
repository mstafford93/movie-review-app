import React from 'react'
import "./CssFooter.css"

const Footer = () => {
  return (
    <footer>
        <p>&copy; Movie Review App by M.Stafford 2026</p>
        <ul>
                <a href="#Home"><li>Most Watched</li></a>
                <a href="#Library"><li>Best Rated</li></a>
        </ul>
    </footer>
  )
}

export default Footer
