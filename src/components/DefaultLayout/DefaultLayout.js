/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import autoBind from 'auto-bind';
import cx from 'classnames';

import MainPageSkeleton from '../MainPageSkeleton';
import { Header } from '../Header';

import './DefaultLayout.scss';
import { DESKTOP } from '../../constants/configurations';

const CN = 'default-layout';

class DefaultLayout extends Component {
  static scrollToTop() {
    window && window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

  constructor(props) {
    super(props);

    autoBind(this);
  }

  render() {
    const {
      component: Page,
      hideFooter,
      hideHeader,
      location,
      movies,
      viewport: { device },
      ...rest
    } = this.props;
    const isDesktop = device === DESKTOP;

    return (
      <Route
        {...rest}
        render={(props) => {
          if (movies && !movies.length) {
            return (
              <MainPageSkeleton />
            );
          }

          return (
            <div className={CN}>
              {!hideHeader && <Header />}
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <div className={cx(`${CN}__page-wrapper`, isDesktop && `${CN}__desktop-page-wrapper`)}>
                <Page scrollToTop={DefaultLayout.scrollToTop} {...props} />
              </div>
            </div>
          );
        }}
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

export default DefaultLayout;
