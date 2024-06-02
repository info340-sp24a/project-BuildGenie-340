import { Link } from "react-router-dom";
import { getAuth, signOut} from 'firebase/auth';

export function Navbar(props) {

    const handleSignOut = (event) => {
        let auth = getAuth();
        signOut(auth);
    }

    let currUser = props.currUser;

    return(
        <nav>
            <Link to="/"><h1><span className="colored-title">Build</span>Genie</h1></Link>
            <ul className="links-long">
                <Link to="/search"><img src="../img/search-icon.svg" alt="search" /><p>Search</p></Link>
                <Link to="/build"><img src="../img/build-icon.svg" alt="build" /><p>Build</p></Link>
                <Link to="/compare"><img src="../img/compare-icon.svg" alt="compare" /><p>Compare</p></Link>
                {/* have profile picture show up with 'Sign Out' button if signed in */}
                {currUser.userId && <>
                    <button className ='' onClick={handleSignOut}>Sign Out</button>
                    <p>Hello</p>
                </>
              
                }
                {!currUser.userId && 
                    <Link to="/login"><img src="../img/login-icon.svg" alt="login" /><p>Login</p></Link>
                }
                {/* if no sign in, have 'login show up' */}

            </ul>
            <ul className="links-short">
                <Link to="/search"><img src="../img/search-icon.svg" alt="search" /></Link>
                <Link to="/build"><img src="../img/build-icon.svg" alt="build" /></Link>
                <Link to="/compare"><img src="../img/compare-icon.svg" alt="compare" /></Link>
                <Link to="/login"><img src="../img/login-icon.svg" alt="login" /></Link>
            </ul>
        </nav>
    )
}