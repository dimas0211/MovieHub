import React, { Component } from 'react';
import MovieMainItemCard from '../MovieMainItemCard';
import MovieListPagination from '../MovieListPagination';

const CN = 'main-page';

class MainPage extends Component {
  componentDidMount() {
    this.loadMovieList();
  }

  loadMovieList() {
    const { getGenres, getMovies } = this.props;

    getGenres && getGenres();
    getMovies && getMovies(1);
  }

  renderMovieList() {
    const { genres, movieList, viewport: { device } } = this.props;

    return movieList.map((movieData) => (
      <MovieMainItemCard
        className={`${CN}__movie-item-card`}
        device={device}
        genres={genres}
        key={movieData.id}
        movieData={movieData}
      />
    ));
  }

  render() {
    const { moviesPages, getMovies, scrollToTop } = this.props;

    return (
      <div className={CN}>
        {this.renderMovieList()}
        <MovieListPagination
          getMovies={getMovies}
          pagesCount={moviesPages}
          scrollToTop={scrollToTop}
        />
      </div>
    );
  }
}

export default MainPage;
