import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import LogIn from "./pages/LogIn";
import LogOut from "./pages/LogOut";
import { useGlobalContext } from "./context";
import { useEffect } from "react";
import Delete from "./pages/Delete";
import Update from "./pages/Update";
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Profile from "./pages/Profile";


toast.configure()
function App() {
  const {getSessionData} = useGlobalContext()
  useEffect(()=>{
    getSessionData()
  },[])
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/sign-in" element={<SignIn/>}/>
        <Route path="/log-in" element={<LogIn/>}/>
        <Route path="/log-out" element={<LogOut/>}/>
        <Route path="/delete/:id" element={<Delete/>} />
        <Route path="/update/:id" element={<Update />}/>
        <Route path="/profile" element={<Profile />}/>
      </Routes>
    </div>
  );
}

export default App;