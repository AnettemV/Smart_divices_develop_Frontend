import "./Main.css";
import Profile from "./Profile/Profile";
import CardContainer from "./CardContainer/CardContainer";

const Main = ({ cards, handleDeleteCard }) => {
  return (
    <main className="main">
      <section className="traveler">
        <Profile />
      </section>

      <section className="gallery">
        <CardContainer 
          props={{ cards, handleDeleteCard }}
        />
      </section>
    </main>
  );
};

export default Main;
