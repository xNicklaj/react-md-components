import React from 'react';
import style from './style/icon.module.scss';
import PropTypes from 'prop-types';

const MDIcon = ({ icon, className, onClick, onMouseOver }) => {
  return (
    <i
      className={`${style.MDIcon} ${className}`}
      onClick={onClick}
      onMouseOver={onMouseOver}
    >
      {icon}
    </i>
  );
};

MDIcon.propTypes = {
    className: PropTypes.string,
    icon: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    onMouseOver: PropTypes.func
};

export default MDIcon;
export { MDIcon };
