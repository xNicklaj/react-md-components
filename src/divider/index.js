import React from 'react';
import styles from './styles/divider.module.scss';
import PropTypes from 'prop-types';

const MDDivider = props => {
  const color = props.primaryColor || '';
  return (
    <div
      {...props}
      className={`${styles.MDDivider} ${
        props.className ? props.className : ''
      }`}
      style={{ width: props.fullWidth ? '100%' : '', background: color }}
    ></div>
  );
};

MDDivider.propTypes = {
  primaryColor: PropTypes.string,
  className: PropTypes.string,
  fullWidth: PropTypes.bool,
};

MDDivider.defaultProps = {
  primaryColor: '#000',
  displayName: 'MDDivider',
  fullWidth: false,
};

export { MDDivider };
export default MDDivider;
