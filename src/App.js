import React,{ useState , useEffect } from "react";
import ContactList from './components/contactList/contactlist'
import { Route, Link, BrowserRouter , Routes } from 'react-router-dom'

import AddForm from './components/addForm/addform'
import './App.css'

function App() {
  return (
   <>
   <BrowserRouter>
       <div className="fullscreen">
          <div className="navbar">
            <h1 className="h1">DashBoard</h1>
            <div className="span"></div>
            <div className="box">
            <Link to="/" className="click">  All Users 👤</Link>
            </div>
            <div className="box">
            <Link to="/adduser" className="click"> Add User ➕ </Link>
            </div>
          </div>
          <div className="data">
            <div>
            <Routes>
            <Route exact path="/" element={<ContactList />} />
         <Route path="/adduser"  element={<AddForm />} />
         </Routes> 
            </div>
         
          </div>
       </div>
       <div className="smallscreen">
       <Link to="/" className="clicksmall">  👤</Link>
       <Link to="/adduser" className="clicksmall">  ➕ </Link>
       </div>
       </BrowserRouter>
   </>
  );
}

export default App;