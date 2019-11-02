import React from 'react'
import styles from './styles/card.module.scss'


const MDCard = (props) => {
    const palette = props.dark ? require('./styles/card-dark.module.scss') : require('./styles/card-light.module.scss')
    const headerChildren = props.children.filter(child => child.type.name === 'MDCardTitle' || child.type.name === 'MDCardSubtitle');
    const footerChildren = props.children.filter(child => child.type.name === 'MDButton');
    const contentChildren = props.children.filter(child => child.type.name !== 'MDCardTitle' && child.type.name !== 'MDCardSubtitle' && child.type.name !== 'MDButton' && child.type.name !== 'MDDivider')
    
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
                    footerChildren.length ? props.children.filter(child => child.type.name === 'MDDivider') : null
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

module.exports = {
    MDCard,
    MDCardTitle,
    MDCardSubtitle,
    MDCardSection
}