import React from 'react';
import PropTypes from 'prop-types';

import style from './styles/button.module.scss';
import palette from './styles/button.palette.module.scss';

const MDButton = React.forwardRef((props, ref) => {
  const accentColor = props.accentColor;
  const type = props.type;
  if (!type.match(/^(button|reset|submit)$/))
    throw 'Invalid type. Type must be either button, rest or submit.';
  return (
    <>
      <button
        {...props}
        className={`${style.MDButton} ${
          props.text
            ? style.MDTextButton
            : props.outlined
            ? style.MDOutlinedButton
            : style.MDButtonContained
        } ${style.MDButton} ${
          props.text
            ? palette.MDTextButton
            : props.outlined
            ? palette.MDOutlinedButton
            : palette.MDButtonContained
        } ${props.className || ''}`}
        style={{
          borderColor: props.text || props.outlined ? accentColor : '',
          color: props.text || props.outlined ? accentColor : props.textColor,
          background: !props.text && !props.outlined ? accentColor : '',
        }}
        type={props.type}
        name={props.name}
        form={props.form}
        ref={ref}
        disabled={props.disabled}
      >
        {props.children}
      </button>
    </>
  );
});

MDButton.propTypes = {
  accentColor: PropTypes.string,
  textColor: PropTypes.string,
  outlined: PropTypes.bool,
  text: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  name: PropTypes.string,
  form: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.any,
};

MDButton.defaultProps = {
  accentColor: '',
  textColor: '',
  outlined: false,
  text: false,
  type: 'button',
  name: '',
  form: '',
  value: '',
  disabled: false,
  displayName: 'MDButton',
};

MDButton.displayName = 'MDButton';

export { MDButton };
export default MDButton;
