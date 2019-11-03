import React from 'react';
import styles from './styles/divider.module.scss';
import PropTypes from 'prop-types';

const MDDivider = (props) => {
    const color = props.color || ''
    return (
        <div {...props} className={`${styles.MDDivider} ${props.className ? props.className : ''}`} style={{width: props.fullWidth ? '100%' : '', background: color}}></div>
    );
};

MDDivider.proptypes = {
    color: PropTypes.string
}

MDDivider.defaultProps = {
    color: `#000`
}

export {MDDivider};
export default MDDivider;