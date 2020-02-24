import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import cx from 'classnames';

import './MovieMainItemCard.scss';
import { MOBILE } from '../../constants/configurations';
import defaultImage from '../../assets/images/noimage.png';

const CN = 'movie-card';

class MovieMainItemCard extends Component {
  getGenres(ids) {
    const { genres } = this.props;

    if (!ids || !ids.length) {
      return 'No genre';
    }

    const genresStrArray = ids.map((id) => genres.find((genre) => genre.id === id));

    return (genresStrArray && genresStrArray.map((el) => el && (
      <div className={`${CN}__genre`} key={el.name}>
        <span className={`${CN}__genre-item`} key={el.name}>
          {el.name}
        </span>
      </div>
    )));
  }

  returnPosters = () => {
    const { movieData } = this.props;
    const posterURL = 'https://image.tmdb.org/t/p/w500/';
    const posterPath = movieData.getPosterPath();
    const posterSrc = (posterPath === null) ? defaultImage : `${posterURL}${posterPath}`;

    return posterSrc;
  };

  returnMovieYear() {
    const { movieData } = this.props;

    return new Date(movieData.getReleaseDate()).getFullYear();
  }

  renderStarRating() {
    const { movieData } = this.props;
    const starsNumber = 5;
    const starWidth = '15px';
    const starSpacing = '0';

    return (
      <StarRatings
        changeRating={this.changeRating}
        className={`${CN}__rating-starts`}
        name="rating"
        numberOfStars={starsNumber}
        rating={movieData.getMovieVote() / 2}
        starDimension={starWidth}
        starRatedColor="gold"
        starSpacing={starSpacing}
      />
    );
  }

  render() {
    const {
      device,
      movieData
    } = this.props;
    const isMobile = device === MOBILE;

    return (
      <div className={cx(`${CN}__wrapper`, isMobile && `${CN}__wrapper-mobile`)}>
        <div className={`${CN}__image-container`}>
          <img
            alt="movie-poster"
            className={`${CN}__image`}
            src={this.returnPosters()}
          />
        </div>
        <div className={cx(`${CN}__info-container`, isMobile && `${CN}__info-container-mobile`)}>
          <div className={`${CN}__title-container`}>
            <h4 className={`${CN}__movie-title`}>{movieData.getTitle()}</h4>
            <h5 className={`${CN}__movie-title-native-lang`}>{movieData.getOriginalTitle()}</h5>
          </div>
          <div className={`${CN}__rating-genre-container`}>
            {this.renderStarRating()}
            <div className={`${CN}__rating-info`}>
              {`Rating: ${movieData.getMovieVote()}/10 | Votes: ${movieData.getMovieVoteCount()}`}
            </div>
            <div className={`${CN}__year-genre`}>
              {`${this.returnMovieYear()} | `}
              {this.getGenres(movieData.getMovieGeresId())}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieMainItemCard;

