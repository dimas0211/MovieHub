import React from 'react';
import cx from 'classnames';

import { MOBILE } from '../../constants/configurations';

import './CarouselItem.scss';

const CN = 'carousel-item';

const CarouselItem = ({ device, movieData }) => {
  const isMobile = device === MOBILE;

  return (
    <div className={cx(`${CN}__wrapper`, isMobile && `${CN}__wrapper-mobile`)}>
      <img
        alt="movie-poster"
        className={`${CN}__image`}
        src={movieData.poster}
      />
      <h4 className={`${CN}__movie-title`}>{movieData.title}</h4>
    </div>
  );
};

export default CarouselItem;

