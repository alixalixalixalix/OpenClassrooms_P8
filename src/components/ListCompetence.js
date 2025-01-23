import React from "react";
import TitreSection from "./TitreSection";
import CompetenceXL from "./CompetenceXL";
import data from "../data/competences.json";

const ListCompetence = () => {
  return (
    <div className="marginApp">
      <TitreSection titre="Compétences 09" />
      {data.map(({competence}) => (
        <CompetenceXL competence={competence} />
      ))}
    </div>
  );
};

export default ListCompetence;
