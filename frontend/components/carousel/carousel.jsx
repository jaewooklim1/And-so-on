import React, { Component } from 'react'  
import Carousel from 'react-bootstrap/Carousel'  

export class PicCarousel extends Component {  

    render() {  
        return (  
            <div class='Carousel-container' >  
                <Carousel>  
                    <Carousel.Item style={{'height':"300px"}} > 
                        <img style={{'height':"300px"}}  
                            className="d-block w-100" 
                            src="https://i.imgur.com/Nk7wumt.jpg"  /> 
                        <Carousel.Caption>  
                            <h3>First Pic</h3>  
                        </Carousel.Caption>  
                    </Carousel.Item  >  
                    <Carousel.Item style={{'height':"300px"}} > 
                        <img style={{'height':"300px"}}  
                            className="d-block w-100" 
                            src="https://i.imgur.com/a33UaR2.jpg"  /> 
                        <Carousel.Caption>  
                            <h3>Second Pic</h3>  
                        </Carousel.Caption>  
                    </Carousel.Item  >  
                    <Carousel.Item style={{'height':"300px"}} > 
                        <img style={{'height':"300px"}}  
                            className="d-block w-100" 
                            src="https://i.imgur.com/TS2Cf3P.jpg"  /> 
                        <Carousel.Caption>  
                            <h3>Third Pic</h3>  
                        </Carousel.Caption>  
                    </Carousel.Item>  
                </Carousel>
            </div>
        )
    }
}

export default PicCarousel  



