import logo from './logo.svg';
import './App.css';
import { ObjectUseState } from './components/ObjectUseState';
import { ArrayUseState } from './components/ArrayUseState';

function App() {
  return (
    <div className="App">
      <ObjectUseState/>
      <ArrayUseState/>
    </div>
  );
}

export default App;
