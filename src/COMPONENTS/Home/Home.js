import React from 'react'
import Social from './Social'
import Data from './Data'
import "./Home.css"

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home_container container grid">
            <div className="home_content grid">
                <Social/>    
                <Data/>
            </div>
             <div className="home_img"></div>
           
        </div>
    </section>
  )
}

export default Home