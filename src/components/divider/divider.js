import React from 'react';
import styles from './styles/divider.module.scss';

const MDDivider = (props) => {
    return (
        <div {...props} className={`${styles.MDDivider} ${props.className ? props.className : ''}`} style={{width: props.fullWidth ? '100%' : ''}}></div>
    );
};

module.exports = {
    MDDivider
};
export default MDDivider;