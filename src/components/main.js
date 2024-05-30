import { Footer } from './footer';
import  { Navbar } from './navbar'
import { Link } from 'react-router-dom'


function MainPageText(props){
    return (
        <div>
            <h1 className="header-text">
                <span className="coloring-header">Custom PC's,</span> made easy.
            </h1>
            <p className="homepage-subtext ">
                Explore a range of parts and price<br/>
                comparisons to build a PC that fits<br/>
                your needs.
            </p>
        </div>
    )
}

function MainToBuildButton(props){
    return (
        <div className="homepage-btn">
            <Link to="/build">
                <button type="button" className="homepage-btn-style colored-btn-text">Begin Your Build</button>
            </Link>
        </div>
    )
}

export function MainPage(props) {
    return (
        <div>
            <div id="mainPageBody">
                <Navbar />
                <main>
                    <div>
                        <MainPageText />
                        <MainToBuildButton />
                    </div>
                </main>
                </div>
            <Footer />
        </div>
    );
}