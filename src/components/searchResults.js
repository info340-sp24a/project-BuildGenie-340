import { React, useState, useEffect } from 'react';
import data from '../data/optimizedParts.json';
import { Link } from "react-router-dom";

export function ResultBox(props) {
    let { searchFor } = props;
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Only search if searchFor is not empty
        if(searchFor.toLowerCase() === 'gpu' || searchFor.toLowerCase() === 'graphics card') {
            searchFor = 'video-card'
        }

        if (searchFor.trim()) {
            let searchResults = data.filter(part =>
                part.name.toLowerCase().includes(searchFor.toLowerCase()) ||
                part.Component.toLowerCase().includes(searchFor.toLowerCase())
            );

            if (searchFor.toLowerCase() === 'cpu') {
                searchResults = searchResults.reverse();
            }

            setResults(searchResults);
        } else {
            setResults([]); // Clear results when search is cleared or initially empty
        }
    }, [searchFor]);

    function AddPartButton() {
        return (
            <button className="search-page-button">Add</button>
        );
    }

    const resultsItemArray = results.map((item, index) => {
        const transformed = (
            <div className="result-item" key={index}>
                <p> {item.name} </p>       
                <div>
                    <p className='result-component'> {item.Component} </p>
                    <p> {'$' + item.price}</p>
                    <AddPartButton />
                </div>
            </div>
        );
        return transformed;
    });

    let displayResult;

    if(resultsItemArray.length === 0){
        displayResult = (
            <p>No Results Found</p>
        )
    } else {
        displayResult = resultsItemArray;
    }

    return (
        <div>
            {displayResult}
        </div>
    );
}

export function SearchResultsBox(props) {
    const { inputtedText } = props;

    // search results for search inputted into Search Input
    return (
        <div className="results-box">
            <p>search results for: {inputtedText} </p>
            <div className="results">
                <ResultBox searchFor={inputtedText} />
            </div>
        </div>
    )
}