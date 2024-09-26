import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://example.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Build, Test and Deploy on Jenkins
          SIT 223 Task 6.2HD
        </a>
      </header>
      <p>
          Application version: 1
      </p>
    </div>
  );
}

export default App;
