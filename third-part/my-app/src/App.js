import './App.css';
import FragmentDemo from './components/FragmentDemo';
import ParentComp from './components/ParentComponent';
import PureComp from './components/PureComponent';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <ParentComp/>
      {/* <Table/> */}
      {/* <FragmentDemo /> */}
    </div>
  );
}

export default App;
