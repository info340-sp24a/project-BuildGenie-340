import { React, useState, useEffect } from 'react';
import data from '../data/optimizedParts.json';
import { getDatabase, ref, push, set as firebaseSet, child, get} from 'firebase/database'

export function ResultBox(props) {
    let { searchFor, setMessage } = props;
    const [results, setResults] = useState([]);
    const db = getDatabase();

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
            setResults([]);
        }
    }, [searchFor]);

    function addPartToBuild(part) {
        const buildRef = ref(db, 'build');
        if(part.hasOwnProperty("")){
            delete part[""]
        }

        get(buildRef)
            .then((snapshot) => {
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
                        const partAdded = (part.name + " (" + part.Component + ")");
                        const message = (
                            <div className="part-message">
                                <p className="part-added">{partAdded}</p>
                                <p>added to build</p>
                            </div>
                        )                 
                        setMessage(message);
                    });
        });
    };

    function AddPartButton({part}) {
        return (
            <button className="search-page-button" onClick={() => addPartToBuild(part)}>Add</button>
        );
    };

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
    const [message, setMessage] = useState("");

    return (
        <div className="results-box">
            <p>search results for: {inputtedText} </p>
            <div>{message}</div>
            <div className="results">
                <ResultBox searchFor={inputtedText} setMessage={setMessage}/>
            </div>
        </div>
    );
};
