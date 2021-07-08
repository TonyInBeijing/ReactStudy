
import './App.css';
import JSX from "./components/1-JSX";
import Clock from "./components/4-State&LifeCycle";
import Toggle from './components/5-HandlingEvents';
import LoginControl from './components/6-条件渲染';
function App() {
  return (
    <div className="App">
      {JSX}
      <Clock />
      <Toggle />
      <LoginControl isLoggedIn />
    </div>
  );
}

export default App;
