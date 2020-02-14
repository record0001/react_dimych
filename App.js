import React from 'react';
//import logo from './logo.svg';
import './App.css';

import Header from './myComponent/Header';
import TopMenu from './myComponent/TopMenu';
import LeftCol from './myComponent/LeftCol';
import RightCol from './myComponent/RightCol';
import Footer from './myComponent/Footer';


const App = function () {
  return (
    <div className="App">

<Header />
<TopMenu />
<LeftCol />
<RightCol />
<Footer />
    </div>
  );
}



export default App;



/*
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </app_2>
      </header>
    </div>
  );
}

export default App;

*/