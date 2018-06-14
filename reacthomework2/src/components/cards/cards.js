//this is the componenet/method that will loop through the cards from cardImages.json file and seperate them out into 
//individual objects

import React from "react";
import cardsImages from "./cardImages.json";
import Card from "./card";

const Cards = () => {
    return cardsImages.map( item => <Card cardData={ item }/> )
};

export default Cards;