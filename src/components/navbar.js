import React from 'react';
import { Link } from "react-router-dom";
import { getAuth, signOut} from 'firebase/auth';

export function Navbar(props) {


    let currUser = props.currUser;

    const handleSignOut = (event) => {
        const auth = getAuth();
        console.log('logging out')
        signOut(auth).then(() => {
            window.location.assign('/');
        });
    }

    return(
        <nav>
            <Link to="/"><h1><span className="colored-title">Build</span>Genie</h1></Link>
            <ul className="links-long">
                <Link to="/search"><img src="../img/search-icon.svg" alt="search" /><p>Search</p></Link>
                <Link to="/build"><img src="../img/build-icon.svg" alt="build" /><p>Build</p></Link>
                <Link to="/compare"><img src="../img/compare-icon.svg" alt="compare" /><p>Compare</p></Link>
                {/* have profile picture show up with 'Sign Out' button if signed in */}
                {currUser.uid && <>
                    <Link onClick={handleSignOut}><img src= {currUser.photoURL || "../img/logout-icon.svg"} alt='pfp' />Sign Out</Link>
                </>

                }

                {/* if no sign in, have 'login show up' */}
                {!currUser.uid && <>
                    <Link to="/login"><img src="../img/login-icon.svg" alt="login" /><p>Login</p></Link>
                    </>
                }

            </ul>
            <ul className="links-short">
                <Link to="/search"><img src="../img/search-icon.svg" alt="search" /></Link>
                <Link to="/build"><img src="../img/build-icon.svg" alt="build" /></Link>
                <Link to="/compare"><img src="../img/compare-icon.svg" alt="compare" /></Link>
                {currUser.uid && <>
                    <Link onClick={handleSignOut}><img src= {currUser.photoURL || "../img/logout-icon.svg"} alt='pfp' /></Link>
                </>

                }

                {/* if no sign in, have 'login show up' */}
                {!currUser.uid && <>
                    <Link to="/login"><img src="../img/login-icon.svg" alt="login" /></Link>
                    </>
                }
            </ul>
        </nav>
    )
}