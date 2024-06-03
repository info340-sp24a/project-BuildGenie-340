import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue, get } from "firebase/database";
import { Link } from 'react-router-dom';

export function PCPart(props) {

    const [buildState, setBuildState] = useState([]);

    // If passed an ID which does not exist, `partName` = undefined.
    // SINGULAR PC PART OBJECT
    const {partName, currUser} = props;

    useEffect(() => {
        const db = getDatabase();
        console.log("This is currUser.uid:", currUser.uid);
        const buildRef = ref(db, 'builds/' + currUser.uid);

        get(buildRef)
            .then((snapshot) => {
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
            });

    }, []); // place function to rerun build render here.

    // helper function to make 'Component' look better.
    function capitalizeFirstLetter(string) {
        let returnedString = string.replace(/-/g, ' ');
        return returnedString.charAt(0).toUpperCase() + returnedString.slice(1);
    }

    function createBuildTable() {
        console.log("This is buildState at creation:", buildState); // Array of Objects
        // Check through the buildState array, and see if they have a part. Return "add Component" if otherwise
        buildState.forEach((part) => {
            if (buildState.part === partName) {
                return (
                    <tr className="item">
                        <th scope="row" className="component">{capitalizeFirstLetter(partName)}</th>
                        <td className="product">
                            <img src={"/img/icons/" + buildState.Component + ".png"} alt={buildState.Component.replace(/-/g, ' ') + " placeholder"}/>
                        </td>
                        <td className="Title">{buildState.name}</td>
                        <td className="Price">{"$" + buildState.price}</td>
                        <td className="Link">
                            <a href={"https://www.amazon.com/s?k=" + buildState.name} target="_blank" rel="noreferrer">Buy Now</a>
                        </td>
                        <td className="Remove">
                            <button className="fa fa-trash"></button>
                        </td>
                    </tr>
                );
            }
        });
        // No listed component found
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