import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home/Home';

export const Root = () => (
  <>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </>
);
