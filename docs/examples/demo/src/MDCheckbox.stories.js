import React, {useState} from 'react';
import { MDCheckbox } from '../../../../dist/index';

export default { title: 'MDCheckbox' };

export const filledText = () => {
    const [isError, setError] = useState(false);
    return <>
        <div style={{display: 'grid', gridRowGap: '20px', maxWidth: '50%'}}>
            <MDCheckbox title='oki' />
        </div>
    </>
}