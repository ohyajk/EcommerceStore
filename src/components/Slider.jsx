import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <>
        <Carousel showArrows={true} labels={false} showThumbs={false} >
                <div>
                <img src="https://loremflickr.com/1080/260?random=1" />
                </div>
                <div>
                <img src="https://loremflickr.com/1080/260?random=2" />
                </div>
                <div>
                <img src="https://loremflickr.com/1080/260?random=3" />
                </div>
                
            </Carousel>
    </>
  )
}

export default Slider