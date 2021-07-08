
import './App.css';
import JSX from "./components/1-JSX";
import Clock from "./components/4-State&LifeCycle";
import Toggle from './components/5-HandlingEvents';
import LoginControl from './components/6-条件渲染';
import NumberList from './components/7-列表&key';
function App() {
  return (
    <div className="App">
      {JSX}
      <Clock />
      <Toggle />
      <LoginControl isLoggedIn />
      <NumberList numbers={[1, 2, 3, 4, 5]} />
    </div>
  );
}

export default App;
