import React, { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.onEscapeClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscapeClose);
  }

  onEscapeClose = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onBackdropClose = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { webformatURL, tags } = this.props.currentImage;
    return (
      <div className={css.Overlay} onClick={this.onBackdropClose}>
        <div className={css.Modal}>
          <img src={webformatURL} alt={tags} width="800" height="600" />
        </div>
      </div>
    );
  }
  // render() {
  //   const { webformatURL, tags } = this.props.currentImage;
  //   return (
  //     <div className={css.Overlay} onClick={this.onBackdropClose}>
  //       <div className={css.Modal}>
  //         <img src={webformatURL} alt={tags} width="800" height="600" />
  //       </div>
  //     </div>
  //   );
  // }
}

// import * as basicLightbox from 'basiclightbox';

// export const Modal = basicLightbox.create(`
//     <img src="assets/images/image.png" width="800" height="600">
// `);

// Modal.show();
