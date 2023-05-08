import { useState, useNavigate } from "react";
import axios from "axios";

const PublishForm = ({ token }) => {
  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marque, setMarque] = useState("");
  const [taille, setTaille] = useState("");
  const [couleur, setCouleur] = useState("");
  const [etat, setEtat] = useState("");
  const [lieu, setLieu] = useState("");
  const [prix, setPrix] = useState("");
  const navigate = useNavigate;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", marque);
      formData.append("size", taille);
      formData.append("color", couleur);
      formData.append("condition", etat);
      formData.append("city", lieu);
      formData.append("price", prix);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      // console.log(token);
      console.log(response.data);
      navigate("/");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div className="container">
      <h2>Vends ton article</h2>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="Title">Titre</label>
          <input
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          ></input>
          <input
            id="Titre"
            type="text"
            placeholder="ex: chemise noire"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <label htmlFor="Description">Description</label>
          <input
            id="Description"
            type="text"
            placeholder="ex: peu portée"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <label htmlFor="Marque">Marque</label>
          <input
            id="Marque"
            type="text"
            placeholder="ex: Zara"
            value={marque}
            onChange={(event) => {
              setMarque(event.target.value);
            }}
          />
          <label htmlFor="Taille">Taille</label>
          <input
            id="Taille"
            type="text"
            placeholder="ex: L/40"
            value={taille}
            onChange={(event) => {
              setTaille(event.target.value);
            }}
          />
          <label htmlFor="Couleur">Couleur</label>
          <input
            id="Couleur"
            type="text"
            placeholder="ex : Noire"
            value={couleur}
            onChange={(event) => {
              setCouleur(event.target.value);
            }}
          />
          <label htmlFor="Etat">Etat</label>
          <input
            id="Etat"
            type="text"
            placeholder="ex : Neuf avec etiquette"
            value={etat}
            onChange={(event) => {
              setEtat(event.target.value);
            }}
          />
          <label htmlFor="Lieu">Lieu</label>
          <input
            id="Lieu"
            type="text"
            placeholder="ex : Paris"
            value={lieu}
            onChange={(event) => {
              setLieu(event.target.value);
            }}
          />
          <div>
            <label htmlFor="Prix">Prix</label>
            <input
              id="Prix"
              type="text"
              placeholder="ex : 40"
              value={prix}
              onChange={(event) => {
                setPrix(event.target.value);
              }}
            />
            <input
              type="checkbox"
              label="je suis interessé(é) par les échanges"
            />
          </div>
          <button type="Submit">Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default PublishForm;
