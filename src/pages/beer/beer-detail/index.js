import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import http from '../../../services/http';

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
        <header>
          <h1>Beer Details</h1>
        </header>
        <dl>
          <dt>Name</dt>
          <dd>{beer.name}</dd>
          <dt>Tagline</dt>
          <dd>{beer.tagline}</dd>
          <dt>First Brewed</dt>
          <dd>{beer.first_brewed}</dd>
          <dt>Description</dt>
          <dd>{beer.description}</dd>
          <dt>Image</dt>
          <dd><img src={beer.image_url} alt={beer.name} title={beer.name} height="100px" /></dd>
        </dl>
        <Link className="btn" to="/beers">Voltar</Link>
      </>
    );
  }
}

export default BeerDetail;
