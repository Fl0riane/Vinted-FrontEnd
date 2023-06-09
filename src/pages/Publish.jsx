import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import PublishInput from "../components/PublishInput";

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
      console.log(token);
      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return token ? (
    <section className="grey">
      <div className="post">
        <h2>Vends ton article</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              id="filePiker"
              type="file"
              onChange={(event) => {
                setPicture(event.target.files[0]);
              }}
            />
            {picture && (
              <img src={URL.createObjectURL(picture)} alt="file upload" />
            )}
          </div>

          <div>
            <PublishInput
              label="Title"
              type="text"
              id="Titre"
              placeholder="ex: chemise noire"
              state={title}
              setState={setTitle}
            />
            <PublishInput
              label="Description"
              type="textearea"
              id="Description"
              placeholder="ex: peu portée"
              state={description}
              setState={setDescription}
            />
          </div>
          <div>
            <PublishInput
              label="Marque"
              type="text"
              id="Marque"
              placeholder="ex: Zara"
              state={marque}
              setState={setMarque}
            />
            <PublishInput
              label="Taille"
              type="text"
              id="Taille"
              placeholder="ex: L/40"
              state={taille}
              setState={setTaille}
            />
            <PublishInput
              label="Couleur"
              type="text"
              id="Couleur"
              placeholder="ex: Noire"
              state={couleur}
              setState={setCouleur}
            />
            <PublishInput
              label="Etat"
              type="text"
              id="Etat"
              placeholder="ex: neuf avec étiquette"
              state={etat}
              setState={setEtat}
            />
            <PublishInput
              label="Lieu"
              type="text"
              id="Lieu"
              placeholder="ex: Tours"
              state={lieu}
              setState={setLieu}
            />
          </div>
          <div>
            <PublishInput
              label="Prix"
              type="number"
              id="Prix"
              placeholder="ex: 40"
              state={prix}
              setState={setPrix}
            />
            <input
              type="checkbox"
              label="je suis interessé(é) par les échanges"
            />
          </div>
        </form>
        <span>
          <button type="Submit">Ajouter</button>
        </span>
      </div>
    </section>
  ) : (
    <Navigate to="/login" />
  );
};

export default PublishForm;
