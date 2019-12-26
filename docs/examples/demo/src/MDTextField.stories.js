import React, {useState} from 'react';
import { MDTextField, MDButton } from '../../../../dist/index';

export default { title: 'MDTextField' };

export const filledText = () => {
    const [isError, setError] = useState(false);
    return <>
        <div style={{display: 'grid', gridRowGap: '20px', maxWidth: '50%'}}>
            <MDTextField label='Label' error={isError}/>
            <MDButton onClick={() => setError(!isError)}>Toggle error</MDButton>
        </div>
    </>
}

export const filledPassword = () => {
    const [isError, setError] = useState(false);
    return <>
        <div style={{display: 'grid', gridRowGap: '20px', maxWidth: '50%'}}>
            <MDTextField label='Label' error={isError} type='password'/>
            <MDButton onClick={() => setError(!isError)}>Toggle error</MDButton>
        </div>
    </>
}

export const outlinedText = () => {
    const [isError, setError] = useState(false);
    return <>
        <div style={{display: 'grid', gridRowGap: '20px', maxWidth: '50%'}}>
            <MDTextField label='Label' error={isError} outlined/>
            <MDButton onClick={() => setError(!isError)}>Toggle error</MDButton>
        </div>
    </>
}

export const outlinedPassword = () => {
    const [isError, setError] = useState(false);
    return <>
        <div style={{display: 'grid', gridRowGap: '20px', maxWidth: '50%'}}>
            <MDTextField label='Label' error={isError} type='password' outlined/>
            <MDButton onClick={() => setError(!isError)}>Toggle error</MDButton>
        </div>
    </>
}