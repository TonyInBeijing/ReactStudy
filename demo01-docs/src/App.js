import logo from './logo.svg';
import './App.css';
import JSX from "./components/1-JSX";

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
          {JSX}
        </a>
      </header>
    </div>
  );
}

export default App;
