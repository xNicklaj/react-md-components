import React, { useState } from 'react';
import style from './style/textfield.module.scss';
import palette from './style/textfield.palette.module.scss';
import PropTypes from 'prop-types';

const MDTextField = React.forwardRef((props, ref) => {
  const [isFocused, setFocused] = useState(false);
  const [isEmpty, setEmpty] = useState(true);
  const error = props.error;
  const type = props.type.toLowerCase();
  const inputRef = ref || React.createRef();
  if (!type.match(/^(email|text|password|search)$/))
    throw 'Invalid type. Type must be either email, text, password or search.';
  const _handleFocus = e => {
    setFocused(true);
    props.onFocus ? props.onFocus(e) : null;
  };
  const _handleClick = e => {
    if (!isFocused) inputRef.focus();
    props.onClick ? props.onClick(e) : null;
  };
  const _handleBlur = e => {
    setFocused(false);
    props.onBlur ? props.onBlur(e) : null;
  };
  const _handleChange = e => {
    setEmpty(e.target.value.length > 0 ? false : true);
    props.onChange ? props.onChange(e) : null;
  };
  return (
    <div
      style={{
        borderColor: props.error
          ? 'rgb(176, 0, 32)'
          : props.accentColor && isFocused
          ? props.accentColor
          : '',
      }}
      className={`${
        props.outlined ? style.MDTextFieldOutlined : style.MDTextField
      } ${props.outlined ? palette.MDTextFieldOutlined : palette.MDTextField} ${
        props.className ? props.className : ''
      }`}
      onFocus={_handleFocus}
      onClick={_handleClick}
      onBlur={_handleBlur}
    >
      <label
        className={`${style.Label} ${palette.Label}`}
        style={{
          color: error
            ? 'rgb(176, 0, 32)'
            : props.accentColor && isFocused
            ? props.accentColor
            : '',
          transform: isEmpty
            ? ''
            : `translateY(-${props.outlined ? '50' : '50'}%) scale(.75)`,
        }}
      >
        {(props.label ? props.label : '') + (error ? '*' : '')}
      </label>
      <span className={style.InputWrapper}>
        <input
          style={{
            caretColor: error
              ? 'rgb(176, 0, 32)'
              : props.accentColor
              ? props.accentColor
              : '',
          }}
          className={`${style.TextInput} ${palette.TextInput}`}
          onChange={_handleChange}
          type={type}
          name={props.name}
          ref={ref || inputRef}
        />
      </span>
    </div>
  );
});

MDTextField.displayName = 'MDTextField';

MDTextField.propTypes = {
  accentColor: PropTypes.string,
  error: PropTypes.bool,
  outlined: PropTypes.bool,
  label: PropTypes.string,
  className: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  displayName: PropTypes.string,
  onFocus: PropTypes.func,
  onClick: PropTypes.func,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

MDTextField.defaultProps = {
  accentColor: '',
  outlined: false,
  error: false,
  name: '',
  displayName: 'MDTextField',
  type: 'text',
};

export default MDTextField;
export { MDTextField };
