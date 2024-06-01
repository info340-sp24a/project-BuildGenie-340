import { React, useState, useEffect } from 'react';
import data from '../data/optimizedParts.json';
import { getDatabase, ref, push, set as firebaseSet, child, get} from 'firebase/database'

export function ResultBox(props) {
    let { searchFor } = props;
    const [results, setResults] = useState([]);
    const db = getDatabase();

    useEffect(() => {
        let searchQuery = searchFor.replaceAll('gpu', 'video-card')
                                    .replaceAll('graphics card', 'video-card')
                                    .toLowerCase()
                                    .trim();

        // Needed for shrinking down data to only components with parameters listed in searchQuery
        let selectedData = data;

        // Allow for multiple parameters to be included in search (ex: 'MSI GPU')
        let searchParameters = searchQuery.split(" ");

        searchParameters.forEach((parameter) => {
            // not empty search
            if (parameter !== "") {
                let searchResults = selectedData.filter(part =>
                    part.name.toLowerCase().includes(parameter) ||
                    part.Component.toLowerCase().includes(parameter)
                );

                if (parameter === 'cpu') {
                    searchResults = searchResults.reverse();
                }

                selectedData = searchResults;

                setResults(searchResults);
            } else {
                setResults([]);
            }
        });
    }, [searchFor]);

    function addPartToBuild(part) {
        const buildRef = ref(db, 'build');
        if(part.hasOwnProperty("")){
            delete part[""]
        }

        get(buildRef).then((snapshot) => {
                let buildData = snapshot.val();
                if (!buildData) {
                    buildData = {};
                }
                const buildKeys = Object.keys(buildData);
                let partRef = null;

                // Check if build has part with the same component
                for (const key of buildKeys) {
                    if (buildData[key].Component === part.Component) {
                        partRef = child(buildRef, key);
                        break;
                    }
                };

                // If no existing part is found, create a new part reference
                if (partRef === null) {
                    partRef = push(buildRef);
                };

                firebaseSet(partRef, part)
                    .then(() => {
                        console.log(part.name + " (" + part.Component + ") added to build")
                    })
        });
    };

    function AddPartButton({part}) {
        return (
            <button className="search-page-button" onClick={() => addPartToBuild(part)}>Add</button>
        );
    }

    const resultsItemArray = results.map((item, index) => {
        const transformed = (
            <div className="result-item" key={index}>
                <p> {item.name} </p>
                <div>
                    <p className='result-component'> {item.Component} </p>
                    <p> {'$' + item.price}</p>
                    <AddPartButton part={item} />
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
