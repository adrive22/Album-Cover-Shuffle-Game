//this is the componenet/method that will loop through the cards from cardImages.js file to get through the 

import React from "react";
import cardsArray from "./cardImages";


import Card from "./card";

const Cards = () => {
    return cardsArray.map( item => <Card cardData={ item }/> )
};

export default Cards;