import React from "react";
import { Link } from "react-router-dom";

const CardProjet = () => {
  return (
    <Link>
      <div className="cardProjet">
        <div className="cardProjet__info">
          <p className="cardProjet__info__tag">tag</p>
          <p className="cardProjet__info__titre">titre</p>
          <div className="cardProjet__info__competences"></div>
          <p>competence</p>
        </div>
      </div>
    </Link>
  );
};

export default CardProjet;
