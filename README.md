<h1  align="center">RMD</h1>
<h3  align="center">react-md-components</h3>
<div  align="center">

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=xNicklaj/react-md-components)](https://dependabot.com) [![dependencies Status](https://david-dm.org/xNicklaj/react-md-components/status.svg)](https://david-dm.org/xNicklaj/react-md-components/status.svg) [![devDependencies Status](https://david-dm.org/xNicklaj/react-md-components/dev-status.svg)](https://david-dm.org/xNicklaj/react-md-components/dev-status.svg)

</div>

[DEMO](https://xnicklaj.github.io/react-md-components/)
[React](https://reactjs.org) components based on [material.io](https://material.io) guidelines handcoded by a normal non-google developer.
## Why choose this package

Have you ever wanted to create a website using material design and tried Material-UI? Let's be honest, that package is hard to use, especially if you want to style it your own way, and that's exactly why I've decided to create a similar package that resembles Google's Material Design, but with simple, basic features.


## Installation

You can download react-md-components as an npm package.

```
npm install react-md-components
```
or
```
yarn add react-md-components

```

## Usage 

All components are exported through the main index.js (I haven't accomplished yet to set it as a flat package);
You can find some examples in the docs:

## Components
### MDDivider
#### Properties
```
    MDDivider.primeryColor: string, default: '#000' \\ this defines the color of the divider.
```
Reference: [material.io/components/dividers/](https://material.io/components/dividers/)
### MDCard
#### Properties
```
    MDCard.dark: bool, default: false \\ this defines whether the card must use dark mode.
    MDCard.media: string, default: '' \\ this defines the media included in the card. This version only supports images.
    MDCard.title: string, default: '' !required \\ this defines the title of the card. Deprecates MDCardTitle.
    MDCard.subtitle: string, default: '' \\ this defines the secondary text of the card. Deprecates MDCardSubtitle.
    MDCard.accentColor: string, default: '' \\ this defines the accent color of the action buttons.
    MDCard.actions: ArrayOf(Action), default: [] \\ this defines the actions at the bottom of the card.
```
#### Actions
```
    Action.title: string,
    Action.onClick: function

    // e.g:
    {
        title: 'Open github',
        onClick: () => {
            window.open('https://www.github.com/xNicklaj/react-md-components');
        }
    }
```
#### MDCardSection
This component has no attributes other than its children.
#### Full example
```
    <MDCard 
        media='https://images7.alphacoders.com/909/909467.jpg'
        title='Title goes here'
        subtitle='Secondary text'
        actions={[
            {
                title: 'button'
            },
            {
                title: 'button'
            }
        ]}
    >
        <MDCardSection>Greyhound divisively hello coldly wonderfully marginally far upon excluding.</MDCardSection>
        <MDCardSection>Tags: <b>#reactjs</b></MDCardSection>
        <MDDivider />
    </MDCard>
```
Reference: [material.io/components/cards/](https://material.io/components/cards/)
### MDButton
#### Properties
```
    MDButton.outlined: bool, default: false \\ this makes the button assume an outlined style.
    MDButton.text: bool, default: false \\ this makes the button assume a text-only style.
    MDButton.accentColor: string, default: '' \\ this defines the accent color of the component.
    MDButton.type: string, default: 'button' \\ this defines the type of the button. Check MDN References for more informations on the type attribute of a button.
    MDButton.name: string, default: '' \\ this defines the name of the button.
    MDButton.form: string, default: '' \\ this defines the form the button is linked to.
    MDButton.disabled: bool, default: false \\ this defines whether tthe button is disabled or not.

    Note: the default style will be condensed. To select this, avoid using .text or .outlined.
    Note: only use either .text or .outlined.
```
Reference: [material.io/components/buttons/](https://material.io/components/buttons/)
### MDTextField
#### Properties
```
    MDTextField.outlined: bool, default: false \\ this makes the textfield assume an outlined style.
    MDTextField.error: bool, default: false \\ this defines whether the textfield must assume an error identity.
    MDTextField.type: string, default: 'text' \\ this defines the type of the input field.
    MDTextField.accentColor: string, default: '' \\ this defines the accent color of the component.
    MDTextField.name: string, default: '' \\ this defines the name of the textfield in the dom.
    MDTextField.value: string, default: '' \\ this defines the default value of the text field.
    MDTextField.disabled: true, default: false \\ this defines the disabled attribute of the input field.
```
Reference: [material.io/components/textfields/](https://material.io/components/textfields/)

## TO-DO
* MDFloatingButton: this component is still in beta and its documentation will be released upon its completion.
* MDBanners
* Chips
* Fix: dynamic child assignment in cards not working.

## License
This library is using MIT License.