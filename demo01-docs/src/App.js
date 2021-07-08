
import './App.css';
import JSX from "./components/1-JSX";
import Clock from "./components/4-State&LifeCycle";
import Toggle from './components/5-HandlingEvents';
function App() {
  return (
    <div className="App">
      {JSX}
      <Clock />
      <Toggle />
    </div>
  );
}

export default App;
