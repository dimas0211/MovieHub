import React, { Component } from 'react';
import StarRatings from 'react-star-ratings';
import cx from 'classnames';

import './MovieMainItemCard.scss';
import { MOBILE } from '../../constants/configurations';

const CN = 'movie-card';

class MovieMainItemCard extends Component {
  getGenres(ids) {
    const { genres } = this.props;

    if (!ids.length) return 'No genre';

    const genresStrArray = ids.map((id) => genres.find((genre) => genre.id === id));

    return (genresStrArray.map((el) => el && (
      <div className={`${CN}__genre`} key={el.name}>
        <span className={`${CN}__genre-item`} key={el.name}>
          {el.name}
        </span>
      </div>
    )));
  }

  returnPosters = () => {
    const { movieData: { poster_path } } = this.props;
    const posterURL = 'https://image.tmdb.org/t/p/w500/';
    const posterSrc = `${posterURL}${poster_path}`;

    return posterSrc;
  };

  returnMovieYear() {
    const { movieData: { release_date, first_air_date } } = this.props;

    return new Date(release_date || first_air_date).getFullYear();
  }

  renderStarRating() {
    const { movieData: { vote_average } } = this.props;
    const starsNumber = 5;
    const starWidth = '15px';
    const starSpacing = '0';

    return (
      <StarRatings
        changeRating={this.changeRating}
        className={`${CN}__rating-starts`}
        name="rating"
        numberOfStars={starsNumber}
        rating={vote_average / 2}
        starDimension={starWidth}
        starRatedColor="gold"
        starSpacing={starSpacing}
      />
    );
  }

  render() {
    const {
      device,
      movieData: {
        vote_average,
        vote_count,
        title,
        name,
        original_title,
        original_name,
        genre_ids
      }
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
            <h4 className={`${CN}__movie-title`}>{title || name}</h4>
            <h5 className={`${CN}__movie-title-native-lang`}>{original_title || original_name}</h5>
          </div>
          <div className={`${CN}__rating-genre-container`}>
            {this.renderStarRating()}
            <div className={`${CN}__rating-info`}>
              {`Rating: ${vote_average}/10 | Votes: ${vote_count}`}
            </div>
            <div className={`${CN}__year-genre`}>
              {`${this.returnMovieYear()} | `}
              {this.getGenres(genre_ids)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MovieMainItemCard;

