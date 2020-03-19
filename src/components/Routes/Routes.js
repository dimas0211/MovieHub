import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { DefaultLayout } from '../DefaultLayout';
import { MainPage } from '../MainPage';
import { TVShowListPage } from '../TVShowListPage';
import { MovieItemPage } from '../MovieItemPage';
import { SearchPage } from '../SearchPage';
import { TVShowItemPage } from '../TVShowItemPage';
import NotFoundPage from '../NotFoundPage';
import connectWithIoC from '../../services/connectWithIoC';

const Routes = ({ routingConfig }) => {
  const {
    main,
    view,
    notFound,
    movie: { movieList, moviePath },
    tvShow: { showList, showPath },
    search: { searchPath }
  } = routingConfig;

  const renderPages = () => (
    <Switch>
      <DefaultLayout component={MainPage} exact path={main} />
      <DefaultLayout component={MainPage} path={movieList} />
      <DefaultLayout component={TVShowListPage} path={showList} />
      <DefaultLayout component={SearchPage} path={searchPath} />
      <DefaultLayout component={MovieItemPage} path={`${moviePath}${view}`} />
      <DefaultLayout component={TVShowItemPage} path={`${showPath}${view}`} />
      <DefaultLayout
        component={NotFoundPage}
        hideFooter
        hideHeader
        to={notFound}
      />
    </Switch>
  );

  return (
    <Route render={() => renderPages()} />
  );
};

export default connectWithIoC(['routingConfig'])(Routes);
