import { Link } from "react-router-dom";

export function Navbar(props) {
    return(
        <nav>
            <Link to="/"><h1><span className="colored-title">Build</span>Genie</h1></Link>
            <ul className="links-long">
                <Link to="/search"><img src="../img/search-icon.svg" alt="search" /><p>Search</p></Link>
                <Link to="/build"><img src="../img/build-icon.svg" alt="build" /><p>Build</p></Link>
                <Link to="/compare"><img src="../img/compare-icon.svg" alt="compare" /><p>Compare</p></Link>
                <Link to="/login"><img src="../img/login-icon.svg" alt="login" /><p>Login</p></Link>
            </ul>
            <ul className="links-short">
                <Link to="../public/search.html"><img src="../img/search-icon.svg" alt="search" /></Link>
                <Link to="../public/build.html"><img src="../img/build-icon.svg" alt="build" /></Link>
                <Link to="../public/compare.html"><img src="../img/compare-icon.svg" alt="compare" /></Link>
                <Link to="#Login"><img src="../img/login-icon.svg" alt="login" /></Link>
            </ul>
        </nav>
    )    
}