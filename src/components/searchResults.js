import React from "react";

export function FilterSortByBox(props) {
    return(
        <div>
            <div className="filter-header">
                <h2>Filter</h2>
            </div>
            <div>
                <h2 className="sort-header">Sort By</h2>
            </div>
        </div>
    )
}

export function ResultBox(props) {
    const { searchFor } = props;
    // get inputtedText and compare to parts in json file, if names match, add to array and display
    // if nothing matches, display empty
    return(
        <div className="results">
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
            <div className="filter-result-box">
                <div className="filter-results">
                    <FilterSortByBox />
                    <ResultBox searchFor={inputtedText} />
                </div>
            </div>
        </div>
    )
}