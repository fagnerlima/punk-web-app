import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import BeerList from './pages/beer/beer-list';
import BeerDetail from './pages/beer/beer-detail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/beers" component={BeerList} />
      <Route exact path="/beers/:id" component={BeerDetail} />
      <Redirect from="*" to="/beers" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
