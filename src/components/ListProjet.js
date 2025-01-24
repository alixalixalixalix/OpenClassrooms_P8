import React from "react";
import TitreSection from "./TitreSection";
import CardProjet from "./CardProjet";
import data from "../data/projets.json";

const dataLength = data.length;

const ListProjet = () => {
  return (
    <section className="marginApp">
      <TitreSection titre="Projets " num={dataLength}/>
      <div id="listButtonCategorie">
        <button className="tous actif">Tous</button>
        <button className="design">Design</button>
        <button className="developpement">Développement</button>
      </div>
      <div id="listProjet">
        {data.map(({ id, titre, tag, competences }) => (
          <CardProjet key={`${titre}-${id}`} id={id} titre={titre} tag={tag} competences={competences} />
        ))}
      </div>
    </section>
  );
};

export default ListProjet;

