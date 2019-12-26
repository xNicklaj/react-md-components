import React, {useState} from 'react';
import { MDButton } from '../../../../dist/index';

import {SwatchesPicker} from 'react-color';

export default { title: 'MDButton' };

export const contained = () => <MDButton >BUTTON</MDButton>;

export const text = () => <MDButton text>BUTTON</MDButton>;

export const outlined = () => <MDButton outlined>BUTTON</MDButton>;

export const customColor = () => {
    const [color, setColor] = useState('blue');
    const [textColor, setTextColor] = useState('');
    return <>
        <div style={{display: 'grid', gridRowGap: '1em', maxWidth: '30%'}}>
            <MDButton accentColor={color} textColor={textColor}>
                BUTTON
            </MDButton>
            <label style={{fontFamily: 'Helvetica'}}>Background color:</label>
            <SwatchesPicker color='blue' onChangeComplete={color => setColor(color.hex)}/>
            <label style={{fontFamily: 'Helvetica'}}>Text color:</label>
            <SwatchesPicker color='#fff' onChangeComplete={color => setTextColor(color.hex)}/>
        </div>
    </>
}