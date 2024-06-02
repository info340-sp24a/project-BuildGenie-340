import React from 'react';

import { Footer } from './footer';
import { PCPart } from './parts';

import PC_PART_DATA from './../data/optimizedParts.json'
// console.log(PC_PART_DATA);

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

    // TODO: ADD 'add component' BUTTONS WHICH CONNECT TO '/search' AND BRING DATA HERE.
    // id list of PCParts in `PC_PART_DATA` that are to be displayed in `Build.js`
    // CPU = 11910
    const temporarySetPCPartList = [11910, 11130, 5381, 4, 3093, 15703, 9095, 14550, 6325];

    // Data Processing Function for Displayed Parts
    const displayedParts = temporarySetPCPartList.map((id) => {
        // console.log(PC_PART_DATA[2000000000]); // ALWAYS RETURNS 'UNDEFINED'!
        // if (id === undefined) {
        //     // return addComponent(11910);
        //     console.log(id);
        // } else {
            return <PCPart key={id} partData={PC_PART_DATA[id]} />
        // }
    });

    // TODO: Make <PCPart> render for every known value, and return 'add component' button otherwise.
    // There is a set order in what elements can be on the table, so a value needs to be passed into
    // the search query that equals what component it is. This also makes sure that someone who adds
    // a monitor but not a CPU doesn't have the monitor render in the table first; a 'fixed' table.

    // Calculate the Grand Total Price
    let value = 0;
    temporarySetPCPartList.forEach((id) => {
        if (id !== undefined) {
            value += parseFloat(PC_PART_DATA[id].price);
        }
    });


    return (
        <div>
            <PartTitles someTitleList={titleList} />
            <table className="PCParts main">
                {/* CPU, Motherboard, CPU Cooler, RAM, Storage, GPU, Power Supply, Case, Monitor */}
                {/* Temporary `<PCPart>` Calls to elements that resemble the Final Version */}
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
            <form className="footer-top">
                <button type="submit" aria-label="Submit">Save your build</button>
            </form>
            <Footer />
        </div>
    )
}