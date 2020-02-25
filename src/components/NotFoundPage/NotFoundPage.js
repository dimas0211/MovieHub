import React from 'react';

const CN = 'not-found-page';

const NotFoundPage = () => (
  <div className={`${CN}__wrapper`}>
    <h3 className={`${CN}__title`}>404 page not found</h3>
    <p className={`${CN}__message`}>We are sorry but the page you are looking for does not exist.</p>
  </div>
);

export default NotFoundPage;
