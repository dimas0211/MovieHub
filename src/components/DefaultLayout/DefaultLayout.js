/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import autoBind from 'auto-bind';

import MainPageSkeleton from '../MainPageSkeleton';
import { Header } from '../Header';

const propTypes = {
  component: PropTypes.any,
  hideFooter: PropTypes.bool,
  hideHeader: PropTypes.bool
};

const defaultProps = {
  component: null,
  hideFooter: false,
  hideHeader: false
};

class DefaultLayout extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  // componentDidMount() {
  //   const { fetchMovies } = this.props;
  //
  //   fetchMovies && fetchMovies('category');
  // }

  render() {
    const {
      component: Page,
      hideFooter,
      hideHeader,
      location,
      ...rest
    } = this.props;
    const movieList = [1, 2, 3];

    return (
      <Route
        {...rest}
        render={(props) => {
          if (!movieList.length) {
            return (
              <MainPageSkeleton />
            );
          }

          return (
            <>
              {!hideHeader && <Header />}
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Page {...props} />
            </>
          );
        }}
      />
    );
  }
}

DefaultLayout.propTypes = propTypes;
DefaultLayout.defaultProps = defaultProps;

export default DefaultLayout;
