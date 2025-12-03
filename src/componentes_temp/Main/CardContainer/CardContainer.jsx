import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = ({ cards, handleDeleteCard, handleUpdateCard }) => {
  console.log("Dentro de cards");
  console.log(cards);

  return (
    <div className="card-container">
      <ul className="card-container__list">
        {cards.map((card, index) => (
          <li key={index}>
            <Card
              card={card}
              handleDeleteCard={handleDeleteCard}
              handleUpdateCard={handleUpdateCard}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardContainer;