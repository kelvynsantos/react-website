import React from 'react'
import { Button } from './Button'

function HeroSection() {
    return (
        <div className="hero-container">
         <video src="public\videos\video-1.mp4" autoPlay loop muted/> 
         <h1>Aventuras estão te esperando</h1> 
         <h1>O que você está esperando ?</h1> 
         <div className='hero-btns' >
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>Começar</Button>
         </div>
        </div>
    )
}

export default HeroSection
