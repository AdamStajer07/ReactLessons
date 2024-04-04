import { Provider } from 'react-redux';
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContainer from './components/IceCreamContainer';

function App() {
  return (
    <Provider store={store}>
      <HooksCakeContainer />
      <IceCreamContainer />
      {/* <CakeContainer /> */}
    </Provider>
  );
}

export default App;
