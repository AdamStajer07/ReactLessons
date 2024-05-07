import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/product/:itemName/:itemValue' element={<SingleProduct />} />
      </Routes>
    </>
  );
}

export default App;
