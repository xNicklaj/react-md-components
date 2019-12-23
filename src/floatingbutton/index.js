import React from 'react';
import PropTypes from 'prop-types';
import style from './style/floatingbutton.module.scss';
import palette from './style/floatingbutton.palette.module.scss';

const MDFloatingButton = props => {
  const children = props.children;
  return (
    <div
      {...props}
      className={`${
        props.mini ? style.MDFloatingButton : style.MDFloatingButtonMini
      } ${palette.MDFloatingButton} ${props.className}`}
    >
      <div className={style.Content}>{children}</div>
    </div>
  );
};

MDFloatingButton.propTypes = {
  children: PropTypes.any,
  mini: PropTypes.bool,
  className: PropTypes.string,
};

MDFloatingButton.defaultProps = {
  mini: false,
};

export { MDFloatingButton };
export default MDFloatingButton;
