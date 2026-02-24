import React, { useState } from "react";

function JeuDe({ secretFace = 2 }) {
  // States
  const [face, setFace] = useState(null);   // null = image initiale
  const [essais, setEssais] = useState(0);
  const [gagne, setGagne] = useState(false);

  // Fonction jouer
  const jouer = () => {
    if (gagne === true) {
      return;
    }

    // Générer un nombre entre 1 et 6
    const valeur = Math.floor(Math.random() * 6) + 1;

    setFace(valeur);
    setEssais(essais + 1);

    // Vérifier si la face est trouvée
    if (valeur === secretFace) {
      setGagne(true);
    }
  };

  // Réinitialiser le jeu
  const initialiser = () => {
    setFace(null);
    setEssais(0);
    setGagne(false);
  };

  // Choix de l'image
  const imageSrc =
    face === null
      ? "/dice/dice-init.png"
      : `/dice/dice${face}.png`;

  return (
    <div className="card">
      <h1 className="title">Jeu de Dé...</h1>

      <div className="image-container">
        <img src={imageSrc} alt="dé" className="dice-image" />
      </div>

      <div className="info">
        <p><b>face :</b> {face === null ? "-" : face}</p>
        <p><b>nombre d'essais :</b> {essais}</p>
      </div>

      {gagne && (
        <p className="success">
          Bravo vous avez trouvé la face cachée...
        </p>
      )}

      <div className="actions">
        {!gagne ? (
          <button onClick={jouer}>Jouer</button>
        ) : (
          <button onClick={initialiser}>Initialiser</button>
        )}
      </div>
    </div>
  );
}

export default JeuDe;
