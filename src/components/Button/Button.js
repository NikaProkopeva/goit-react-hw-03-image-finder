import PropTypes from 'prop-types';
import button from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <button className={button.Button} type="button" onClick={onClick}>
      Load More
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};
