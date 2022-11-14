import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ array, onClick }) => {
  return (
    <ul className={css.ImageGallery}>
      {array.map(({ id, webformatURL, tags }) => {
        return (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            tags={tags}
            onClick={onClick}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
  array: PropTypes.array.isRequired,
  id: PropTypes.number,
  webformatURL: PropTypes.string,
  tags: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
