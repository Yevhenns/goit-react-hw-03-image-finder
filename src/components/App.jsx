import React from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
// import { fetchImages } from "./services/services";
// import css from './App.module.css'

export const App = () => {
  return (
    <div>
      <Searchbar />
      <ImageGallery />
      <Button />
      <Modal />
    </div>
  );
};
