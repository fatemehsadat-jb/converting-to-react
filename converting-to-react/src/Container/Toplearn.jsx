import React from "react";
import { Routes,Route } from "react-router";

import Course from "../Components/Course/course";
import Mainlayout from "../Components/Layouts/Mainlayout";
import Login from "../Components/Login/Login";
import Register from './../Components/Register/Register';
import Archive from './../Components/Course/Archive';
import Single from './../Components/Course/Single';
import Account from './../Components/Account/Account';
import ChangeAccount from './../Components/Account/ChangeAccount';



const Toplearn = () => {
  return (
    <React.Fragment>
         <Mainlayout>
           <Routes>
             <Route path="/login" element={<Login />} />
             <Route path="/register" element={<Register />} />
             <Route path="/archive" element={<Archive />} />
             <Route path="/single" element={<Single />} />
             <Route path="/account" element={<Account />} />
             <Route path="/changeaccount" element={<ChangeAccount />} />
             <Route path="/" exact element={<Course />} />
           </Routes>
         </Mainlayout>
 
    </React.Fragment>
  );
};

export default Toplearn;
