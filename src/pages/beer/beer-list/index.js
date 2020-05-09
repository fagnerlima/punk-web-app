import React, { Component } from 'react';

import { faEye } from '@fortawesome/free-solid-svg-icons'

import http from '../../../services/http';
import Button from '../../../components/Button';
import {
  Card,
  CardImage,
  CardHeader,
  CardContent,
  CardFooter,
  CardsList,
  CardsPage,
  CardsPaginator
} from '../../../components/Card';
import HeaderPage from '../../../components/HeaderPage';
import Load from '../../../components/Load';
import Alert from '../../../components/Alert';

class BeerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: null,
      isLoaded: false,
      pageIndex: 1,
      pageSize: 12
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (pageIndex = 1) => {
    try {
      this.setState({
        isLoaded: false
      });

      const { pageSize } = this.state;
      const response = await http.get(`/beers?per_page=${pageSize}&page=${pageIndex}`);

      this.setState({
        beers: response.data,
        pageIndex
      });
    } catch (error) {
      console.error('loadProducts error', error);
    } finally {
      this.setState({
        isLoaded: true
      });
      window.scroll(0, 0);
    }
  }

  previousPage = () => {
    let { pageIndex } = this.state;

    if (pageIndex === 1) {
      return;
    }

    this.loadProducts(pageIndex - 1);
  }

  nextPage = () => {
    let { pageIndex } = this.state;

    this.loadProducts(pageIndex + 1);
  }

  render() {
    const { isLoaded } = this.state;

    return (
      <>
        <HeaderPage>Beers</HeaderPage>
        {!isLoaded ? <Load /> : this.cardsList()}
      </>
    );
  }

  cardsList = () => {
    const { beers, pageIndex } = this.state;

    if (!beers || !beers.length) {
      return <Alert type="danger">Information not found</Alert>;
    }

    return (
      <CardsList>
        <CardsPage>
          {beers.map(beer => (
            <Card key={beer.id}>
              <CardImage url={beer.image_url} alt={beer.name} title={beer.name} />
              <CardHeader>{beer.name}</CardHeader>
              <CardContent>{beer.tagline}</CardContent>
              <CardFooter>
                <Button
                  type="link"
                  color="primary"
                  size="sm"
                  to={`/beers/${beer.id}`}
                  icon={faEye}
                >
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </CardsPage>
        <CardsPaginator
          onPrevious={this.previousPage}
          onNext={this.nextPage}
          previousDisabled={pageIndex === 1}
        ></CardsPaginator>
      </CardsList>
    );
  }
}

export default BeerList;
