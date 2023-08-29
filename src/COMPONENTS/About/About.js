import React from 'react'
import './About.css';
import AboutImg from "../../ASSETS/photo.png"
import Info from './Info'
// import Ressume from "../../ASSETS/"

const About = () => {
  return (
    <section className='about section' id='about'>
        <h2 className="section_title">About Me</h2>
        <span className="section_subtitle">My introduction</span>

        <div className="about_container container grid">
            <img src={AboutImg} alt="" className="about_img" />

            <div className="about_data">
                <Info/>

                <p className="about_description">
                I'm a Freshman pursuing BCA(sci) at Deogir college, Ch.Sambhajinagar. I am always ready to have new experiences, meet new people and learn new things. I find the idea of creating value for people and impacting the world through my work gratifying.

                </p>

                <a href='#' className="button button--flex">Download Ressume</a>

            </div>
        </div>
    </section>
  )
}

export default About