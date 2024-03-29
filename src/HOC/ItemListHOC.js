import React, { Component } from "react";
import Spinner from "../components/spinner";
import ErrorIndicator from "../components/error-indicator";

const ItemListHOC = View => {
  return class extends Component {
    state = {
      data: null,
      loading: true,
      error: false
    };

    componentDidUpdate(prevProps) {
      if (prevProps.getData !== this.props.getData) {
        this.update();
      }
    }

    componentDidMount() {
      this.update();
    }

    update() {
      this.setState({
        loading: true,
        error: false
      });
      this.props
        .getData()
        .then(data => {
          this.setState({
            data,
            loading: false
          });
        })
        .catch(() => {
          this.setState({
            error: true,
            loading: false
          });
        });
    }

    render() {
      const { data, loading, error } = this.state;
      if (loading) {
        return <Spinner />;
      }
      if (error) {
        return <ErrorIndicator />;
      }
      return <View {...this.props} data={data} />;
    }
  };
};

export default ItemListHOC;
