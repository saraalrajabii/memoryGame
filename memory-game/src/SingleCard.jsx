import React from "react";

import"./SingleCard.css"

export function SingleCard({ card , handleChoice }) {

const handleClick =()=>{
    handleChoice(card)  // card that we choose it 
}

  return (
    <div className="card">
      <div>
        <img className="front" src={card.src} alt={"front"}></img>
        <img
          className="back"
          src={"../public/assets/cover.png"}
          onClick={handleClick}
          alt={"back"}
        ></img>
      </div>
    </div>
  );
}
