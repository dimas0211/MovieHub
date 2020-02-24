import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import cx from 'classnames';

import VideoPlayerBar from '../VideoPlayerBar';
import { MOBILE } from '../../constants/configurations';
import defaultImage from '../../assets/images/noimage.png';

import './MovieItemPage.scss';

const CN = 'movie-page';

class MovieItemPage extends Component {
  componentDidMount() {
    const { getOneMovie, getVideos } = this.props;

    getOneMovie && getOneMovie(121);
    getVideos && getVideos(121);
  }

  returnPosters() {
    const { movie } = this.props;
    const posterURL = 'https://image.tmdb.org/t/p/w500/';
    const posterPath = movie.poster;
    const posterSrc = (posterPath === null) ? defaultImage : `${posterURL}${posterPath}`;

    return posterSrc;
  }

  returnMovieYear() {
    const { movie } = this.props;

    return new Date(movie.releaseDate).getFullYear();
  }

  returnReleasDate() {
    const { movie } = this.props;

    return new Date(movie.releaseDate).toLocaleDateString();
  }

  returnProdCountries() {
    const { movie } = this.props;

    return (movie.prodCountries.map((el) => `${el.iso_3166_1} `));
  }

  returnProdCompanies() {
    const { movie } = this.props;

    return (movie.prodCompanies.map((el) => `${el.name} `));
  }

  returnGenres() {
    const { movie } = this.props;

    return (movie.genres.map((el) => <span className={`${CN}__genre-item`} key={el.id}>{el.name}</span>));
  }

  returnLanguages() {
    const { movie } = this.props;

    return (movie.languages.map((el) => <span className={`${CN}__language`} key={el.iso_639_1}>{el.name}</span>));
  }

  renderStarRating() {
    const { movie } = this.props;
    const starsNumber = 5;
    const starWidth = '25px';
    const starSpacing = '5';

    return (
      <StarRatings
        changeRating={this.changeRating}
        className={`${CN}__rating-starts`}
        name="rating"
        numberOfStars={starsNumber}
        rating={movie.movieVote / 2}
        starDimension={starWidth}
        starRatedColor="gold"
        starSpacing={starSpacing}
      />
    );
  }

  render() {
    const { movie, videos, viewport: { device } } = this.props;
    const isMobile = device === MOBILE;

    return (
      <div className={`${CN}__wrapper`}>
        <div className={`${CN}__main-title-container`}>
          <h2 className={`${CN}__main-title`}>{movie.title}</h2>
          <hr className={`${CN}__main-title-underline`} />
        </div>
        <div className={cx(`${CN}__main-info-container`, isMobile && `${CN}__mobile-main-info-container`)}>
          <div className={cx(`${CN}__main-poster-container`, isMobile && `${CN}__mobile-main-poster-container`)}>
            <img
              alt="movie-poster"
              className={`${CN}__poster`}
              src={this.returnPosters()}
            />
          </div>
          <div className={cx(`${CN}__info-container`, isMobile && `${CN}__mobile-info-container`)}>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Original Title: </span>
              <span className={`${CN}__info-item-value original-title`}>
                {movie.originTitle}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Year: </span>
              <span className={`${CN}__info-item-value release-year`}>
                {this.returnMovieYear()}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Country: </span>
              <span className={`${CN}__info-item-value country`}>
                {this.returnProdCountries()}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Company: </span>
              <span className={`${CN}__info-item-value company`}>
                {this.returnProdCompanies()}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Genre: </span>
              <span className={`${CN}__info-item-value genre`}>
                {this.returnGenres()}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Release Date: </span>
              <span className={`${CN}__info-item-value release-year`}>
                {this.returnReleasDate()}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Duration: </span>
              <span className={`${CN}__info-item-value release-year`}>
                {movie.runtime}
                {' minutes'}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Language: </span>
              <span className={`${CN}__info-item-value languages`}>
                {this.returnLanguages()}
              </span>
            </p>
            <div className={`${CN}__info-item-container`}>
              {this.renderStarRating()}
            </div>
            <div className={`${CN}__rating-info`}>
              {`Rating: ${movie.movieVote}/10 (${movie.voteCount} Votes)`}
            </div>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Budget $: </span>
              <span className={`${CN}__info-item-value budget`}>
                {movie.budget}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Homepage: </span>
              <a className={`${CN}__info-item-value homepage`} href={movie.homePage}>
                {movie.homePage}
              </a>
            </p>
          </div>
        </div>
        <div className={`${CN}__main-content-container`}>
          <div className={`${CN}__about-container`}>
            <h4 className={`${CN}__about-title`}>
              About
              {' '}
              {movie.title}
            </h4>
            <p className={`${CN}__about`}>
              {movie.overview}
            </p>
          </div>

        </div>
        <div className={`${CN}__video-tabs-wrapper`}>
          <VideoPlayerBar videos={videos} CN={CN} isMobile={isMobile} />
        </div>
      </div>
    );
  }
}

export default MovieItemPage;
