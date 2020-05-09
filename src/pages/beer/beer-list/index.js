import React, { Component } from 'react';

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

class BeerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      pageIndex: 1,
      pageSize: 12
    };
  }

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async (pageIndex = 1) => {
    try {
      const { pageSize } = this.state;
      const response = await http.get(`/beers?per_page=${pageSize}&page=${pageIndex}`);
      this.setState({
        beers: response.data,
        pageIndex
      });
    } catch (error) {
      console.error('loadProducts error', error);
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
    const { beers, pageIndex } = this.state;

    return (
      <>
        <HeaderPage>Beers</HeaderPage>
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
      </>
    );
  }
}

export default BeerList;
