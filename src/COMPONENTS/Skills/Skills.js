import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <section className="skills" id="skills">
         <h2 className="section_title">Skills</h2>
        <span className="section_subtitle">My technical level</span>
        <div className="skills_container container grid">

          {/* skills content start */}
            <div className="skills_content">
                <h3 className="skills_title">Skills</h3>

                <div className="skills_box">
                  <div className="skills_group">

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                        <div>
                          <h3 className="skills_name">HTML</h3>
                          <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                        <div>
                          <h3 className="skills_name">CSS</h3>
                          <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>

                        <div>
                          <h3 className="skills_name">Javascript</h3>
                          <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                 

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                        <div>
                          <h3 className="skills_name">Bootstrap</h3>
                          <span className="skills_level">Intermediate</span>
                        </div>
                    </div>

                    </div>
                    <div className="skills_group">

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                        <div>
                          <h3 className="skills_name">Git</h3>
                          <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                        <div>
                          <h3 className="skills_name">React</h3>
                          <span className="skills_level">Intermediate</span>
                        </div>
                    </div>
                    
                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                        <div>
                          <h3 className="skills_name">Node Js</h3>
                          <span className="skills_level">Basic</span>
                        </div>
                    </div>

                    <div className="skills_data">
                      <i className="bx bx-badge-check"></i>
                        <div>
                          <h3 className="skills_name">Java</h3>
                          <span className="skills_level">Basic</span>
                        </div>
                    </div>

                  </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
