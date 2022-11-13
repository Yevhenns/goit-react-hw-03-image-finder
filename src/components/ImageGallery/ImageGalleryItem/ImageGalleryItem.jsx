import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ webformatURL, tags, onClick }) => {
  return (
    <li
      className={css.ImageGalleryItem}
      onClick={() => onClick({ webformatURL, tags })}
    >
      <img
        className={css.ImageGalleryItemImage}
        src={webformatURL}
        alt={tags}
      />
    </li>
  );
};
