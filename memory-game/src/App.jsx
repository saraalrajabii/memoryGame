import { useEffect, useState } from "react";
import "./App.css";
import { SingleCard } from "./SingleCard";
// import { cardImage } from "../public/assets/index";

function App() {
  // we need to do 3 things
  //1. we need to duplicate card once , we need to two card for each image
  //2. we need to randomly called card in sort method
  //3. give it random id

  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const cardImage = [
    { src: "../public/assets/cake.png", match: false },
    { src: "../public/assets/candle.png", match: false },
    { src: "../public/assets/car.png", match: false },
    { src: "../public/assets/cookie.png", match: false },
    { src: "../public/assets/gift.png", match: false },
    { src: "../public/assets/ice.png", match: false },
  ];

  const container = () => {
    const allCards = [...cardImage, ...cardImage]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(allCards);
    setTurns(0);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  const handleReset = () => {
    setChoiceTwo(null);
    setChoiceOne(null);
    setTurns((prev) => prev + 1);
  };

  // compare 2 card
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards((prev) => {  // we need to update state 
          return prev.map(card =>{   // return new arr based on prev arr
           if(card.src === choiceOne){
            return {...card , match : true}
           }else{
            return card 
           } 
          })
        });

        handleReset();
      } else {
        console.log("false");
        handleReset();
      }
    }
  }, [choiceOne, choiceTwo]);

  return (
    <div className="App">
      <p title="hii" className="text-black"> Memory Game</p>
      <a href="file:///C:/Users/s.alrajabi/Downloads/IPR%20indicator_.pdf" download>ggg</a>
      <marqee  direction="right">hoiiiiiiiiiiiiii</marqee>
      <button onClick={container}>new Game</button>

      <div className="card-grid">
        {cards.map((card) => {
          return (
            <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
          );
        })}
      </div>
      <span className="text-black"> turns: {turns}</span>
    </div>
  );
}

export default App;
