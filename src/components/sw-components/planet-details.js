import React from "react";
import ItemDetails, { Record } from "../item-details/item-details";
import swapiServiceHOC from "../../HOC/swapiServiceHOC";

const PlanetDetails = props => {
  return (
    <ItemDetails {...props}>
      <Record field="population" label="Population: " />
      <Record field="rotationPeriod" label="Rotation period: " />
      <Record field="diameter" label="Diameter: " />
    </ItemDetails>
  );
};

const mapMethodsToProps = swapiService => {
  return {
    getData: swapiService.getPlanet,
    getImageUrl: swapiService.getPlanetImage
  };
};

export default swapiServiceHOC(mapMethodsToProps)(PlanetDetails);
