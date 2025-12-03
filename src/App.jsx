import { useEffect, useState } from "react";
import Header from "./componentes_temp/Header/Header";
import { AppContext } from "./componentes_temp/Context/AppContext"; 
import "./App.css";
import Main from "./componentes_temp/Main/Main";
import Footer from "./componentes_temp/Footer/Footer";
import api from "./dataProvider/api";

function App() {
  const [cards, setCards] = useState([]); 

  useEffect(() => {
    const fetchCards = async () => {
      try {
        const data = await api.getAllCards();
        setCards(data);
      } catch (error) {
        console.error("Error getting cards:", error);
      }
    };

    fetchCards();
  }, []);

  async function handleDeleteCard(card) {
  await api
    .deleteCard(card._id)
    .then(() => {
      const newArray = cards.filter(
        (currentCard) => currentCard._id !== card._id
      );
      setCards(newArray);
    })
    .catch((error) => console.error(error));
}
async function handleUpdateCard(card) {
  const likeinvertido = !card.like;
  await api
    .updateCard(card._id, likeinvertido)
    .then(() => {
      //card.like = !card,like;
      const temp  = {...card, like: likeinvertido};
      console.log(temp);

      //const cartemporal = [{}, {},{}];
     setCards((prev) => {
          return prev.map((element) =>{
            return element._id=== temp._id ? temp: element
          })
        })
    })
    .catch((error) => console.error(error));
  }

  return (
    <AppContext.Provider value={{ cards, setCards }}>
      <div className="app">
        <div className="app__content">
          <Header />

          {/* Aquí enviamos TODO dentro de props */}
          <Main 
            cards={cards} 
            handleDeleteCard={handleDeleteCard} 
            handleUpdateCard={handleUpdateCard}
          />

          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
