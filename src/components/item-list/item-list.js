import React, { Component } from "react";
import SwapiService from "../../services/swapi-service";
import Spinner from "../spinner";

import "./item-list.css";
export default class ItemList extends Component {
  swapiService = new SwapiService();

  state = {
    peaopleList: null
  };

  componentDidMount() {
    this.swapiService.getAllPeople().then(peaopleList => {
      this.setState({
        peaopleList
      });
    });
  }

  renderItems = arr => {
    return arr.map(({ id, name }) => {
      return (
        <li
          className="list-group-item"
          key={id}
          onClick={() => this.props.onItemSelected(id)}
        >
          {name}
        </li>
      );
    });
  };

  render() {
    const { peaopleList } = this.state;
    if (!peaopleList) {
      return <Spinner />;
    }

    const items = this.renderItems(peaopleList);
    return <ul className="item-list list-group">{items}</ul>;
  }
}
