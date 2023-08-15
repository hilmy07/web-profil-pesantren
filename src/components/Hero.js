import React from 'react'
import {Carousel} from 'react-bootstrap'
import hero1 from './../assets/hero1.jpg'
import hero2 from './../assets/hero2.jpg'
import hero3 from './../assets/hero3.jpg'

const Hero = () => {
  return (
    <Carousel>
        <Carousel.Item>
            <img 
            className='d-block w-100'
            src={hero1}/>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className='d-block w-100'
            src={hero2}/>
        </Carousel.Item>
        <Carousel.Item>
            <img 
            className='d-block w-100'
            src={hero3}
            />
        </Carousel.Item>
        </Carousel>
  )
}

export default Hero