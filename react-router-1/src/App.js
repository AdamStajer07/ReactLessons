import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { Featured } from "./components/Featured";
import { New } from "./components/New";
// import './index.css';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="order-summary" element={<OrderSummary/>}/>
        <Route path="products" element={<Products/>}>
          <Route index element={<Featured/>} />
          <Route path="featured" element={<Featured/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </>
  );
}

export default App;