import React, { useState } from 'react'
import "./Header.css"

const Header = () => {

    // TOGGLE MENU

    const[Toggle, showMenu] = useState(false)
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className='nav_logo'>Mahesh</a>

            <div className={Toggle ? "nav_menu show_menu": "nav_menu"}>
                <ul className="nav_list grid">
                    <li className="nav_item">
                        <a href="#home" className="nav_link active_link">
                            <i className="fa-solid fa-house nav_icon"></i>
                            Home
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#about" className="nav_link">
                            <i className="fa-solid fa-user nav_icon"></i>
                            About
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#skills" className="nav_link">
                            <i className="fa-solid fa-file-lines nav_icon"></i>
                            Skills
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#project" className="nav_link">
                            <i className="fa-solid fa-image nav_icon"></i>
                            Project
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#portfolio" className="nav_link">
                            <i className="fa-solid fa-briefcase nav_icon"></i>
                            Portfolio
                        </a>
                    </li>
                    <li className="nav_item">
                        <a href="#portfolio" className="nav_link">
                            <i className="fa-solid fa-address-book nav_icon"></i>
                            Contact
                        </a>
                    </li>
                </ul>
                <i className="fa-solid fa-xmark nav_close" onClick={()=>showMenu(!Toggle)}></i>            
            </div>
            <div className="nav_toggle" onClick={()=>showMenu(!Toggle)}>
            <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header