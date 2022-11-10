import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchImages } from './services/services';
// import css from './App.module.css'

export class App extends Component {
  state = {
    isShown: false,
    images: [],
    page: 1,
    isLoading: false,
  };

  showImages = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };

  getImages = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    fetchImages(this.state.page).then(resp => {
      this.setState(prevState => ({
        images: [...prevState.images, resp.data.hits],
      }));
      console.log(resp.data.hits);
    });
  };
  render() {
    return (
      <div>
        <Searchbar ClickHandler={this.getImages} />
        <ImageGallery />
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}
