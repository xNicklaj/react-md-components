import React from 'react'
import PropTypes from 'prop-types';

import style from './styles/button.module.scss'
import palette from './styles/button.palette.module.scss'

const MDButton = (props) => {
    const accentColor = props.accentColor
    return <>
        <button {...props} 
        className={`${style.MDButton} ${props.text ? style.MDTextButton : (props.outlined ? style.MDOutlinedButton : style.MDButtonContained)} ${style.MDButton} ${props.text ? palette.MDTextButton : (props.outlined ? palette.MDOutlinedButton : palette.MDButtonContained)} ${props.className || ''}`}
        style={{borderColor: props.text || props.outlined ? accentColor : '', color: props.text || props.outlined ? accentColor : '', background: !props.text && !props.outlined ? accentColor : ''}}>
            {props.children}
        </button>
    </>
}

MDButton.propTypes = {
    accentColor: PropTypes.string,
    outlined: PropTypes.bool,
    text: PropTypes.bool
}

MDButton.defaultProps = {
    accentColor: '',
    outlined: false,
    text: false
}

module.exports = {
    MDButton
}