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
} from '../../../components/card';
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
        {/* <div className="cards-list">
          <div className="cards-page">
            {beers.map(beer => (
              <div key={beer.id} className="card">
                <div className="card-image">
                  <img src={beer.image_url} alt={beer.name} title={beer.name} />
                </div>
                <div className="card-title">
                  <header class>
                    <h3>{beer.name}</h3>
                  </header>
                </div>
                <div className="card-content">
                  <p>{beer.tagline}</p>
                </div>
                <div className="card-footer">
                  <Button
                    type="link"
                    color="primary"
                    size="sm"
                    to={`/beers/${beer.id}`}
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="cards-paginator">
            <Button
              color="primary"
              classes="btn-previous"
              onClick={this.previousPage}
              disabled={pageIndex === 1}
            >
              Previous
            </Button>
            <Button
                color="primary"
                classes="btn-next"
                onClick={this.nextPage}>
              Next
            </Button>
          </div>
        </div> */}
      </>
    );
  }
}

export default BeerList;
