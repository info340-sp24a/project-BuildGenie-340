import React, { useEffect, useState } from "react";
import { getDatabase, ref, get, child } from "firebase/database";
import { Link } from 'react-router-dom';

export function PCPart(props) {

    const [buildState, setBuildState] = useState([]);

    // If passed an ID which does not exist, `partName` = undefined.
    // SINGULAR PC PART OBJECT
    const {partName, currUser} = props;
    const db = getDatabase();

    useEffect(() => {
        const fetchBuilds = async () => {
            try {
                const snapshot = await get(child(ref(db), `builds/${currUser.uid}`));
                const buildRefObject = snapshot.val();
                // console.log("This is buildRefObject:", buildRefObject);

                const keyArray = Object.keys(buildRefObject);
                const userComponents = keyArray.map((keyString) => { // Get the parts out of the build in "userbuild"
                    const PCObj = buildRefObject[keyString];
                    console.log("This is PCObj:", PCObj);
                    PCObj.firebaseKey = keyString;
                    return PCObj;
            });
            setBuildState(userComponents);

            } catch(error) {
                console.error("Error fetching builds: ", error);
            }
        };
        fetchBuilds();

    }, [db, currUser.uid]); // place function to rerun build render here.

    // useEffect(() => {
    //     const fetchBuilds = async () => {
    //         const dbRef = ref(db);
    //         try {
    //             const snapshot = await get(child(dbRef, `builds/${currUser.uid}`));
    //             if (snapshot.exists()) {
    //                 const userBuildsData = snapshot.val();
    //                 const structuredUserBuilds = {
    //                     name: "Your Build",
    //                     parts: userBuildsData
    //                 };

    //                 console.log('Fetched user build:', structuredUserBuilds);
    //                 setBuilds([...presetBuilds, structuredUserBuilds]);
    //             } else {
    //                 console.log("No user builds available");
    //             }
    //         } catch (error) {
    //             console.error("Error fetching builds: ", error);
    //         }
    //     };

    //     fetchBuilds();
    // }, [db, currUser.uid]);

    // helper function to make 'Component' look better.
    function capitalizeFirstLetter(string) {
        let returnedString = string.replace(/-/g, ' ');
        return returnedString.charAt(0).toUpperCase() + returnedString.slice(1);
    }

    function createBuildTable() {
        console.log("This is buildState at creation:", buildState); // Array of Objects
        // Check through the buildState array, and see if they have a part. Return "add Component" if otherwise
        buildState.forEach((part) => {
            console.log("part.Component:", part.Component, "\nRequested Part:", partName);
            if (part.Component === partName) {
                console.log("WE FOUND A MATCH!");
                return (
                    <tr className="item">
                        <th scope="row" className="component">{capitalizeFirstLetter(partName)}</th>
                        <td className="product">
                            <img src={"/img/icons/" + part.Component + ".png"} alt={part.Component.replace(/-/g, ' ') + " placeholder"}/>
                        </td>
                        <td className="Title">{part.name}</td>
                        <td className="Price">{"$" + part.price}</td>
                        <td className="Link">
                            <a href={"https://www.amazon.com/s?k=" + part.name} target="_blank" rel="noreferrer">Buy Now</a>
                        </td>
                        <td className="Remove">
                            <button className="fa fa-trash"></button>
                        </td>
                    </tr>
                );
            }
        });
        // No listed component found
        console.log("No item found... ;(")
        return (
            <tr className="item">
                <th scope="row" className="component">{capitalizeFirstLetter(partName)}</th>
                <td className="addButton"><Link to='/search'><button>Add Component</button></Link></td>
            </tr>
        );
    }

    return (
        <tbody>
            {createBuildTable()}
        </tbody>
    )
}