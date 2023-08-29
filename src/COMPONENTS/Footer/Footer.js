import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer_container container">
            <h1 className="footer_title">Mahesh</h1>

            <ul className="footer_list">
                <li>
                    <a href="#home" className="footer_link">Home</a>
                </li>
                
                <li>
                    <a href="#about" className="footer_link">About</a>
                </li>

                <li>
                    <a href="#skills" className="footer_link">Skills</a>
                </li>

                <li>
                    <a href="#project" className="footer_link">Project</a>
                </li>

                <li>
                    <a href="#contact" className="footer_link">Contact</a>
                </li>

            </ul>

            <div className="footer_social">
            <a href="https://www.instagram.com" className='home_social-icon' target='_blank'><i class="fa-brands fa-instagram fa-xl"></i></a>
            <a href="https://www.github.com" className='home_social-icon' target='_blank'><i class="fa-brands fa-github fa-xl"></i></a>
            <a href="https://www.linkedin.com" className='home_social-icon' target='_blank'><i class="fa-brands fa-linkedin fa-xl"></i></a>
            </div>
            
            <span className="footer_copy">
                &#169; MaheshPawar. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer