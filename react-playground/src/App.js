import './App.css';

import RenderProps from "./components/RenderProps";
import HighOrderComponent from "./components/HightOrderComponents";
import Routers from './routers/Routers';
import NestedRouters from './routers/NestedRouters';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>React Playground</p>
        <RenderProps />
        <HighOrderComponent />
        {/* <Routers /> */}
        <NestedRouters />
      </header>
    </div>
  );
}

export default App;
