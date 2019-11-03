import React from 'react'
import PropTypes from 'prop-types';
import styles from './styles/card.module.scss'


const MDCard = (props) => {
    const palette = props.dark ? require('./styles/card-dark.module.scss') : require('./styles/card-light.module.scss')
    let headerChildren = [];
    let footerChilden = [];
    let contentChildren = [];
    if(props.children && props.children.length > 1)
        children = [...props.children];
    else if(props.children && props.children.length === 1)
        children = [props.children]

    if(children.length > 0)
    {
        headerChildren = children.filter(child => child.props.displayName != null && (child.props.displayName === 'MDCardTitle' || child.props.displayName === 'MDCardSubtitle'));
        footerChildren = children.filter(child => child.props.displayName != null && child.props.displayName === 'MDButton');
        contentChildren = children.filter(child => child.props.displayName != null && (child.props.displayName !== 'MDCardTitle' && child.props.displayName !== 'MDCardSubtitle' && child.props.displayName !== 'MDButton' && child.props.displayName !== 'MDDivider'))
    }

    return <>
        <div {...props} className={`${styles.MDCard} ${palette.MDCard} ${props.className ? props.className : ''}`} >
            {props.media ? <img className={styles.MDCardMedia} src={`${props.media}`} alt={`${props.media}`} /> : null}
            <div>
                <div className={`${styles.MDCardHeader} ${palette.MDCardHeader}`}>
                    {headerChildren}
                </div>
                <div className={`${styles.MDCardContent} ${palette.MDCardContent}`}>
                    {contentChildren}
                </div>
                {
                    footerChildren.length ? children.filter(child => child.props.displayName === 'MDDivider') : null
                }
                <div className={`${styles.MDCardFooter} ${styles.MDCardFooter}`}>
                    {footerChildren}
                </div>
            </div>
        </div>
    </>;
}

const MDCardTitle = ({children}) => {
    return (
        <h2 className={styles.MDCardTitle}>
            {children}
        </h2>
    )
}

const MDCardSubtitle = ({children}) => {
    return (
        <h4 className={styles.MDCardSubtitle}>
            {children}
        </h4>
    )
}

const MDCardSection = ({children}) => {
    return (
        <p className={styles.MDCardSection}>
            {children}
        </p>
    )
}

MDCard.propTypes = {
    media: PropTypes.string,
    dark: PropTypes.bool
}

MDCard.defaultProps = {
    media: '',
    dark: false,
    displayName: 'MDCard'
}

MDCardTitle.defaultProps = {
    displayName: 'MDCardTitle'
}

MDCardSubtitle.defaultProps = {
    displayName: 'MDCardSubtitle'
}

MDCardSection.defaultProps = {
    displayName: 'MDCardSection'
}

export {MDCard, MDCardTitle, MDCardSubtitle, MDCardSection}