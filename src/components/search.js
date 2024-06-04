import React, { useState } from "react";
import { Footer } from "./footer";
import { SearchResultsBox } from "./searchResults";
import { ComposeSearch } from "./ComposeSearch";

export function SearchPage(props) {
    const { currUser, buildsRef } = props
    const [inputtedText, setInputtedText] = useState('')
    const [finalText, setFinalText] = useState('');


    const handleSubmit = (event) => {
        event.preventDefault();
        setFinalText(inputtedText);
        setInputtedText('');
    };

    return(
        <div>
            <main className="search">
                <ComposeSearch inputtedText={inputtedText} setInputtedText={setInputtedText} handleSubmit={handleSubmit} />
                <SearchResultsBox inputtedText={finalText} currUser={currUser} buildsRef={buildsRef}/>
            </main>
            <Footer />
        </div>
    )
}