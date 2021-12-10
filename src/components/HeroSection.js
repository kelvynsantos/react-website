import React from 'react'
import { Button } from './Button'
import './HeroSection.css'; 
import '../App.css';

function HeroSection() {
    return (
        <div className="hero-container">
         <video src="/videos/video-1.mp4" autoPlay loop muted/> 
         <h1>Aventuras estão te esperando</h1> 
         <p>O que você está esperando ?</p> 
         <div className='hero-btns' >
            <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'> 
                Começar</Button>
            <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
                Assista o trailer <i className="far fa-play-circle"/></Button>
         </div>
        </div>
    )
}

export default HeroSection
