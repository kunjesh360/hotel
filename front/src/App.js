import "./App.css";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/Home";
import HotelReviewForm from "./Components/About";
// import Contact from "./Components/Contact";
import {LoginForm,LogoutButton} from "./Components/LoginForm"
import Dashboard from "./pages/Dashboard"
import SignupForm from "./Components/SignupForm"
import PrivateRoute from "./Components/PrivateRoute";
import{  HotelHome, HotelList,Hotel,Dining,Roomhotel} from "./Components/hotel"
import Wending from "./pages/Wending";
import Ding from "./pages/Ding";
import Bookticket from "./Components/Bookticket";
// import {RoomForm,hoteladd} from "./Components/hotel"
import Hoteladd from  "./Components/hotel/addhoetl" ;
import RoomForm from  "./Components/hotel/addroom" ;
import {Roombook} from  "./Components/bookroom" ;
import {AddDiningForm} from "./Components/hotel/addding"

import{ OtpPage,VerifyOtpPage} from "./Components/otp";

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/addroom" element={<RoomForm />} />
        <Route path="/addhotel" element={<Hoteladd />} />
        <Route path="/addding" element={<AddDiningForm />} />
        <Route path="/about" element={<HotelReviewForm />} />
        <Route path="/Roombook" element={<Roombook />} />
        {/* <Route path="/contact" element={<Contact />} /> */}
        <Route path="/HotelList" element={<HotelList />}/ >
      
        <Route path="/LogoutButton" element={<LogoutButton />} >
      
            
        </Route>
        <Route path="/hotel/*" element={<Hotel />} >

        <Route path="HotelHome" element={< HotelHome />} />
         <Route path="Dining" element={< Dining />} />
         <Route path="Roomhotel" element={< Roomhotel />} />
        </Route>

        {/* <Route path="/otp" element={<OtpPage />} /> */}
        {/* <Route path="/addotp" element={<VerifyOtpPage />} /> */}

        {/* <Route path='/posts' element={<Posts />}>
           <Route path='knew' element={<Kpo />} />
           <Route path='new' element={<NewPost />} />
        </Route> */}

        <Route path="/Wending" element={<Wending />} />
        <Route path="/Ding" element={<Ding />} />
        <Route path="/LoginForm" element={<LoginForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<SignupForm setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard />
           
          </PrivateRoute>
        } />
        <Route path="/Bookticket" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Bookticket/>
           
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default App;
