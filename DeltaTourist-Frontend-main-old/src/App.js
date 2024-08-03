import React from 'react';
import { useEffect,useState } from 'react';
import './app.css';
import Navbar from './Components/Navbar/navbar';
import Home from './Components/Home/home';
import Footer from './Components/Footer/footer';
import Login from './Components/Login/Login';
import SignUp from './Components/Signup/SignUp';
import About from './Components/About/About';
import Contact from './Components/Contacts/Contact';
import WhereToStay from './Components/WhereTostay/WhereTostay';
import Detail from './Components/Detail/Detail';
import WishlistPage from './Components/Main/WishlistPage';
import ProtectedRoutes from './Routes/ProtectedRoutes';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

const App = () => {
  
  return (
    <Router>

      <>
        <Navbar  />
        <div style={{ padding: '30px', background: '#fff' }}>
          <Routes>
          <Route path="/" element={<Login  />} />
          <Route path="/SignUp" element={<SignUp />} />
            <Route exact path="/Home" element={<Home  />} />
          <Route element={<ProtectedRoutes/>}>
            <Route path="/About" element={<About  />} />
            <Route path="/Contacts" element={<Contact />} />
           
           
            <Route path="/WhereToStay" element={<WhereToStay  />} />
            <Route path="/Details/:place_id" element={<Detail  />} />
            <Route path="/wishlist" element={<WishlistPage  />} />
            </Route>
          </Routes>
        </div>
        <Footer />
      </>

    </Router>
  );
};

export default App;
