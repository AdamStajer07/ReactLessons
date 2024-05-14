import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import SingleProduct from './components/SingleProduct';
import Cart from './components/Cart';

function App() {
  return (
    <body className='container'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product/:itemName/:itemValue' element={<SingleProduct />} />
      </Routes>
    </body>
  );
}

export default App;
