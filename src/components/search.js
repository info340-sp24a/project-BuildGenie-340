import React, { useState } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchResultsBox } from "./searchResults";

function SearchInput(props) {
    return(
        <div>
            <form>
                <input type="text" id="search" className="search-input search-bar" name="search" placeholder="search for parts..." />
            </form>
        </div>
    );
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