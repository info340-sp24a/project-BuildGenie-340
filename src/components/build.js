import React from 'react';

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

    // CPU = 11910
    const partNames = ["CPU", "Motherboard", "CPU Cooler", "Memory", "Internal Hard Drive", "Video Card", "Power Supply", "Case", "Monitor"];

    // Data Processing Function for Displayed Parts
    const displayedParts = partNames.map((part) => {
        return <PCPart key={part} partName={part} currUser={currUser} />
    });

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

                {/* Need to make a function to only get CPU for first, Motherboard for second, etc..
                    UPS is "uninterruptible power supply" */}
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