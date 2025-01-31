import React from "react";
import CompetenceS from "./CompetenceS";
import { Link } from "react-router-dom";

const ProjetIntro = ({ titre, competences, categorie, contexte, lien }) => {
  return (
    <div id="projetIntro" className="marginApp">
      <div className="projetIntro__listCompetences">
        {competences.map((competence, index) => (
          <CompetenceS key={index} competence={competence} />
        ))}
      </div>
      <h1>{titre}</h1>
      <div class="projetContexte">
        <div className="conteneurP">
          <p className="conteneurP__titre">Contexte</p>
          <p className="conteneurP__content">{contexte}</p>
        </div>
        <div className="conteneurLien">
          <a href={lien} target="blank">
            <button>
              Consulter le projet sur{" "}
              {categorie === "Design" ? `Behance` : `Github`}
              <img src="/icons/picto-ext.svg" alt=""></img>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjetIntro;
