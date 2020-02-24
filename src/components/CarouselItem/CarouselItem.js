import React from 'react';
import cx from 'classnames';

import './CarouselItem.scss';
import { MOBILE } from '../../constants/configurations';
import defaultImage from '../../assets/images/noimage.png';

const CN = 'carousel-item';

const CarouselItem = (props) => {
  const returnPosters = () => {
    const { movieData } = props;
    const posterURL = 'https://image.tmdb.org/t/p/w500/';
    const posterPath = movieData.getPosterPath();
    const posterSrc = (posterPath === null) ? defaultImage : `${posterURL}${posterPath}`;

    return posterSrc;
  };

  const { device, movieData } = props;
  const isMobile = device === MOBILE;

  return (
    <div className={cx(`${CN}__wrapper`, isMobile && `${CN}__wrapper-mobile`)}>
      <img
        alt="movie-poster"
        className={`${CN}__image`}
        src={returnPosters()}
      />
      <h4 className={`${CN}__movie-title`}>{movieData.getTitle()}</h4>
    </div>
  );
};

export default CarouselItem;

