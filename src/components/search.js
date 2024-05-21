import React, { useState } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchResultsBox } from "./searchResults";
import { ComposeSearch } from "./ComposeSearch";

export function SearchPage(props) {
    return(
        <div>
            <Navbar />
            <main className="search">
                <ComposeSearch />
                <SearchResultsBox />
            </main>
            <Footer />
        </div> 
    )
}