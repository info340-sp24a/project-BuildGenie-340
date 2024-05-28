import React, { useState } from 'react';

export function ComposeSearch(props) {
    const { inputtedText, setInputtedText, handleSubmit } = props;

    const handleChange = (event) => {
        setInputtedText(event.target.value);
    };

    return (
        <div>
            <form className='search-bar-button' onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        id="search" 
                        className="form-control search-bar search-input" 
                        placeholder="search for parts..."
                        autoComplete="off"
                        value={inputtedText}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="search-button">search</button> 
            </form>
        </div>
    )
}
