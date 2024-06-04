import React, { useState, useEffect } from 'react';

import { Footer } from './footer';
import { PCPart } from './parts';

/*
-------------------------------------
|   ALL COLUMNS IN PC_PART_DATA     |
|    (in `optimizedParts.json)      |
-------------------------------------
    `name`
    `Component`
    `price`
    `type`
*/

export function BuildPage(props) {
    const {currUser} = props;

    const partNames = ["cpu", "motherboard", "cpu-cooler", "memory", "internal-hard drive", "video-card", "power-supply", "case", "monitor"];

    // For re-rendering table
    const [displayedParts, setDisplayedParts] = useState(partNames.map((part) => {
            return <PCPart key={part} partName={part} currUser={currUser} />
        })
    );

    // console.log("This is displayedParts AT START:", displayedParts);

    // Titles for the top of the Table
    const titleList=['Component', 'Product', 'Title', 'Price', 'Link', 'Remove'];


    // Render the Titles for the table
    function PartTitles(props) {

        const {someTitleList} = props;

        // Data Processing Function for Titles
        const headerList = someTitleList.map((titleName) => {
            const elem = <th key={titleName} scope="col">{titleName}</th>
            return elem;
        });

        // Render Function
        return (
            <table className="PCParts head">
                <thead>
                    <tr id="part-titles">{headerList}</tr>
                </thead>
            </table>
        );
    }

    //NEED TO RERUN <PCPart /> WHEN THE DATABASE PULLS DATA FROM IT!
    useEffect(() => {
        // Data Processing Function for Displayed Parts
        setDisplayedParts(partNames.map((part) => {
            console.log("Entering parts.js");
            const returned = <PCPart key={part} partName={part} currUser={currUser} />
            console.log("\n\n\n\n\nLEFT parts.js\n\n\n\n\n\n");
            return returned;
        }));
    }, [currUser]);

    // Calculate the Grand Total Price
    // TODO: Make a useState() and useEffect() to gather Firebase data on prices to calculate price and display it.
    let value = 0;
    // temporarySetPCPartList.forEach((id) => {
    //     if (id !== undefined) {
    //         value += parseFloat(PC_PART_DATA[id].price);
    //     }
    // });


    return (
        <div>
            <PartTitles someTitleList={titleList} />
            <table className="PCParts main">
                {/* CPU, Motherboard, CPU Cooler, RAM, Storage, GPU, Power Supply, Case, Monitor */}
                {displayedParts}

                <tbody>
                    <tr className="item-footer">
                        <td colSpan="5" className="component">Grand Total</td>
                        <td colSpan="1" className="price">
                            <b>{"$" + value}</b>
                        </td>
                    </tr>
                </tbody>
            </table>
            <Footer />
        </div>
    )
}