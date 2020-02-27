import React, { Component } from 'react';
import autoBind from 'auto-bind';
import MovieMainItemCard from '../MovieMainItemCard';
import MovieListPagination from '../MovieListPagination';
import { FiltrationPanel } from '../FiltrationPanel';
import CarouselItem from '../CarouselItem';
import Carousel from '../Carousel';

const CN = 'main-page';
const CNL = 'list-page';

class MovieListPage extends Component {
  constructor(props) {
    super(props);

    autoBind(this);
  }

  renderMovieCarousel() {
    return (
      <Carousel className={`${CNL}__carousel`}>
        {this.renderCarouselItems()}
      </Carousel>
    );
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

  shouldFiltrationsBeRendered() {
    const { location: { pathname } } = this.props;

    return (pathname !== '/search');
  }

  renderMovieList() {
    const { genres, movieList, viewport: { device } } = this.props;

    return movieList.getMovieList().map((movieData) => (
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
    const {
      getMovies,
      scrollToTop,
      movieList,
      filtrationQueryParams,
      movieOrShow,
      pageParams,
      searchMode
    } = this.props;

    return (
      <div className={CN}>
        {this.renderMovieCarousel()}
        {this.shouldFiltrationsBeRendered() && <FiltrationPanel />}
        {this.renderMovieList()}
        <MovieListPagination
          filtrationQueryParams={filtrationQueryParams}
          getMovies={getMovies}
          movieOrShow={movieOrShow}
          pageParams={pageParams}
          pagesCount={movieList.getNumberOfPages()}
          scrollToTop={scrollToTop}
          searchMode={searchMode}
        />
      </div>
    );
  }
}

export default MovieListPage;
