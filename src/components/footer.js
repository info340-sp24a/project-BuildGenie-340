import React from "react";

export function Footer(props) {
    return(
        <footer className="mt-auto">
            <div className="footer-container">
                <div className="footer-main">
                    <a href="index.html">
                        <h3><span className="colored-title">B</span>G</h3>
                    </a>
                    <p>Building PCs Like Magic</p>
                </div>
            </div>
            <div className="footer-bottom">
                © 2024 University of Washington | INFO 340 | All Rights Reserved.
            </div>
        </footer>
    )
}