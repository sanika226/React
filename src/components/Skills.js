import React from 'react'
import myskill from '../components/images/myskills.svg'
import '../css/Skills.css'


function Skills() {
    let skills=[{
    skillName:"HTML",
    skillPercent:"80%"
    },
    { skillName:"CSS",
      skillPercent:"80%"
    },

    {
    skillName:"Javascript",
    skillPercent:"60%"
     },
     {
     skillName:"Bootstrap",
     skillPercent:"80%"
     },
     {
     skillName:"React Js",
     skillPercent:"60%"
     },
     {
     skillName:"C",
     skillPercent:"50%"
     },
     {
    skillName:"C++",
    skillPercent:"50%"
         }]
    return (
         <div id="skills" className="skills-container p-5">
      <div className="skills-img">
      <div className="row">
      <h1 className="text-center text-white text-bold">My Skills</h1>
        <img src={myskill} alt="" height="200" width="200" />
       
      </div>
    </div>
    <div className="container">
      <div className="row ">
        {skills.map((item, id) => (
          <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12">
            <div className="skill-text p-2">
              <h5 className="text-white text-bold">{item.skillName}</h5>
            </div>
            <div class="progress">
              <div
                class="progress-bar" 
                role="progressbar"
                style={{
                  width: `${item.skillPercent}`,
                  backgroundColor: "blue",
                }}
                aria-valuenow={item.skillPercent}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {item.skillPercent}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);
}



export default Skills
