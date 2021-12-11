import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Veja esses destinos INCRÍVEIS!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore as cachoeiras escondidas da floresta amazônica'
              label='Aventura'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Viaje pelas ilhas de Bali em um cruzeiro privado'
              label='Luxo'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Navegue no oceano Atlântico visitando águas desconhecidas'
              label='Mistério'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Jogue futebol no topo das montanhas dos Himalaias'
              label='Aventura'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ande de canelo pelo desserto do Sahara em uma tour guiada'
              label='Adrenalina'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;