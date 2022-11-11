import React from 'react';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ item }) => {
  return (
    <li className={css.ImageGalleryItem}>
      <img
        className={css.ImageGalleryItemImage}
        src={item.previewURL}
        alt={item.tags}
      />
    </li>
  );
};
