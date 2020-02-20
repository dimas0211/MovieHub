import React, { Component } from 'react';
import MovieMainItemCard from '../MovieMainItemCard';
import MovieListPagination from '../MovieListPagination';
import { TV_SHOW_LIST, TV_SHOW_GENRES } from '../../constants/configurations';

const CN = 'main-page';

class TVShowListPage extends Component {
  componentDidMount() {
    this.loadShowList();
  }

  loadShowList() {
    const { getGenres, getMovies } = this.props;

    getGenres && getGenres(TV_SHOW_GENRES);
    getMovies && getMovies(1, TV_SHOW_LIST);
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
          genreTVShow={TV_SHOW_GENRES}
          getMovies={getMovies}
          listTVShow={TV_SHOW_LIST}
          pagesCount={moviesPages}
          scrollToTop={scrollToTop}
        />
      </div>
    );
  }
}

export default TVShowListPage;
