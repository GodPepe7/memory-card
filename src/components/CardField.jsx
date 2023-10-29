import Card from "./Card";
import { useEffect, useState } from "react";

function CardField({ addAlreadyClicked }) {
  const [cardOrder, setCardOrder] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const fetchPokemonCards = async () => {
      const randomPage = "page=" + Math.floor(Math.random() * 1000);
      const API_KEY = "a921fe53-4a03-448a-a937-2d18f74e8a65";
      const URL = `https://api.pokemontcg.io/v2/cards?pageSize=10&${randomPage}`;
      const response = await fetch(URL, {
        headers: { "X-Api-Key": API_KEY },
      });
      const pokemon = await response.json();
      setCards(pokemon.data);
    };
    fetchPokemonCards();
  }, []);

  const shuffleOrder = () => {
    const shuffled = [...cardOrder].sort(() => Math.random() - 0.5);
    setCardOrder(shuffled);
  };

  return (
    <div className="card-container">
      {cards.length !== 0 &&
        cardOrder.map((idx) => (
          <Card
            key={cards[idx].id}
            id={cards[idx].id}
            name={cards[idx].name}
            img={cards[idx].images.small}
            shuffleOrder={shuffleOrder}
            addAlreadyClicked={addAlreadyClicked}
          ></Card>
        ))}
    </div>
  );
}

export default CardField;
