import { Provider } from 'react-redux';
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';
import DonutContainer from './components/DonutContainer';
import PancakeContainer from './components/PancakeContainer';

function App() {
  return (
    <Provider store={store}>
      <HooksCakeContainer />
      <IceCreamContainer />
      <DonutContainer />
      <PancakeContainer />
      {/* <CakeContainer /> */}
    </Provider>
  );
}

export default App;
