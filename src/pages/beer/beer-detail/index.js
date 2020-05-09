import React, { Component } from 'react';

import http from '../../../services/http';
import HeaderPage from '../../../components/HeaderPage';
import FooterPage from '../../../components/FooterPage';
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
        <div>
          <h4>{beer.name}</h4>
        </div>
        <FooterPage>
          <Button
            type="link"
            color="primary"
            to="/beers"
          >
            Voltar
          </Button>
        </FooterPage>
      </>
    );
  }
}

export default BeerDetail;
