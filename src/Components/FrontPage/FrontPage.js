import React, { Component } from 'react'
import './FrontPage.css'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"

export default class FrontPage extends Component {
    render() {
        return (
            <div className="topMain">
                <Carousel showArrows={false} showThumbs={false} showIndicators={false} stopOnHover={false} autoPlay={true} showStatus={false} infiniteLoop={true}>
                    <div>
                        <img src="/Images/IMG-4132.jpg" alt="img1" />
                    </div>
                    <div>
                        <img src="/Images/IMG-4116.jpg" alt="img2" />
                    </div>
                    <div>
                        <img src="/Images/IMG_38431.jpg" alt="img3"/>
                    </div>
                </Carousel>
                
                <div id="myModal" className="modal-out">
                 
                    <div className="modal-in">
                        <div className="mainImg">
                            <img src="/Images/Logo.svg" alt="" />
                            <Link to="/home">
                             <button className="buttonMain">Trust</button>
                            </Link> 
                        </div>
                        
                    </div>
                </div>    
            </div>
        )
    }
}
