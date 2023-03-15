import PropTypes from 'prop-types';

import styles from './Button.module.scss';

function Button({ styleName, text, onClick, type = 'submit' }) {
  return (
    <button className={styles[styleName]} type={type} onClick={onClick}>
      {text}
    </button>
  );
}

export default Button;

Button.propTypes = {
  style: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  onClick: PropTypes.func,
};
