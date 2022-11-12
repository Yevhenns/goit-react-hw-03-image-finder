import React, { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
// import { Modal } from './Modal/Modal';
import { fetchImages } from './services/services';
import { helper } from 'helper/helper';
// import css from './App.module.css'

export class App extends Component {
  state = {
    isShown: true,
    images: [],
    page: 1,
    isLoading: false,
    imageName: '',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.isShown !== this.state.isShown &&
      prevState.imageName !== this.state.imageName
    ) {
      this.getImages();
    }
  }

  handleSubmit = imageName => {
    this.setState({ imageName });
    this.showImages();
  };

  showImages = () => {
    this.setState(prevState => ({
      isShown: !prevState.isShown,
    }));
  };

  getImages = () => {
    this.setState({
      isLoading: true,
    });
    fetchImages(this.state.imageName, this.state.page)
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
          isLoading: false,
        });
      });
    this.showImages();
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        {this.state.isShown && (
          <>
            <ImageGallery array={this.state.images} />
            <Button text="Load more" ClickHandler={this.loadMore} />
          </>
        )}

        {/* <Modal /> */}
      </div>
    );
  }
}
