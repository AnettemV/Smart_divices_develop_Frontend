import { useEffect, useState } from "react";
import Header from "./componentes/Header/Header";
import { AppContext } from "./componentes/Context/AppContext"; 
import "./App.css";
import Main from "./componentes/Main/Main";
import Footer from "./componentes/Footer/footer";
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
  await api
    .updateCard(card.id, true)
    .then(() => {
      console.log("Pues aqui va a pasar algo despues de afectar el backend");
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
          />

          <Footer />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
