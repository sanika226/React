import React from 'react'
import reading from '../components/images/reading.svg'
import '../css/About.css'

function About() {
    return (
        
        <div id="about" className="text-white pb-5">
          <h1 className="text-center fw-bold pb-5 pt-3">About Me</h1>
          <div className="d-flex justify-content-around p-2">
            <div className="about-text d-flex align-items-center">
              <div className="content">
                <h2> I'm sanika sunil patil</h2>     
                  <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
                  labore cumque doloribus porro nemo. Nostrum tempore magnam
                  exercitationem veritatis suscipit quasi qui quos asperiores
                  atque et. Quos totam esse culpa!Lorem ipsum dolor sit amet
                  consectetur adipisicing elit. Ipsa labore cumque doloribus porro
                  nemo. Nostrum tempore magnam exercitationem veritatis
                </p>
                <div className="social-icons d-flex">
                  <div className="github-icon">
                    <a href="#">
                      <i class="fab fa-github"></i>
                    </a>
                  </div>
                  <div className="twitter-icon">
                    <a href="#">
                      <i class="fab fa-twitter"></i>
                    </a>
                  </div>
                  <div className="mail-icon">
                    <a href="#">
                      <i class="fas fa-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-photo">
              <img
                src={reading}
                className="rounded"
                alt=""
                
                height="380"
              />
            </div>
           
          </div>
          </div>
      
       
                 
    )
}

export default About
