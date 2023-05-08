import { useState } from "react";
import axios from "axios";

const PublishForm = ({ handlToken }) => {
  // const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [marque, setMarque] = useState("");
  const [taille, setTaille] = useState("");
  const [couleur, setCouleur] = useState("");
  const [etat, setEtat] = useState("");
  const [lieu, setLieu] = useState("");
  const [prix, setPrix] = useState("");
  const token = handlToken;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      // formData.append("product_image.url", picture);
      formData.append("product_name", title);
      formData.append("product_description", description);
      formData.append("product_details.MARQUE", marque);
      formData.append("product_details.TAILLE", taille);
      formData.append("product.details.COULEUR", couleur);
      formData.append("product.details.ETAT", etat);
      formData.append("product.details.EMPLACEMENT", lieu);
      formData.append("product_price", prix);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          hearders: {
            authorizattion: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log({ token });
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="container">
      <div className="form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="">Titre</label>
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
              placeholder="ex : 40€"
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
