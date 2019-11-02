import React from 'react'

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

module.exports = {
    MDButton
}