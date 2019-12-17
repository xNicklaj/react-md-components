import React, {useState} from 'react';
import style from './style/textfield.module.scss';
import palette from './style/textfield.palette.module.scss';
import PropTypes from 'prop-types';

const MDTextField = props => {
    const [isFocused, setFocused] = useState(false);
    const [isEmpty, setEmpty] = useState(true);
    const error = props.error;
    console.log('error: ' + error + 'focus: ' + isFocused);
    const _setFocus = () => {
        setFocused(true);
    };
    const _setUnfocus = () => {
        setFocused(false);
    };
    const _handleChange = e => {
        setEmpty(e.target.value.length > 0 ? false : true);
    };
    return (
        <div
        {...props}
        style={
            {
                borderColor: props.error
                ? "rgb(176, 0, 32)"
                : props.color && isFocused
                ? props.color
                : ""
            }
        }
        className={`${props.outlined ? style.MDTextFieldOutlined : style.MDTextField} ${props.outlined ? palette.MDTextFieldOutlined : palette.MDTextField} ${props.className ? props.className : ''}`}
        onFocus={_setFocus}
        onBlur={_setUnfocus}
        >
        <label
            className={`${style.Label} ${palette.Label}`}
            style={{
            color: error
                ? "rgb(176, 0, 32)"
                : props.accentColor && isFocused
                ? props.accentColor
                : "",
            transform: isEmpty
                ? ""
                : `translateY(-${props.outlined ? "50" : "50"}%) scale(.75)`
            }}
        >
            {(props.label ? props.label : '') + (error ? "*" : "")}
        </label>
        <span className={style.InputWrapper}>
            <input
            style={{
                caretColor: error
                ? "rgb(176, 0, 32)"
                : props.accentColor
                ? props.accentColor
                : ""
            }}
            className={`${style.TextInput} ${palette.TextInput}`}
            onChange={_handleChange}
            />
        </span>
        </div>
    );
};
  
MDTextField.propTypes = {
    accentColor: PropTypes.string,
    error: PropTypes.bool,
    outlined: PropTypes.bool
};

MDTextField.defaultProps = {
    accentColor: '',
    outlined: false,
    error: false,
    displayName: 'MDTextField'
};

export default MDTextField;
export {MDTextField};
