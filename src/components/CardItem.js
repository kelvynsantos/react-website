import React from 'react' 
import { Link } from 'react-router-dom';

function CardItem(props) {
    return ( 
        <>
        <li className="card__item"> 
            <Link className="cards__item__link" to={props.path}>
                 <figure className="card__item__pic-wrap" data-category={props.label}> 
                    <img src={props.src} alt="Imagem viagem" className="card__item__img"> 
                    </img>
                 </figure>
                 <div className="card__item__info"> 
                    <h5 className="card__item__text">
                         {props.text}
                    </h5>
                 </div>
            </Link>
        </li>
        </>
    );
}

export default CardItem;
