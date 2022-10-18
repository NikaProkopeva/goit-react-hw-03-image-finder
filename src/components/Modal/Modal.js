import { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';
import modal from './Modal.module.css';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  static defaultProps = { onClose: null, children: null };

  static propTypes = {
    onClose: PropTypes.func.isRequired,
    children: PropTypes.object.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className={modal.Overlay} onClick={this.handleOverlayClick}>
        <div className={modal.Modal}>{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}
