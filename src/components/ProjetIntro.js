import React from "react";
import CompetenceS from "./CompetenceS";

const ProjetIntro = ({ titre, competences, contexte }) => {
  return (
    <div id="projetIntro" className="marginApp">
      <div className="projetIntro__listCompetences">
        {competences.map((competence, index) => (
          <CompetenceS key={index} competence={competence} />
        ))}
      </div>
      <h1>{titre}</h1>
      <div className="projetContexte">
        <p className="conteneurP__titre">Contexte</p>
        <p className="conteneurP__content">{contexte}</p>
      </div>
    </div>
  );
};

export default ProjetIntro;
