import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DefaultLayout } from '../DefaultLayout';
import MainPage from '../MainPage';
import MovieListPage from '../MovieListPage';
import NotFoundPage from '../NotFoundPage';

const Routes = () => (
  <Route render={() => (
    <Switch>
      <DefaultLayout component={MainPage} exact path="/" />
      <DefaultLayout component={MainPage} path="/main" />
      <DefaultLayout component={MovieListPage} path="/movies" />
      <DefaultLayout component={MovieListPage} path="/new" />
      <DefaultLayout component={MovieListPage} path="/popular" />
      <DefaultLayout component={NotFoundPage} path="/buy" />
      <DefaultLayout component path="/movie/view/:id" />
      <DefaultLayout component path="/:genre" />
      <DefaultLayout
        component={NotFoundPage}
        hideFooter
        hideHeader
        to="/not_found"
      />
    </Switch>
  )}
  />
);

export default Routes;
