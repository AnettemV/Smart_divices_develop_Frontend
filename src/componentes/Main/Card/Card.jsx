import "./Card.css";

const Card = (props) => {
  const { card, handleDeleteCard, handleUpdateCard } = props;
  return (
    <div className="card">
      <img className="card__image" src={card.link} alt="" />
      <button
        aria-label="Remove place"
        className="card__delete-button"
        type="button"
        onClick={() => {
          console.log(card);
          handleDeleteCard(card);
        }}
      ></button>
      <div className="card__description">
        <h2 className="card__title">{card.name}</h2>
        <button
          aria-label="Like place"
          className={
            card.like
              ? "card__like-button"
              : "card__like-button card__like-button_is-active"
          }
          type="button"
          onClick={() => {
            console.log(card);
            handleUpdateCard(card);
          }}
        ></button>
      </div>
    </div>
  );
};

export default Card;