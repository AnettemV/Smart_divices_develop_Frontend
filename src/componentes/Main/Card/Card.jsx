import "./Card.css";

const Card = ({ props }) => {
  const { card, handleDeleteCard } = props;

  return (
    <li className="card">
      <img className="card__image" src={card.link} alt={card.name} />

      <button
        aria-label="Remove place"
        className="card__delete-button"
        type="button"
        onClick={() => handleDeleteCard(card)}
      ></button>

      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>

        <button
          aria-label="Like place"
          className="card__like-button"
          type="button"
        ></button>
      </div>
    </li>
  );
};

export default Card;
