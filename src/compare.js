import React from 'react';

export function ComparePage(props) {
    return (
        // <section id="build-header">
        //     <h1>Compare your builds</h1>
        // </section>
        <div class="comparison-tables">
            <div class="build-table">
                <h2>Your Build</h2>
                <table>
                    <tr>
                        <td><input type="checkbox" id="yourBuild" class="build-checkbox"/><label for="yourBuild">Your Build</label></td>
                    </tr>
                </table>
            </div>
            <div class="build-table">
                <h2>Comparison Build</h2>
                <table>
                    <tr>
                        <td><input type="checkbox" id="comparisonBuild" class="build-checkbox"/><label for="comparisonBuild">Comparison Build</label></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}