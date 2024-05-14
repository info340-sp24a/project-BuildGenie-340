export function Navbar(props) {
    return(
        <nav>
            <a href="../public/index.html"><h1><span className="colored-title">Build</span>Genie</h1></a>
            <ul className="links-long">
                <a href="../public/search.html"><img src="../img/search-icon.svg" alt="search" /><p>Search</p></a>
                <a href="../public/build.html"><img src="../img/build-icon.svg" alt="build" /><p>Build</p></a>
                <a href="../public/compare.html"><img src="../img/compare-icon.svg" alt="compare" /><p>Compare</p></a>
                <a href="#Login"><img src="../img/login-icon.svg" alt="login" /><p>Login</p></a>
            </ul>
            <ul className="links-short">
                <a href="../public/search.html"><img src="../img/search-icon.svg" alt="search" /></a>
                <a href="../public/build.html"><img src="../img/build-icon.svg" alt="build" /></a>
                <a href="../public/compare.html"><img src="../img/compare-icon.svg" alt="compare" /></a>
                <a href="#Login"><img src="../img/login-icon.svg" alt="login" /></a>
            </ul>
        </nav>
    )    
}