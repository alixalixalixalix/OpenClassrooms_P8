import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompetenceS from "./CompetenceS";

const CardProjet = ({ id, titre, tag, competences, imageCouv }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <Link to={`projet/${id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <article
        className="cardProjet"
        style={{
          backgroundImage: hover ? `linear-gradient(rgba(255,212,56,0.8), rgba(255,212,56,0.8)), url(${imageCouv})` : `url(${imageCouv})`,
          backgroundSize: `cover`,
        }}
      >
        <div className="cardProjet__info" style={{ opacity: hover ? "1" : "0"}}>
          <p className="cardProjet__info__tag">{tag}</p>
          <p className="cardProjet__info__titre">{titre}</p>
          <div id="listCompetences">
            {competences.map((competence, index) => (
              <CompetenceS key={index} competence={competence} />
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
};

export default CardProjet;
