import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
// import { About } from "./components/About";
import { Navbar } from "./components/Navbar";
import { OrderSummary } from "./components/OrderSummary";
import { NoMatch } from "./components/NoMatch";
import { Products } from "./components/Products";
import { Featured } from "./components/Featured";
import { New } from "./components/New";
import { Users } from "./components/Users";
import { UserDetails } from "./components/UserDetails";
import { Admin } from "./components/Admin";
import { Profile } from "./components/Profile.js";
import { AuthProvider } from "./components/auth.js";
import { Login } from "./components/Login.js";
import { RequireAuth } from "./components/RequireAuth.js";
const LazyAbout = React.lazy(() => import('./components/About.js'))

function App() {
  return (
    <AuthProvider>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="about" element={<React.Suspense fallback="Loading..."><LazyAbout/></React.Suspense>}/>
        <Route path="order-summary" element={<OrderSummary/>}/>
        <Route path="products" element={<Products/>}>
          <Route index element={<Featured/>} />
          <Route path="featured" element={<Featured/>}/>
          <Route path="new" element={<New/>}/>
        </Route>
        <Route path="users" element={<Users/>}>
          <Route path=":userId" element={<UserDetails/>} />
          <Route path="admin" element={<Admin/>} />
        </Route>
        <Route path="profile" element={<RequireAuth><Profile/></RequireAuth>} />
        <Route path="login" element={<Login/>} />
        <Route path="*" element={<NoMatch/>}/>
      </Routes>
    </AuthProvider>
  );
}

export default App;