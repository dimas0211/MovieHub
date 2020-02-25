import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import cx from 'classnames';

import { MOBILE } from '../../constants/configurations';

import './MovieMainItemCard.scss';

const CN = 'movie-card';

class MovieMainItemCard extends Component {
  getGenres(ids) {
    const { genres } = this.props;

    if (!ids || !ids.length) {
      return 'No genre';
    }

    const genresStrArray = genres.filter((genre) => ids.includes(genre.id));

    return (!genresStrArray.length && genresStrArray.map((el) => el && (
      <div className={`${CN}__genre`} key={el.name}>
        <span className={`${CN}__genre-item`} key={el.name}>
          {el.name}
        </span>
      </div>
    )));
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
        rating={movieData.movieVote / 2}
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
            src={movieData.poster}
          />
        </div>
        <div className={cx(`${CN}__info-container`, isMobile && `${CN}__info-container-mobile`)}>
          <div className={`${CN}__title-container`}>
            <h4 className={`${CN}__movie-title`}>{movieData.title}</h4>
            <h5 className={`${CN}__movie-title-native-lang`}>{movieData.originalTitle}</h5>
          </div>
          <div className={`${CN}__rating-genre-container`}>
            {this.renderStarRating()}
            <div className={`${CN}__rating-info`}>
              {`Rating: ${movieData.movieVote}/10 | Votes: ${movieData.movieVoteCount}`}
            </div>
            <div className={`${CN}__year-genre`}>
              {`${movieData.releaseDate} | `}
              {this.getGenres(movieData.movieGeresId)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieMainItemCard;

