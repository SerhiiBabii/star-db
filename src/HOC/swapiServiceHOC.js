import React from "react";
import { SwapiServiceConsumer } from "../components/swapi-service-context";

const swapiServiceHOC = mapMethodsToProps => Wrapped => {
  return props => {
    return (
      <SwapiServiceConsumer>
        {swapiService => {
          const serviceProps = mapMethodsToProps(swapiService);
          return <Wrapped {...props} {...serviceProps} />;
        }}
      </SwapiServiceConsumer>
    );
  };
};

export default swapiServiceHOC;
