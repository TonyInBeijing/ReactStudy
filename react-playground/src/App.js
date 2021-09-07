import './App.css';

import RenderProps from "./components/RenderProps";
import HighOrderComponent from "./components/HightOrderComponents";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Playground</p>
        <RenderProps />
        <HighOrderComponent />
      </header>
    </div>
  );
}

export default App;
