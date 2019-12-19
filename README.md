# react-md-components
[DEMO](https://xnicklaj.github.io/react-md-components/)
[React](https://reactjs.org) components based on [material.io](https://material.io) guidelines handcoded by a normal non-google developer.

## Why choose this package
Have you ever wanted to create a website using material design and tried Material-UI? Let's be honest, that package is hard to use, especially if you want to style it your own way, and that's exactly why I've decided to create a similar package that resembles Google's Material Design, but with simple, basic features.

## Installation
You can download react-md-components as an npm package.

```
// using npm
npm install react-md-components

// using yarn
yarn add react-md-components

```

## Usage 

All components are exported through the main index.js (I haven't accomplished yet to set it as a flat package);
Here's an example (You can find it also in the docs):

```
import React from 'react';

import {MDCard, MDButton, MDCardTitle, MDCardSubtitle, MDCardSection, MDDivider} from 'react-md-components'

const App = () => {
    return <>
        <div >
            <MDCard media='https://images7.alphacoders.com/909/909467.jpg' >
                <MDCardTitle>Title goes here</MDCardTitle>
                <MDCardSubtitle>Secondary text</MDCardSubtitle>
                <MDCardSection>Greyhound divisively hello coldly wonderfully marginally far upon excluding.</MDCardSection>
                <MDCardSection>Tags: <b>#reactjs</b></MDCardSection>
                <MDDivider />
                <MDButton text>button</MDButton>
                <MDButton text>button</MDButton>
            </MDCard>
        </div>
    </>
}
```

## Components

```
    MDDivider
    MDDivider.color: String, default: '#000' \\ this defines the color of the divider.
```
Reference: [material.io/components/dividers/](https://material.io/components/dividers/)
```
    MDCard
    MDCard.dark: bool, default: false \\ this defines whether the card must use dark mode.
    MDCard.media: String, default: '' \\ this defines the media included in the card. This version only supports images.
```
Reference: [material.io/components/cards/](https://material.io/components/cards/)
```
    MDButton
    MDButton.outlined: bool, default: false \\ this makes the button assume an outlined style.
    MDButton.text: bool, default: false \\ this makes the button assume a text-only style.
    MDButton.accentColor: string, default: '' \\ this defines the accent color of the component.

    Note: the default style will be condensed. To select this, avoid using .text or .outlined.
    Note: only use either .text or .outlined.
```
Reference: [material.io/components/buttons/](https://material.io/components/buttons/)
```
    MDTextField
    MDTextField.outlined: bool, default: false \\ this makes the textfield assume an outlined style.
    MDTextField.error: bool, default: false \\ this defines whether the textfield must assume an error identity.
    MDTextField.type: string, default: 'text' \\ this defines the type of the input field.
    MDTextField.accentColor: string, default: '' \\ this defines the accent color of the component.
```
Reference: [material.io/components/textfields/](https://material.io/components/textfields/)

## TO-DO

MDFloatingButton: this component is still in beta and its documentation will be released upon its completion.
MDBanners
Chips

Fix: dynamic child assignment in cards not working.

## License
This library is using MIT License.