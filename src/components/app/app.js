import React, { Component } from "react";
import Headrer from "../header";
import RandomPlanet from "../random-planet";
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator";
import ErrorBoundry from "../error-boundry/error-boundry";
import { SwapiServiceProvider } from "../swapi-service-context";
import DummySwapiService from "../../services/dummy-swapi-service";
import { PeoplePage, PlanetsPage, StarshipsPage } from "../pages";

import "./app.css";

export default class App extends Component {
  state = {
    selectedPerson: null,
    hasError: false,
    swapiService: new DummySwapiService()
  };

  componentDidCatch() {
    this.setState({
      hasError: true
    });
  }

  onPersonSelected = id => {
    this.setState({
      selectedPerson: id
    });
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service =
        swapiService instanceof SwapiService ? DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      };
    });
  };

  render() {
    if (this.hasError) {
      return <ErrorIndicator />;
    }

    return (
      <SwapiServiceProvider value={this.state.swapiService}>
        <ErrorBoundry>
          <div className="stardb-app">
            <Headrer onServiceChange={this.onServiceChange} />

            <RandomPlanet />

            <PeoplePage />
            <PlanetsPage />
            <StarshipsPage />
          </div>
        </ErrorBoundry>
      </SwapiServiceProvider>
    );
  }
}
