import React from 'react';
import { Switch, Route } from 'react-router-dom';

import PageDefaultContainer from '../PageDefaultContainer';
import MainPage from '../MainPage';
import NotFoundPage from '../NotFoundPage';

const Routes = () => (
  <Route render={() => (
    <Switch>
      <PageDefaultContainer component={MainPage} exact path="/" />
      <PageDefaultContainer component={MainPage} path="/main" />
      <PageDefaultContainer component path="/movie-page/:id" />
      <PageDefaultContainer component path="/:category" />
      <PageDefaultContainer
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
