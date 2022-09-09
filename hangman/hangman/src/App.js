import logo from './logo.svg';
import './App.css';
import Soluation from './components/soluation';
import Letter from './components/letter';
import Letters from './components/letters';
import Score from './components/score';
import { Component } from 'react';

class App extends Component {
     
  render(){
    return(
      <div >
      <Score /> <Soluation />
      <Letters><Letter></Letter><Letter></Letter>
  </Letters>
    </div>
    );
  
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
        </a>
      </header>
    </div>
  );
  }
}

export default App;
