import React from "react";
import Contact_us from"../pages/Contact_us";
import Hotel from "../pages/Hotel"
import Home from "../pages/Home"
import Login from "../pages/Login"
import Services from "../pages/Services"
import Register from "../pages/Register"
import{Routes,Route} from 'react-router-dom'

const Routers=()=>{
return<>
<Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/Services" element={<Services/>}/>
    <Route path="/Hotel" element={<Hotel/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Register" element={<Register/>}/>
    <Route path="/Contact_us" element={<Contact_us/>}/>
</Routes>
</>
};
export default Routers;