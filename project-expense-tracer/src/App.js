import './App.css'
import { AddTransation } from './components/AddTransation';
import { Balance } from './components/Balance';
import { Header } from "./components/Header";
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransationList } from './components/TransationList';

function App() {
  return (
    <>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransationList />
        <AddTransation />
      </div>
    </>
  );
}

export default App;
