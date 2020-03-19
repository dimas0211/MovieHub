import React, { Component } from 'react';
import autoBind from 'auto-bind';
import cx from 'classnames';
import MovieItem from '../MovieItem';
import Loader from '../Loader';
import { MOBILE } from '../../constants/configurations';

import './MovieItemPage.scss';

const CN = 'movie-page';

class MovieItemPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    autoBind(this);
  }

  componentDidMount() {
    const {
      getDataService,
      getOneMovieSuccess,
      getOneMovieError,
      getVideosSuccess,
      getVideosError,
      match: { params }
    } = this.props;

    this.setState({ loading: true });

    getDataService
      .getOneMovie(params.id, this.returnMoviePath())
      .then((data) => {
        this.setState({ loading: false });
        getOneMovieSuccess(data);
      })
      .catch((error) => getOneMovieError(error));

    getDataService
      .getVideos(params.id, this.returnMoviePath())
      .then((data) => {
        this.setState({ loading: false });
        getVideosSuccess(data);
      })
      .catch((error) => getVideosError(error));
  }

  componentWillUnmount() {
    const { clearOneMovie } = this.props;

    clearOneMovie && clearOneMovie();
  }

  returnMoviePath() {
    const { match: { path }, routingConfig: { movie } } = this.props;

    return (path.includes(movie.moviePath)) && movie.moviePath;
  }

  render() {
    const { loading } = this.state;
    const { device } = this.props;
    const isMobile = device === MOBILE;

    return (loading) ? (
      <div className={cx(`${CN}__loader-wrapper`, isMobile && `${CN}__loader-wrapper-mobile`)}>
        <Loader />
        <h2>Loading...</h2>
      </div>
    ) : (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <MovieItem {...this.props} />
    );
  }
}

export default MovieItemPage;
