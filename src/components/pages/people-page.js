import React, { Component } from "react";
import Row from "../row";
import { PersonList, PersonDetails } from "../sw-components";

export default class PeaoplePage extends Component {
  state = {
    selectedItem: null
  };

  onItemSelected = selectedItem => {
    this.setState({
      selectedItem
    });
  };

  render() {
    const { selectedItem } = this.state;
    return (
      <Row
        left={<PersonList onItemSelected={this.onItemSelected} />}
        right={<PersonDetails itemId={selectedItem} />}
      />
    );
  }
}
