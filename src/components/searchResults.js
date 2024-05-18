import React from "react";
 // ximport Button from 'react-bootstrap/Button';
// npm install react-bootstrap bootstrap

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

    // in future, props will be an array of PC Component objects, if props is empty, display empty, if propts is not empty, display items
    return(
        <div className="results">
            <p>Empty</p>
        </div>
    )
}

export function SearchResultsBox(props) {
    // search results for search inputted into Search Input
    return (
        <div className="results-box">
            <p>search results for:</p>
            <div className="filter-result-box">
                <div className="filter-results">
                    <FilterSortByBox />
                    <ResultBox />
                </div>
            </div>
        </div>
    )
}