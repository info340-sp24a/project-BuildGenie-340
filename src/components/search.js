import React, { useState } from "react";
import { Footer } from "./footer";
import { Navbar } from "./navbar";
import { SearchResultsBox } from "./searchResults";
import { ComposeSearch } from "./ComposeSearch";

export function SearchPage(props) {
    const [inputtedText, setInputtedText] = useState('')
    const [finalText, setFinalText] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalText(inputtedText);
        setInputtedText('')
    };

    return(
        <div>
            <Navbar />
            <main className="search">
                {/* <ComposeSearch inputtedText={inputtedText} setInputtedText={setInputtedText} /> */}
                <ComposeSearch inputtedText={inputtedText} setInputtedText={setInputtedText} handleSubmit={handleSubmit} />
                <SearchResultsBox inputtedText={finalText} />
            </main>
            <Footer />
        </div> 
    )
}