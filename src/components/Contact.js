import React from 'react'
import contact from '../components/images/contact.svg'
import '../css/Contact.css'

function Contact() {
    return (
          <div id="contact" className="contact-container p-4"> 
            <footer  className="text-white">
                <h1 className="text-white text-bold text-center">Get in Touch</h1>
                <div className="row justify-content-around">
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <img
                        src={contact}
                        width="100%"
                        height="300"
                        className="img-responsive"/>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <form>
                        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Name</label>
  <input type="Name" class="form-control" id="exampleFormControlInput1" placeholder="Enter Name"/>

  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="E-mail Address"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Send a message" rows="5"></textarea>
</div>
                        </form>
                        <div className="social-icons d-flex justify-content-around">
         <div className="mail">
        <i class="fas fa-envelope"></i>

         </div>
            <div className="github">
              <i class="fab fa-github"></i>
            </div>
            <div className="linkedin">
              <i class="fab fa-linkedin"></i>
            </div>
            <div className="twitter">
              <i class="fab fa-twitter"></i>
            </div>

                        </div>
                        
                        
                        
                        </div>
                </div>

            </footer>
            </div>
        
    )
}

export default Contact
