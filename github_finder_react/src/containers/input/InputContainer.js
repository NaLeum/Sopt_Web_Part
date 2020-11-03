import React, { useState } from 'react';
import SearchInput from '../../components/input/SearchInput';

const InputConatiner = ({onSubmit}) => {
    const [value,setValue] = useState('');

    const handleChange = e => {
        console.log(e.target.value);

        setValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();

        onSubmit(value);
        setValue('');
    }
    return(
        <form onSubmit={handleSubmit}>
            <SearchInput type='text' value={value} onChange={handleChange}  />
        </form>
    )
}

export default InputConatiner;