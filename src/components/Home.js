import React from 'react'
import '../css/Home.css'
import Navbar from './Navbar'
import home from '../components/images/home.svg'

function Home() {
    return (
        <div className="Home-container ">
            <Navbar/>
            <div className="Home-content d-flex justify-content-around flex-wrap">
                <div className="Home-text text-white align-self-center">
                    <h1>Sanika Sunil Patil</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
            minus corrupti perferendis sapiente veritatis inventore architecto
            neque unde quo blanditiis!</p>
                </div>
                <div className="Home-img pb-3">
                    <img src={home} width="500px" height="500px"></img>

                </div>
                </div>
                <div className="down-icon pb-5">
                    <a href="#about">
                    <i class="far fa-arrow-alt-circle-down"></i>
                    </a>
                </div>
            </div>
    )
}

export default Home
