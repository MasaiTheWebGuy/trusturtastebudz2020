import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import './Gallery.css'

export default class Gallery extends Component {
    
  
    render() {
        return (
            <div>
                
               <Carousel showArrows={false} showThumbs={false} showIndicators={false} stopOnHover={false} autoPlay={true}>
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
            </div>
        )
    }
}
