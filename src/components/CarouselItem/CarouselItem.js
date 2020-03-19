import React from 'react';
import { Link } from 'react-router-dom';
import cx from 'classnames';

import { MOBILE } from '../../constants/configurations';

import './CarouselItem.scss';

const CN = 'carousel-item';

const CarouselItem = ({
  device,
  movieData,
  id,
  routingConfig: {
    movie: { moviePath },
    view
  }
}) => {
  const isMobile = device === MOBILE;

  return (
    <Link to={`${moviePath}${view}`.replace(':id', id)}>
      <div className={cx(`${CN}__wrapper`, isMobile && `${CN}__wrapper-mobile`)}>
        <img
          alt="movie-poster"
          className={`${CN}__image`}
          src={movieData.poster}
        />
      </div>
    </Link>
  );
};

export default CarouselItem;

