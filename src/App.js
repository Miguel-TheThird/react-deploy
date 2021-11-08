import logo from './logo.svg';
import './App.css';
import Bleh from './components/Bleh';
import AnotherOne from './components/AnotherOne';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
      <AnotherOne/>
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
        <Bleh/>
      </header>
    </div>
  );
}

export default App;
