import React from "react";
import cards from "./cards.css";

const Card = (props) => {
    console.log(props)
    return (
        <div className="cardsContainer">
            <img className="cardImages" alt="placeholder" src={require(`../../images/${props.cardData.image}`)}/>
            
        </div>        
    )
}

export default Card;