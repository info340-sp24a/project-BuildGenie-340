// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import  { MainPage } from './main';
import { SeachPage } from './search';
import { BuildPage } from './build';
import { ComparePage } from './compare';
import '../style.css';

export default function App(props) {
  return (
    // <MainPage />
    // <SeachPage />
    // <BuildPage />
    <ComparePage />
  )
}