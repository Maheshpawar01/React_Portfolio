import React from 'react'
import './Contact.css'

const Contact = () => {
  return (
    <section className="contact section" id="contact">
        <h2 className="section_title">Get in touch</h2>
        <span className="section_subtitle">Contact Me</span>

        <div className="contact_container container grid">
            <div className="contact_content">
                <h3 className="contact_title">Talk to me</h3>

                <div className="contact_info">
                    <div className="contact_card">
                        <i className="bx bx-mail-send contact_card-icon"></i>

                        <h3 className="contact_card-title">Email</h3>
                        <span className="contact_card-data">maheshp8767@gmail.com</span>

                        <a href="mailto:maheshp8767@gmail.com" className="contact_button">
                            Write me{" "}
                            <i className="fa-solid fa-arrow-right contact_button-icon"></i>
                        </a>
                    </div>

                    <div className="contact_card">
                    <i className="fa-brands fa-instagram  contact_card-icon"></i>
                        <h3 className="contact_card-title">Instagram</h3>
                        <span className="contact_card-data">DM me on instagram</span>

                        <a href="#" className="contact_button">
                            Write me{" "}
                            <i className="fa-solid fa-arrow-right contact_button-icon"></i>
                        </a>
                    </div>

                    {/* <div className="contact_card">
                        <i className="bx bx contact_card-icon"></i>

                        <h3 className="contact_card-title"></h3>
                        <span className="contact_card-data"></span>

                        <a href="" className="contact_button">
                            Write me{" "}
                            <i className="bx bx right-arrow-alt contact_button-icon"></i>
                        </a>
                    </div> */}
                </div>
            </div>

            <div className="contact_content">
                <h3 className="contact_title">Write me your Project</h3>

                <form action="" className="contact_form">
                    <div className="contact_form_div">
                        <label htmlFor="" className="contact_form-tag">Name</label>
                        <input type="text" name='name' className='contact_form_input' placeholder='Insert your name' />
                    </div>
                    
                    <div className="contact_form_div">
                        <label htmlFor="" className="contact_form-tag">Email</label>
                        <input type="email" name='email' className='contact_form_input' placeholder='Insert your email' />
                    </div>

                    <div className="contact_form_div">
                        <label htmlFor="" className="contact_form-tag">Write </label>
                        <textarea name="project" cols="30" rows="10" className='contact_form_input contact_form_area' placeholder='write your project'></textarea>
                    </div>
                    <button className="button button_flex">
                        Send Message <i className="fa-regular fa-paper-plane"></i>
                    </button>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact