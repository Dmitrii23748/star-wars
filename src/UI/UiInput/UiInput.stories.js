import React, {useState} from 'react';

import UiInput from './UiInput';


export default {
    title: 'UI-Kit/UiInput',
    component: UiInput
};


const Template = ( args ) => {
    const [value, setValue] = useState();

    const handleInputChange = (value) => {
        setValue( value );
    }

    return (
        <UiInput
        { ...args }
        value={ value }
        handleInputChange={handleInputChange}
        />
    )
};


const props = {
    value:'',
    handleInputChange: () => console.log('input change'),
    classes: 'Placeholder',
    placeholder: ''
}

export const Default = Template.bind({});
Default.args = {
    ...props,
};
