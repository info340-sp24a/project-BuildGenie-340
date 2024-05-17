import React from 'react';

import { Navbar } from './navbar';
import { Footer } from './footer';
import { PCPart } from './parts';

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
                <PCPart />
            </table>
                <Footer />
        </div>
    )
}