import React, { useState, useEffect } from 'react';

import { Footer } from './footer';
import { PCPart } from './parts';
import { calcTotalPrice } from './compare';
import { getDatabase, ref, get, child} from 'firebase/database';


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

    const db = getDatabase();

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
        }
    }, [isDataReady, currUser]);

    const [userBuildsData, setUserBuildsData] = useState({});

    useEffect(() => {
        const fetchBuilds = async () => {
            const dbRef = ref(db);
            try {
                const snapshot = await get(child(dbRef, `builds/${currUser.uid}`));
                if (snapshot.exists()) {
                    setUserBuildsData(snapshot.val());

                } else {
                    console.log("No user builds available");
                }
            } catch (error) {
                console.error("Error fetching builds: ", error);
            }
        };

        fetchBuilds();
    }, [db, currUser.uid]);

    let value = calcTotalPrice(userBuildsData)

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