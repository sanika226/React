import React from 'react'
import '../css/Mywork.css'
import Ecommerce from '../components/images/Ecommerce.jpg'
import Web from '../components/images/web.jpg'
import food from '../components/images/food.jpg'

function Mywork() {
  let work=[{
    cardHeader:"project 1",
    cardImg:Ecommerce,
    projectDescription:"Ecommerce web project",
    projectInfo:["HTML", "CSS", "Javascript"],
    id:"one"
  },{
    cardHeader:"project 2",
    cardImg:Web,
    projectDescription:"web developement",
    projectInfo:["HTML", "CSS", "Javascript", "React js", "Express"],
    id:"two"
  },{
    cardHeader:"project 3",
    cardImg:food,
    projectDescription:"burger web ",
    projectInfo:["HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
    "React js",
    "Express"],
    id:"three"
  },{
  cardHeader:"project 1",
  cardImg:Ecommerce,
  projectDescription:"Ecommerce web project",
  projectInfo:["HTML", "CSS", "Javascript"],
  id:"one"
}
]
    return (
        <div>
            <div id="mywork" className="mywork p-4">
            <h1 className="text-white text-center text-bold">My work</h1>
            <div className="row">
              {work.map((item, id) => (
                <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 mt-4">
                    <div className="card p-5"  style={{width:"100%"}}>
                        <div className="text-center card-header fw-bold">{item.cardHeader}
                        <div className="card-img-top">
                            <img src={item.cardImg}
                            className=""
                               height="300px"
                               width="100%"/>

                        </div>

                        </div>
                        <div className="card-body ">
                        <div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button text-dark" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}`} aria-expanded="true" aria-controls={`#${item.id}`}>
        project Details
      </button>
    </h2>
    <div id={item.id} class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <p>{item.projectDescription}</p>
        <ul>
      
        {item.projectInfo.map((element,id)=>(
          <li key={id}>{element}</li>
        
        ))}
        </ul>
      </div>
    </div>
  </div>

                        </div>
                        <div className="card-footer d-flex justify-content-around">
                          <a className="btn btn-success" href="https://github.com/">
                            Source Code
                          </a>
                          <a className="btn btn-success" href="">
                            Watch Video
                          </a>
                          </div>

                    </div>

                </div>

            </div>
            
              ))}
        </div>
        </div>
   </div>
    )
}

export default Mywork
