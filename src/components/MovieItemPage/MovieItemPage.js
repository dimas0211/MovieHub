import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import cx from 'classnames';

import VideoPlayerBar from '../VideoPlayerBar';
import { MOBILE } from '../../constants/configurations';

import './MovieItemPage.scss';

const CN = 'movie-page';

class MovieItemPage extends Component {
  componentDidMount() {
    const { getOneMovie, getVideos } = this.props;

    getOneMovie && getOneMovie(121);
    getVideos && getVideos(121);
  }

  renderGenres() {
    const { movie: { genres } } = this.props;

    return (genres.map((el) => <span className={`${CN}__genre-item`} key={el.id}>{el.name}</span>));
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
    const {
      movie: {
        title,
        originTitle,
        runtime,
        movieVote,
        voteCount,
        homePage,
        budget,
        overview,
        poster,
        movieYear,
        prodCompanies,
        releaseDate,
        prodCountries,
        languages
      },
      videos,
      viewport: { device }
    } = this.props;
    const isMobile = device === MOBILE;

    return (
      <div className={`${CN}__wrapper`}>
        <div className={`${CN}__main-title-container`}>
          <h2 className={`${CN}__main-title`}>{title}</h2>
          <hr className={`${CN}__main-title-underline`} />
        </div>
        <div className={cx(`${CN}__main-info-container`, isMobile && `${CN}__mobile-main-info-container`)}>
          <div className={cx(`${CN}__main-poster-container`, isMobile && `${CN}__mobile-main-poster-container`)}>
            <img
              alt="movie-poster"
              className={`${CN}__poster`}
              src={poster}
            />
          </div>
          <div className={cx(`${CN}__info-container`, isMobile && `${CN}__mobile-info-container`)}>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Original Title: </span>
              <span className={`${CN}__info-item-value original-title`}>
                {originTitle}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Year: </span>
              <span className={`${CN}__info-item-value release-year`}>
                {movieYear}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Country: </span>
              <span className={`${CN}__info-item-value country`}>
                {prodCountries}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Company: </span>
              <span className={`${CN}__info-item-value company`}>
                {prodCompanies}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Genre: </span>
              <span className={`${CN}__info-item-value genre`}>
                {this.renderGenres()}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Release Date: </span>
              <span className={`${CN}__info-item-value release-year`}>
                {releaseDate}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Duration: </span>
              <span className={`${CN}__info-item-value release-year`}>
                {runtime}
                {' minutes'}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Language: </span>
              <span className={`${CN}__info-item-value languages`}>
                {languages}
              </span>
            </p>
            <div className={`${CN}__info-item-container`}>
              {this.renderStarRating()}
            </div>
            <div className={`${CN}__rating-info`}>
              {`Rating: ${movieVote}/10 (${voteCount} Votes)`}
            </div>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Budget $: </span>
              <span className={`${CN}__info-item-value budget`}>
                {budget}
              </span>
            </p>
            <p className={`${CN}__info-item-container`}>
              <span className={`${CN}__info-item-name`}>Homepage: </span>
              <a className={`${CN}__info-item-value homepage`} href={homePage}>
                {homePage}
              </a>
            </p>
          </div>
        </div>
        <div className={`${CN}__main-content-container`}>
          <div className={`${CN}__about-container`}>
            <h4 className={`${CN}__about-title`}>
              About
              {' '}
              {title}
            </h4>
            <p className={`${CN}__about`}>
              {overview}
            </p>
          </div>

        </div>
        <div className={`${CN}__video-tabs-wrapper`}>
          <VideoPlayerBar CN={CN} isMobile={isMobile} videos={videos} />
        </div>
      </div>
    );
  }
}

export default MovieItemPage;
