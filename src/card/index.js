import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles/card.module.scss';

import MDButton from '../button/index';

import DarkPalette from './styles/card-dark.module.scss';
import LightPalette from './styles/card-light.module.scss';

const MDCard = props => {
  const palette = props.dark ? DarkPalette : LightPalette;
  const children = props.children || [];
  let actions = props.actions || [];
  let contentChildren = [];
  if (children && children.length > 0)
    contentChildren = children.filter(
      child =>
        child.props.displayName != null &&
        child.props.displayName !== 'MDCardTitle' &&
        child.props.displayName !== 'MDCardSubtitle' &&
        child.props.displayName !== 'MDButton' &&
        child.props.displayName !== 'MDDivider'
    );

  return (
    <>
      <div
        {...props}
        className={`${styles.MDCard} ${palette.MDCard} ${
          props.className ? props.className : ''
        }`}
      >
        {props.media ? (
          <img
            className={styles.MDCardMedia}
            src={`${props.media}`}
            alt={`${props.media}`}
          />
        ) : null}
        <div>
          <div className={`${styles.MDCardHeader} ${palette.MDCardHeader}`}>
            <h2 className={styles.MDCardTitle}>{props.title}</h2>
            <h4 className={styles.MDCardSubtitle}>{props.subtitle}</h4>
          </div>
          <div className={`${styles.MDCardContent} ${palette.MDCardContent}`}>
            {contentChildren}
          </div>
          {children && actions.length
            ? children.filter(child => child.props.displayName === 'MDDivider')
            : null}
          <div className={`${styles.MDCardFooter} ${styles.MDCardFooter}`}>
            {actions.map(action => {
              return (
                <MDButton
                  key={action.key}
                  onClick={action.onClick}
                  text
                  type="button"
                  accentColor={props.accentColor}
                >
                  {action.title}
                </MDButton>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

const MDCardSection = ({ children }) => {
  return <p className={styles.MDCardSection}>{children}</p>;
};

MDCard.propTypes = {
  media: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  dark: PropTypes.bool,
  accentColor: PropTypes.string,
  actions: PropTypes.arrayOf(PropTypes.object),
  children: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.any,
};

MDCard.defaultProps = {
  media: '',
  title: '',
  accentColor: '',
  actions: [],
  subtitle: '',
  dark: false,
  displayName: 'MDCard',
};

MDCardSection.defaultProps = {
  displayName: 'MDCardSection',
};

MDCardSection.propTypes = {
  children: PropTypes.any,
};

export { MDCard, MDCardSection };
