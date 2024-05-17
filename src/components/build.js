import React from 'react';

import { Navbar } from './navbar';
import { Footer } from './footer';
import { PCPart } from './parts';

import PC_PART_DATA from './../data/optimizedParts.json'
// console.log(PC_PART_DATA);

/*
-------------------------------------
|   ALL COLUMNS IN PC_PART_DATA     |
|           (that matter)           |
-------------------------------------
    `name`
    `Component`
    `price`
    `type`
*/

export function BuildPage(props) {
    return (
        <div>
            <Navbar />
            <table className="PCParts head">
                <thead>
                    <tr id="part-titles">
                        <th scope="col">Component</th>
                        <th scope="col">Product</th>
                        <th scope="col">Title</th>
                        <th scope="col">Price</th>
                        <th scope="col">Link</th>
                        <th scope="col">Remove</th>
                    </tr>
                </thead>
            </table>
            <table className="PCParts main">
                <PCPart component={"CPU"}/>
                <PCPart component={"Motherboard"} img={"../img/MSI Z690-A.jpg"} />
                {/* Continue for all components... may want to make a helper function or .JSON to help out. */}
            </table>
            <form className="footer-top">
                <button type="submit" aria-label="Submit">Save your build</button>
            </form>
            <Footer />
        </div>
    )
}