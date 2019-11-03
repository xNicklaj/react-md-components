import React from 'react';
import ReactDOM from 'react-dom';
import {createUseStyles} from 'react-jss'

import {MDCard, MDButton, MDCardTitle, MDCardSubtitle, MDCardSection, MDDivider} from 'react-md-components'

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
        columnGap: '1em'
    },

    '@media (max-width: 700px)': {
        bg: {
            gridTemplateColumns: '1fr',
            padding: '0',
            paddingTop: '1em',
            width: '95%'
        }
    },

    bw: {
        minHeight: '8rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    }
});

const App = () => {
    const style = useStyles();
    return <>
        <div className={style.bg}>
            <MDCard media='https://images7.alphacoders.com/909/909467.jpg' >
                <MDCardTitle>Title goes here</MDCardTitle>
                <MDCardSubtitle>Secondary text</MDCardSubtitle>
                <MDCardSection>Greyhound divisively hello coldly wonderfully marginally far upon excluding.</MDCardSection>
                <MDCardSection>Tags: <b>#reactjs</b></MDCardSection>
                <MDDivider />
                <MDButton text>button</MDButton>
                <MDButton text>button</MDButton>
            </MDCard>
            <MDCard media='https://images7.alphacoders.com/909/909467.jpg' dark>
                <MDCardTitle>Title goes here</MDCardTitle>
                <MDCardSubtitle>Secondary text</MDCardSubtitle>
                <MDCardSection>Greyhound divisively hello coldly wonderfully marginally far upon excluding.</MDCardSection>
            </MDCard>
            <MDCard>
                <MDCardTitle>Title goes here</MDCardTitle>
                <MDCardSubtitle>Secondary text</MDCardSubtitle>
                <MDButton text>Button</MDButton>
            </MDCard>
            <MDCard dark>
                <MDCardTitle>Title goes here</MDCardTitle>
                <MDCardSubtitle>Secondary text</MDCardSubtitle>
                <MDButton accentColor='#1da3dc' text>button</MDButton>
            </MDCard>
            <div className={style.bw}>
                <MDButton>Button</MDButton>
                <MDButton outlined>Button</MDButton>
                <MDButton text>Button</MDButton>
            </div>
            <div className={style.bw}>
                <MDButton accentColor='#212121'>Button</MDButton>
                <MDButton outlined accentColor='#212121'>Button</MDButton>
                <MDButton text accentColor='#212121'>Button</MDButton>
            </div>
        </div>
    </>
}

ReactDOM.render(<App>

</App> , root)