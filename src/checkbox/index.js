import React from 'react';
import PropTypes from 'prop-types';
import MDIcon from '../icon/index';
import style from './styles/checkbox.module.scss';
import palettes from './styles/checkbox.palettes.module.scss';

const MDCheckbox = props => {
  return (
    <div 
    className={`${style.MDCheckbox} ${palettes.MDCheckbox} ${
        props.className ? props.className : ''
    }`}
    >
      <input
        type="checkbox"
        className={`${style.checkbox} ${palettes.checkbox} ${
          props.className ? props.className : ''
        }`}
      />
      <span
        className={`${style.Label} ${palettes.Label} ${
            props.className ? props.className : ''
        }`}
      >{props.title}</span>
    </div>
  );
};

MDCheckbox.propTypes = {
    className: PropTypes.string
};

MDCheckbox.defaultProps = {
    className: ''
}

export { MDCheckbox };
export default MDCheckbox;
