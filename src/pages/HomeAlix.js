import React from "react";
import Presentation from "../components/Presentation";
import ListProjet from "../components/ListProjet";
import ListCompetence from "../components/ListCompetence";
import Footer from "../components/Footer";

const HomeAlix = () => {
  return (
    <div>
      <Presentation />
      <ListProjet />
      <ListCompetence />
      <Footer />
    </div>
  );
};

export default HomeAlix;
