import React, { useState } from 'react';

export function ComposeSearch(props) {

    // const [inputtedText, setInputtedText] = useState('');
    // const [submittedText, setSubmittedText] = useState('');

    // const handleChange = (event) => {
    //     setInputtedText(event.target.value);
    // };

    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     setSubmittedText(inputtedText);
    //     // Reset the input field if needed
    //     setInputtedText('');
    // };
    const { inputtedText, setInputtedText, handleSubmit } = props

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
                        value={inputtedText}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="search-button">search</button> 
            </form>
        </div>
    )
}
