import React, { useState, useEffect } from 'react';

import { Footer } from './footer';
import { PCPart } from './parts';

// import { delete } from './firebase/database'
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

    const partNames = ["cpu", "motherboard", "cpu-cooler", "memory", "internal-hard-drive", "video-card", "power-supply", "case", "monitor"];

    // Titles for the top of the Table
    const titleList=['Component', 'Product', 'Title', 'Price', 'Link', 'Remove'];

    const [isDataReady, setIsDataReady] = useState(false);

    const handleDataReady = () => {
      setIsDataReady(true);
    };

    const [displayedParts, setDisplayedParts] = useState(
        partNames.map((part) => (
          <PCPart key={part} partName={part} currUser={currUser} onDataReady={handleDataReady} />
        ))
    );


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

    useEffect(() => {
        if (isDataReady) {
            setDisplayedParts(
                partNames.map((part) => (
                    <PCPart key={part} partName={part} currUser={currUser} onDataReady={handleDataReady} />
                ))
            );
            waitForElm('.Price').then(() => {
                let someValue = document.querySelectorAll(".Price");
                console.log(someValue);
                someValue.forEach((price) => {
                    console.log(price);
                })
            });
        }
    }, [isDataReady, currUser]);

    // Helper function for getting prices once rendered
    function waitForElm(selector) {
        return new Promise(resolve => {
            if (document.querySelectorAll(selector).length === partNames.length) {
                return resolve(document.querySelector(selector));
            }

            const observer = new MutationObserver(mutations => {
                if (document.querySelector(selector)) {
                    resolve(document.querySelector(selector));
                    observer.disconnect();
                }
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        });
    }

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