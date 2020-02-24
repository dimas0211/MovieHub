import React, { Component } from 'react';
import MovieMainItemCard from '../MovieMainItemCard';
import MovieListPagination from '../MovieListPagination';
import { TV_SHOW_LIST, TV_SHOW_GENRES } from '../../constants/configurations';
import CarouselItem from '../CarouselItem';
import Carousel from '../Carousel';

const CN = 'main-page';
const CNL = 'list-page';

class TVShowListPage extends Component {
  componentDidMount() {
    this.loadShowList();
  }

  loadShowList() {
    const { getGenres, getMovies } = this.props;

    getGenres && getGenres(TV_SHOW_GENRES);
    getMovies && getMovies(1, TV_SHOW_LIST);
  }

  renderCarouselItems() {
    const { movieList, viewport: { device } } = this.props;

    return [...movieList.getMovieList().map((movieData) => (
      <CarouselItem
        className={`${CNL}__carousel-item-card`}
        device={device}
        key={movieData.getId()}
        movieData={movieData}
      />
    ))];
  }

  renderMovieCarousel() {
    return (
      <Carousel className={`${CNL}__carousel`}>
        {this.renderCarouselItems()}
      </Carousel>
    );
  }

  renderMovieList() {
    const { genres, movieList, viewport: { device } } = this.props;

    return movieList.results.map((movieData) => (
      <MovieMainItemCard
        className={`${CN}__movie-item-card`}
        device={device}
        genres={genres}
        key={movieData.getId()}
        movieData={movieData}
      />
    ));
  }

  render() {
    const { movieList: { total_pages }, getMovies, scrollToTop } = this.props;

    return (
      <div className={CN}>
        {this.renderMovieCarousel()}
        {this.renderMovieList()}
        <MovieListPagination
          genreTVShow={TV_SHOW_GENRES}
          getMovies={getMovies}
          listTVShow={TV_SHOW_LIST}
          pagesCount={total_pages}
          scrollToTop={scrollToTop}
        />
      </div>
    );
  }
}

export default TVShowListPage;
