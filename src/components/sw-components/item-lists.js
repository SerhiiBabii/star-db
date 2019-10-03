import React from "react";
import ItemList from "../item-list";
import ItemListHOC from "../../HOC/ItemListHOC";
import swapiServiceHOC from "../../HOC/swapiServiceHOC";
import withChildFunction from "../helpers/with-child-function";
import compose from "../helpers/compose";

const renderName = ({ name }) => <span>{name}</span>;

const renderModelAndName = ({ name, model }) => (
  <span>
    {name} ({model})
  </span>
);

const mapPersonMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPeople
  };
};

const mapPlanetMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllPlanets
  };
};

const mapStarshipMethodsToProps = swapiService => {
  return {
    getData: swapiService.getAllStarships
  };
};

const PersonList = compose(
  swapiServiceHOC(mapPersonMethodsToProps),
  ItemListHOC,
  withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
  swapiServiceHOC(mapPlanetMethodsToProps),
  ItemListHOC,
  withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
  swapiServiceHOC(mapStarshipMethodsToProps),
  ItemListHOC,
  withChildFunction(renderModelAndName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
