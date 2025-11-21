import "./Profile.css";
import OisImage from "../../../images/Ois.webp"; // ajusta la ruta según dónde esté Profile.jsx

const Profile = () => {
  return ( 
    <div className="profile site__section">
      <img className="profile__image" src={OisImage} alt="Avatar" />
      <div className="profile__details">
        <h1 className="profile__name">Anette Morones</h1>
        <button
          aria-label="Edit traveler profile"
          className="profile__edit-btn"
          type="button"
          id="button-edit"
        ></button>
        <p className="profile__bio">PhD in Information Technology</p>
      </div>
      <button
        aria-label="Add new place"
        className="profile__add-place-btn"
        type="button"
      ></button>
    </div>
  );
}

export default Profile;
