import React from "react";
import Headrer from "../header";
import RandomPlanet from "../random-planet";
import ItemList from "../item-list";
import PersonDetails from "../person-details";

import "./app.css";

const App = () => {
  return (
    <div>
      <Headrer />
      <RandomPlanet />
      <div className="rew mb2">
        <ItemList />
      </div>
      <div>
        <PersonDetails />
      </div>
    </div>
  );
};

export default App;
