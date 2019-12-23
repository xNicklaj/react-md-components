import React from 'react';
import ReactDOM from 'react-dom';
import { createUseStyles } from 'react-jss';

import {
  MDCard,
  MDButton,
  MDCardTitle,
  MDCardSubtitle,
  MDCardSection,
  MDDivider,
  MDFloatingButton,
  MDTextField,
} from 'react-md-components';

const root = document.getElementById('root');

const useStyles = createUseStyles({
  bg: {
    width: '98%',
    height: '98%',
    display: 'grid',
    margin: '1em',
    alignItems: 'start',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    rowGap: '1em',
    columnGap: '1em',
  },

  '@media (max-width: 700px)': {
    bg: {
      gridTemplateColumns: '1fr',
      padding: '0',
      paddingTop: '1em',
      width: '95%',
    },
  },

  bw: {
    minHeight: '8rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },

  br: {
    minHeight: '8rem',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
});

const App = () => {
  const style = useStyles();
  return (
    <>
      <div className={style.bg}>
        <MDCard
          media="https://images7.alphacoders.com/909/909467.jpg"
          title="Title goes here"
          subtitle="Secondary text"
          actions={[
            {
              title: 'button',
            },
            {
              title: 'button',
            },
          ]}
        >
          <MDCardSection>
            Greyhound divisively hello coldly wonderfully marginally far upon
            excluding.
          </MDCardSection>
          <MDCardSection>
            Tags: <b>#reactjs</b>
          </MDCardSection>
          <MDDivider />
        </MDCard>
        <MDCard
          media="https://images7.alphacoders.com/909/909467.jpg"
          title="Title goes here"
          subtitle="Secondary text"
          dark
        >
          <MDCardSection>
            Greyhound divisively hello coldly wonderfully marginally far upon
            excluding.
          </MDCardSection>
        </MDCard>
        <MDCard
          title="Title goes here"
          subtitle="Secondary text"
          actions={[{ title: 'button' }]}
        />
        <MDCard
          title="Title goes here"
          subtitle="Secondary text"
          dark
          accentColor="#1da3dc"
          actions={[{ title: 'button' }]}
        />
        <div className={style.bw}>
          <MDButton>Button</MDButton>
          <MDButton outlined>Button</MDButton>
          <MDButton text>Button</MDButton>
        </div>
        <div className={style.bw}>
          <MDButton accentColor="#212121">Button</MDButton>
          <MDButton outlined accentColor="#212121">
            Button
          </MDButton>
          <MDButton text accentColor="#212121">
            Button
          </MDButton>
        </div>
        <div className={style.br}>
          <MDFloatingButton>+</MDFloatingButton>
          <MDFloatingButton mini>+</MDFloatingButton>
        </div>
        <div className={style.bw}>
          <MDTextField
            style={{ marginTop: '.4em', marginBottom: '.4em' }}
            label="Username"
            type="email"
          />
          <MDTextField
            style={{ marginTop: '.4em', marginBottom: '.4em' }}
            label="Password"
            type="password"
          />
        </div>
        <div className={style.bw}>
          <MDTextField
            style={{ marginTop: '.4em', marginBottom: '.4em' }}
            label="Username"
            type="email"
            outlined
          />
          <MDTextField
            style={{ marginTop: '.4em', marginBottom: '.4em' }}
            label="Password"
            type="password"
            outlined
          />
        </div>
        <div className={style.bw}>
          <MDTextField
            style={{ marginTop: '.4em', marginBottom: '.4em' }}
            label="Label"
            error
          />
          <MDTextField
            style={{ marginTop: '.4em', marginBottom: '.4em' }}
            label="Label"
            outlined
            error
          />
        </div>
      </div>
    </>
  );
};

ReactDOM.render(<App></App>, root);
