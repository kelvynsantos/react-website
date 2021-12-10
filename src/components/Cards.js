import React from 'react'
import CardItem from './CardItem'

function Cards() { 
    return (
        <div className="cards">
            <h1>Veja esses destinos INCRÍVEIS!</h1> 
            <div className="cards__container">
                 <div className="card__wrapper">
                     <ul className="cards__items"> 
                        <CardItem
                          scr='/images/img-9.jpg'
                          text="Explore as cachoeiras escondidas da floresta amazônica" 
                          label="Aventura" 
                          path="/services"
                          />
                     </ul>
                 </div>
            </div>
        </div>
    )
}

export default Cards;
