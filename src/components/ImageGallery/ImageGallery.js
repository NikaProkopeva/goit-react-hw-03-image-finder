import PropTypes from 'prop-types';
import { ImageGalleryItem } from '.';
import imageStyles from './ImageGallery.module.css';

export const ImageGallery = ({ data, onClick }) => {
  const imageClick = e => {
    if (e.target.nodeName !== 'IMG') {
      return;
    }

    onClick(Number(e.target.dataset.id));
  };

  return (
    <>
      <ul className={imageStyles.ImageGallery} onClick={imageClick}>
        <img loading="Lazy" alt="foto" />
        <ImageGalleryItem images={data} />
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object.isRequired),
};
