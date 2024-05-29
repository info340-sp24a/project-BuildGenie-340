import React from "react";

export function ResultBox(props) {
    const { searchFor } = props;
    // get inputtedText and compare to parts in json file, if names match, add to array and display
    // if nothing matches, display empty
    return(
        <div>
            <p>Empty</p>
        </div>
    )
}

export function SearchResultsBox(props) {
    const { inputtedText } = props;

    // search results for search inputted into Search Input
    return (
        <div className="results-box">
            <p>search results for: {inputtedText} </p>
            <div className="filter-result-box results">
                <ResultBox searchFor={inputtedText} />
            </div>
        </div>
    )
}