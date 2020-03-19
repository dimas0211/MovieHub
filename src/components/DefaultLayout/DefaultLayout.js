/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import autoBind from 'auto-bind';
import cx from 'classnames';

import { Header } from '../Header';
import { DESKTOP, LARGE_SCREEN } from '../../constants/configurations';

import './DefaultLayout.scss';
import { FiltrationPanel } from '../FiltrationPanel';

const CN = 'default-layout';

class DefaultLayout extends Component {
  static scrollToTop() {
    window && window.scrollTo({
      top: 500,
      left: 0,
      behavior: 'smooth',
      yearValue: '',
      withGenres: ''
    });
  }

  constructor(props) {
    super(props);

    autoBind(this);
  }

  shouldFiltrationsBeRendered() {
    const { location: { pathname }, routingConfig: { movie, tvShow, main } } = this.props;

    return (pathname.includes(movie.movieList) || pathname.includes(tvShow.showList) || pathname === main);
  }

  render() {
    const {
      component: Page,
      hideFooter,
      hideHeader,
      location,
      history,
      viewport: { device },
      ...rest
    } = this.props;
    const isDesktop = device === DESKTOP;
    const isLargeScreen = device === LARGE_SCREEN;

    return (
      <Route
        {...rest}
        render={(props) => (
          <div className={CN}>
            { <Header history={history} />}
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <div className={cx(`${CN}__page-wrapper`, (isDesktop || isLargeScreen) && `${CN}__desktop-page-wrapper`)}>
              <div className={cx(`${CN}__filtration-panel-wrapper`, (isDesktop || isLargeScreen) && `${CN}__filtration-panel-wrapper-desktop`)}>
                {this.shouldFiltrationsBeRendered() && <FiltrationPanel location={location} />}
              </div>
              <Page scrollToTop={DefaultLayout.scrollToTop} {...props} />
            </div>
          </div>
        )}
      />
    );
  }
}

DefaultLayout.propTypes = {
  component: PropTypes.any,
  hideFooter: PropTypes.bool,
  hideHeader: PropTypes.bool
};

DefaultLayout.defaultProps = {
  component: null,
  hideFooter: false,
  hideHeader: false
};

export default withRouter(DefaultLayout);
