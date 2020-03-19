import React, { Component } from 'react';
import autoBind from 'auto-bind';
import { MovieListPage } from '../MovieListPage';

class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };

    autoBind(this);
  }

  componentDidMount(props) {
    this.loadMovieList(props);
  }

  componentDidUpdate(prevProps) {
    const {
      filtrationQueryParams,
      getDataService,
      apiCallConfig: { movie },
      getMoviesSuccess,
      getMoviesError
    } = this.props;

    if (prevProps.filtrationQueryParams && prevProps.filtrationQueryParams !== filtrationQueryParams) {
      getDataService
        .getMovieList(1, movie, ...filtrationQueryParams)
        .then((data) => getMoviesSuccess(data))
        .catch((error) => getMoviesError(error));
    }
  }

  loadMovieList() {
    const {
      getDataService,
      getMoviesSuccess,
      getMoviesError,
      getGenresSuccess,
      getGenresError
    } = this.props;

    this.setState({ loading: true });

    getDataService
      .getGenres()
      .then((data) => {
        this.setState({ loading: false });
        getGenresSuccess(data);
      })
      .catch((error) => getGenresError(error));

    getDataService
      .getMovieList(1)
      .then((data) => {
        this.setState({ loading: false });
        getMoviesSuccess(data);
      })
      .catch((error) => getMoviesError(error));
  }

  render() {
    const { apiCallConfig: { movie } } = this.props;
    const { loading } = this.state;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <MovieListPage movieOrShow={movie} loading={loading} {...this.props} />;
  }
}

export default MainPage;
