import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
// import { fetchImages } from "./services/services";
// import css from './App.module.css'

export class App extends Component {
  state = {
    isShown: false,
    images: [],
    page: 1,
  };
  render() {
    return (
      <div>
        <Searchbar />
        <ImageGallery />
        <Button />
        <Modal />
      </div>
    );
  }
}
