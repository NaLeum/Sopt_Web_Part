import React, { useState } from 'react';

const SearchInput = ({onSubmit}) => {
    
    const [input,setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(input);
        setInput('');
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input ype='text' value={input} onChange={handleChange} placeholder='Github 프로필을 검색해보세요'/>
        </form>
    )
}

export default SearchInput;