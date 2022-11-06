import React from "react";
import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem";
import css from './ImageGallery.module.css'

export const ImageGallery = () => {
    return (<ul className={css.ImageGallery}>
  <ImageGalleryItem />
</ul>)
}