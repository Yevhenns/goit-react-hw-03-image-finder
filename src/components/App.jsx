import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Modal } from './Modal/Modal';
import { fetchImages } from './services/services';
import { helper } from 'helper/helper';
// import css from './App.module.css'

export class App extends Component {
  state = {
    isShown: false,
    images: [],
    page: 1,
    isLoading: false,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState === this.state.isShown) {
      this.getImages();
    }
  }

  showImages = e => {
    e.preventDefault();
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };

  getImages = e => {
    e.preventDefault();
    this.setState({
      isLoading: true,
    });
    fetchImages(this.state.page)
      .then(resp => {
        this.setState(prevState => ({
          images: [...prevState.images, ...helper(resp.data.hits)],
        }));
        console.log(resp.data.hits);
      })
      .catch(error => {
        console.log(error.message);
      })
      .finally(() => {
        this.setState({
          isLoading: true,
        });
      });
  };

  render() {
    return (
      <div>
        <Searchbar ClickHandler={this.getImages} />
        <ImageGallery array={this.state.images} />
        <Button />
        {/* <Modal /> */}
      </div>
    );
  }
}
