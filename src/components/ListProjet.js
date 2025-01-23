import React from "react";
import TitreSection from "./TitreSection";
import CardProjet from "./CardProjet";

const ListProjet = () => {
  return (
    <section className="marginApp">
      <TitreSection titre="Projets 06" />
      <div id="listButtonCategorie">
        <button className="tous">Tous</button>
        <button className="design">Design</button>
        <button className="developpement">Développement</button>
      </div>
      <div id="listProjet">
        <CardProjet />
        <CardProjet />
        <CardProjet />
      </div>
    </section>
  );
};

export default ListProjet;
