import React, { Component } from 'react';

import './styles.css';
import http from '../../../services/http';
import HeaderPage from '../../../components/HeaderPage';
import FooterPage from '../../../components/FooterPage';
import Button from '../../../components/Button';
import Load from '../../../components/Load';
import Alert from '../../../components/Alert';

class BeerDetails extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beer: null,
      isLoaded: false
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
    } finally {
      this.setState({
        isLoaded: true
      });
    }
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <>
        <HeaderPage>Beer Details</HeaderPage>
        {!isLoaded ? <Load /> : this.beerDetails()}
        <FooterPage>
          <Button type="link" color="primary"to="/beers">
            Return
          </Button>
        </FooterPage>
      </>
    );
  }

  beerDetails = () => {
    const { beer } = this.state;

    if (!beer) {
      return <Alert type="danger">Information not found</Alert>;
    }

    return (
      <div className="beer-details">
        <div className="beer-image">
          <img src={beer.image_url} alt={beer.name} title={beer.name} />
        </div>
        <div className="beer-info">
          <h4 className="beer-name">{beer.name}</h4>
          <p><b>Tagline</b>: {beer.tagline}</p>
          <p><b>First Brewed</b>: {beer.first_brewed}</p>
          <p><b>Description</b>: {beer.description}</p>
          <p><b>Ingredients</b>:</p>
          <ul className="beer-ingredients">
            <li>
              <b>Malt:</b>
              <ul>
                {beer.ingredients?.malt?.map(malt => (
                  <li>{malt.name} - {malt.amount.value} {malt.amount.unit}</li>
                ))}
              </ul>
            </li>
            <li>
              <b>Hoops:</b>
              <ul>
                {beer.ingredients?.hops?.map(hop => (
                  <li>{hop.name} - {hop.amount.value} {hop.amount.unit}</li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    );
  };
}

export default BeerDetails;
