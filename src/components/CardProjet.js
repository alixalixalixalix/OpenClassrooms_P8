import React, { useState } from "react";
import { Link } from "react-router-dom";
import CompetenceS from "./CompetenceS";

const CardProjet = ({ id, titre, tag, competences, imageCouv, color }) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  return (
    <Link to={`projet/${id}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <article
        className="cardProjet"
        style={{
          backgroundImage: hover ? `${color}, url(${imageCouv})` : `url(${imageCouv})`,
          backgroundSize: `cover`,
        }}
      ><div className="filtre"></div>
        <div className="cardProjet__info" style={{ opacity: hover ? "1" : ""}}>
          <p className="cardProjet__info__tag">{tag}</p>
          <h2 className="cardProjet__info__titre">{titre}</h2>
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
