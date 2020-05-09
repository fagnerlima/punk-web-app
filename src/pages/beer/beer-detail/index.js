import React, { Component } from 'react';

import http from '../../../services/http';
import HeaderPage from '../../../components/HeaderPage';
import Button from '../../../components/Button';

class BeerDetail extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beer: {}
    };
  }

  componentDidMount() {
    this.loadBeer();
  }

  loadBeer = async () => {
    try {
      const { id } = this.props.match.params;
      const response = await http.get(`/beers/${id}`);
      this.setState({
        beer: response.data[0]
      });
    } catch (error) {
      console.error('loadProduct error', error);
    }
  }

  render() {
    const { beer } = this.state;

    return (
      <>
        <HeaderPage>Beer Details</HeaderPage>
        <Button
          type="link"
          color="primary"
          to="/beers"
        >
          Voltar
        </Button>
      </>
    );
  }
}

export default BeerDetail;
