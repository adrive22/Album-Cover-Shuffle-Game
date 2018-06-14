import React from "react";
import cardsArray from "./cardImages";


import Card from "./card";

const Cards = () => {
    return cardsArray.map( item => <Card cardData={ item }/> )
};

export default Cards;