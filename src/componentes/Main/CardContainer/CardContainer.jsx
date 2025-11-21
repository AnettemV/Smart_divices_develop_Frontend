import Card from "../Card/Card";
import "./CardContainer.css";

const CardContainer = ({ props }) => {
  const { cards, handleDeleteCard } = props;

  return (
    <div className="card-container">
      <ul className="card-container__list">
        {cards.map((card) => (
          <Card
            key={card._id || card.id}
            props={{ card, handleDeleteCard }}
          />
        ))}
      </ul>
    </div>
  );
};

export default CardContainer;
