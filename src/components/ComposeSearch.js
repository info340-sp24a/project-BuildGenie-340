import React, { useState } from 'react';

export function ComposeSearch(props) {

    const [inputtedText, setInputtedText] = useState('')

    const handleChange = (event) => {
        setInputtedText(event.target.value);
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Submitted text:', inputtedText);
        setInputtedText('')
    }

    return (
        <form className='search-bar-button' onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    id="search" 
                    className="form-control search-bar search-input" 
                    name="search"
                    placeholder="search for parts..."
                    value={inputtedText}
                    onChange={handleChange}
                />
            </div>
            <button type="submit" className="search-button">search</button> 
        </form>
    )
}
