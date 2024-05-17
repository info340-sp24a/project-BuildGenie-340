import React from 'react';

import { Navbar } from './navbar';
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

    return (
        <div>
            <Navbar />
            <PartTitles someTitleList={titleList} />
            <table className="PCParts main">
                {/* CPU, Motherboard, CPU Cooler, RAM, Storage, GPU, Power Supply, Case, Monitor */}
                <PCPart partData={PC_PART_DATA[11910]} />
                <PCPart partData={PC_PART_DATA[11130]} />
                <PCPart partData={PC_PART_DATA[5381]} />
                <PCPart partData={PC_PART_DATA[4]} />
                <PCPart partData={PC_PART_DATA[3093]} />
                <PCPart partData={PC_PART_DATA[15703]} />
                <PCPart partData={PC_PART_DATA[9095]} />
                <PCPart partData={PC_PART_DATA[14550]} />
                <PCPart partData={PC_PART_DATA[6325]} />

                {/* Need to make a function to only get CPU for first, Motherboard for second, etc..
                    UPS is "uninterruptible power supply" */}
                <tbody>
                    <tr className="item-footer">
                        <td colSpan="5" className="component">Grand Total</td>
                        <td colSpan="1" className="price">
                            <b>$0.00</b>
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