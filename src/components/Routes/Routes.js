import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DefaultLayout } from '../DefaultLayout';
import { MainPage } from '../MainPage';
import { PopularMoviesListPage } from '../PopularMoviesListPage';
import { TVShowListPage } from '../TVShowListPage';
import { NewMoviesListPage } from '../NewMoviesListPage';
import { MovieItemPage } from '../MovieItemPage';
import { SearchPage } from '../SearchPage';
import NotFoundPage from '../NotFoundPage';

const Routes = () => (
  <Route render={() => (
    <Switch>
      <DefaultLayout component={MainPage} exact path="/" />
      <DefaultLayout component={MainPage} path="/main" />
      <DefaultLayout component={MainPage} path="/movies" />
      <DefaultLayout component={NewMoviesListPage} path="/new" />
      <DefaultLayout component={PopularMoviesListPage} path="/popular" />
      <DefaultLayout component={TVShowListPage} path="/tv-shows" />
      <DefaultLayout component={SearchPage} path="/search" />
      <DefaultLayout component={MovieItemPage} path="/movie/view/:id" />
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
