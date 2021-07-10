
import './App.css';
import JSX from "./components/1-JSX";
import Clock from "./components/4-State&LifeCycle";
import Toggle from './components/5-HandlingEvents';
import LoginControl from './components/6-条件渲染';
import NumberList from './components/7-列表&key';
import NameForm from './components/8-表单';
import Calculator from './components/9-状态提升';
import WelcomeDialog from './components/10-组合&继承';
function App() {
  return (
    <div className="App">
      {JSX}
      <Clock />
      <Toggle />
      <LoginControl isLoggedIn />
      <NumberList numbers={[1, 2, 3, 4, 5]} />
      <NameForm />
      <Calculator />
      <WelcomeDialog />
    </div>
  );
}

export default App;
