import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
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
