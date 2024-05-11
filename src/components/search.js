import React from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";

function SearchInput(props) {
    return(
        <div className="search-bar">
            <form>
                <input type="text" id="search" className="search-input" name="search" placeholder="search for parts..." /><br />
            </form>
        </div>
    );
}

function FilterSortByBox(props) {
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

function ResultBox(props) {

    // in future, props will be an array of PC Component objects, if props is empty, display empty, if propts is not empty, display items
    return(
        <div className="results">
            <p>Empty</p>
        </div>
    )
}

function SearchResultsBox(props) {
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

export function SeachPage(props) {
    return(
        <div>
            <Navbar />
            <main className="search">
                <SearchInput />
                <SearchResultsBox />
            </main>
            <Footer />
        </div> 
    )
}