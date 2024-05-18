import { Footer } from './footer';
import  { Navbar } from './navbar'

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
            <button type="button" className="homepage-btn-style">
                <a href="build.html" className="colored-btn-text">Begin Your Build</a>
            </button>
        </div>
    )
}

export function MainPage(props) {
    return (
        <div>
            <Navbar />
            <main>
                <MainPageText />
                <MainToBuildButton />
            </main>
            <Footer />
        </div>
        
    );
}