import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import autoBind from 'auto-bind';

import MainPageSkeleton from '../MainPageSkeleton';
import MoviePageSkeleton from '../MoviePageSkeleton';

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

class PageDefaultContainer extends Component {
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
      movieList = [],
      ...rest
    } = this.props;

    const restProps = { ...rest };

    return (
      <Route
        render={(matchProps) => {
          // eslint-disable-next-line no-undef
          if ((matchProps.match.path === '/:category') && !movieList.length) {
            return (
              <MoviePageSkeleton />
            );
          }
          // will be removed after all demo pull request
          // eslint-disable-next-line no-undef
          if ((matchProps.match.path === '/main' || matchProps.match.path === '/') && !movieList.length) {
            return (
              <MainPageSkeleton />
            );
          }

          return (
            <>
              {/* {!hideHeader && <Header />} */}
              {/* <Notifications type /> */}
              {/* eslint-disable-next-line react/jsx-props-no-spreading */}
              <Page {...matchProps} />
              {/* {!hideFooter && <Footer />} */}
            </>
          );
        }}
        restProps={restProps}
      />
    );
  }
}

PageDefaultContainer.propTypes = propTypes;
PageDefaultContainer.defaultProps = defaultProps;

export default PageDefaultContainer;
