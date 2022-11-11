import React from 'react';
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem';
import css from './ImageGallery.module.css';

export const ImageGallery = ({ array }) => {
  return (
    <ul className={css.ImageGallery}>
      {ImageGallery.map(item => {
        return <ImageGalleryItem key={item.id} item={item} />;
      })}
    </ul>
  );
};
