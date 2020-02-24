import React, { Component } from 'react';
import MovieMainItemCard from '../MovieMainItemCard';
import MovieListPagination from '../MovieListPagination';
import CarouselItem from '../CarouselItem';
import Carousel from '../Carousel';

const CN = 'main-page';
const CNL = 'list-page';

class MainPage extends Component {
  componentDidMount() {
    this.loadMovieList();
  }

  loadMovieList() {
    const { getGenres, getMovies } = this.props;

    getGenres && getGenres();
    getMovies && getMovies(1);
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
    const { getMovies, scrollToTop, movieList } = this.props;

    return (
      <div className={CN}>
        {this.renderMovieCarousel()}
        {this.renderMovieList()}
        <MovieListPagination
          getMovies={getMovies}
          pagesCount={movieList.getNumberOfPages()}
          scrollToTop={scrollToTop}
        />
      </div>
    );
  }
}

export default MainPage;
