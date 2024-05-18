import React from "react";

// import '../../public/img';

export function PCPart(props) {

    const {partData} = props;

    // helper function to make 'Component' look better.
    function capitalizeFirstLetter(string) {
        let returnedString = string.replace(/-/g, ' ');
        return returnedString.charAt(0).toUpperCase() + returnedString.slice(1);
    }

    return (
        <tbody>
            <tr className="item">
                <th scope="row" className="component">{capitalizeFirstLetter(partData.Component)}</th>
                <td className="product">
                    <img src={"./img/icons/" + partData.Component + ".png"} alt={partData.Component.replace(/-/g, ' ') + " placeholder"}/>
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