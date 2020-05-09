import React, { Component } from 'react';

import http from '../../../services/http';
import { Link } from 'react-router-dom';

class BeerList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      beers: [],
      pageIndex: 1,
      pageSize: 10
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
        <header className="text-center">
          <h1>Beers</h1>
        </header>
        <div className="cards-list">
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
                  <Link className="btn btn-sm" to={`/beers/${beer.id}`}>View Details</Link>
                </div>
              </div>
            ))}
          </div>
          <div className="cards-paginator">
            <button className="btn btn-previous" onClick={this.previousPage} disabled={pageIndex === 1}>
              Previous
            </button>
            <button className="btn btn-next" onClick={this.nextPage}>
              Next
            </button>
          </div>
        </div>
        {/* <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Tagline</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {beers.map(beer => (
              <tr key={beer.id}>
                <td>{beer.name}</td>
                <td>{beer.tagline}</td>
                <td align="center">
                  <Link className="btn btn-sm" to={`/beers/${beer.id}`}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="paginator">
          <button className="btn btn-previous" onClick={this.previousPage} disabled={pageIndex === 1}>
            Previous
          </button>
          <button className="btn btn-next" onClick={this.nextPage}>
            Next
          </button>
        </div> */}
      </>
    );
  }
}

export default BeerList;
