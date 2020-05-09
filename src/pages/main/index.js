import React, { Component } from 'react';

import http from '../../services/http';

class Main extends Component {

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
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {beers.map(beer => (
              <tr key={beer.id}>
                <td>{beer.id}</td>
                <td>{beer.name}</td>
                <td align="center">
                  <a href="#">View</a>
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
        </div>
      </div>
    );
  }
}

export default Main;
