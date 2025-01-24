import React from "react";
import { Link } from "react-router-dom";
import CompetenceS from "./CompetenceS";

const CardProjet = ({ id, titre, tag, competences }) => {

//  console.log(competences)
//  const comp = Array.from({ competences })
//  console.log(comp)

  return (
    <Link>
      <div className="cardProjet">
        <div className="cardProjet__info">
          <p className="cardProjet__info__tag">{tag}</p>
          <p className="cardProjet__info__titre">{titre}</p>
          {competences.map(({ competence }) => (
            <CompetenceS key={`${competence}`} competence={competence} />
          ))}
        </div>
      </div>
    </Link>
  );
};

export default CardProjet;
