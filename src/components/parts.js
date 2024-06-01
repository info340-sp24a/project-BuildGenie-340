import React from "react";

// import '../../public/img';

export function PCPart(props) {

    // If passed an ID which does not exist, `partData` = undefined
    const {partData} = props;

    // helper function to make 'Component' look better.
    function capitalizeFirstLetter(string) {
        let returnedString = string.replace(/-/g, ' ');
        return returnedString.charAt(0).toUpperCase() + returnedString.slice(1);
    }

    // TODO: When passed a value which does not exist, instead return a button to search for components
    // May want to create separate helper function outside of `PCPart` to do this...

    return (
        <tbody>
            <tr className="item">
                <th scope="row" className="component">{capitalizeFirstLetter(partData.Component)}</th>
                <td className="product">
                    <img src={"/img/icons/" + partData.Component + ".png"} alt={partData.Component.replace(/-/g, ' ') + " placeholder"}/>
                </td>
                <td className="Title">{partData.name}</td>
                <td className="Price">{"$" + partData.price}</td>
                <td className="Link">
                    <a href={"https://www.amazon.com/s?k=" + partData.name} target="_blank" rel="noreferrer">Buy Now</a>
                </td>
                <td className="Remove">
                    <button className="fa fa-trash"></button>
                </td>
            </tr>
        </tbody>
    )
}