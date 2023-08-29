import React from 'react'
import './Scrollup.css'

const Scrollup = () => {
    window.addEventListener("scroll", () => {
        const scrollup = document.querySelector(".scrollup");
        if (window.scrollY >= 560) {
            scrollup.classList.add("show-scroll");
        } else {
            scrollup.classList.remove("show-scroll");
        }
    });
    window.addEventListener("scroll", function() {
        const scrollup = this.document.querySelector(".scrollup");
        if(this.scrollY>=560) scrollup.classList.add("show-scroll");
        else scrollup.classList.remove("Show-scroll")
    })
  return (
    <a href="#" className="scrollup">
        <i className="fa-solid fa-arrow-up scrollup_icon"></i>
    </a>
  )
}

export default Scrollup