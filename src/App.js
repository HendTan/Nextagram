import React, {useState,useRef, useEffect} from 'react';
import {Route, Link} from 'react-router-dom'
import HomePage from './Page/HomePage.js'
import UserProfilePage from './Page/UserProfilePage'
import './App.css';
import Login from './container/Login.js'
import { ToastContainer } from 'react-toastify';
import MyProfilePage from './Page/MyProfilePage'


function App() {

  return (
    <div>
      <nav>
        <img src="https://www.pinclipart.com/picdir/middle/158-1580825_instagram-icon-free-instagram-logo-black-clipart.png"style={{
          width: '50px', 
          height: '50px', 
          }}/>
        <a href="" style={{color: 'white', textDecoration: 'none', fontSize: '30px'}}>Nextagram</a>
        <input className= 'inputStyle'  />
        <button className="ipBtn">Search</button>
        <a href="" className='users' style={{textDecoration: 'none'}}>Users</a>
        <Login />
        </nav>
      <Route exact path="/" component={HomePage} />
      <Route path="/users/:id" component={UserProfilePage} /> 
      <Route exact path="/profile" component={MyProfilePage} />
    </div>
  );
}
/*The word exact before path is to make sure it is exactly only /, no other things
if there is no switch reserved word then it will show evrything thing if the url is matching with the path
*/
export default App;
