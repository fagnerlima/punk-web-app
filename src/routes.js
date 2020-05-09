import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import BeerList from './pages/beer/beer-list';
import BeerDetails from './pages/beer/beer-details';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/beers" component={BeerList} />
      <Route exact path="/beers/:id" component={BeerDetails} />
      <Redirect from="*" to="/beers" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
