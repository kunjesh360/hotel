import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from "../assets/logo.png";
import toast from 'react-hot-toast';
function Navbar({ isLoggedIn, setIsLoggedIn, toast }) {
  const [showDropdown, setShowDropdown] = useState(false);

  // Toggle dropdown visibility
  const toggleDropdown = () => setShowDropdown(!showDropdown);

  // Close dropdown
  const closeDropdown = () => setShowDropdown(false);

  const handleLogout = async () => {
    try {
      // Call the backend logout endpoint
      const response = await fetch('/logout', {
        method: 'POST', // Use the appropriate HTTP method
        credentials: 'include', // Include credentials if you're using cookies
      });
      const data = await response.json();
      if (response.ok) {
        setIsLoggedIn(false); // Update state to reflect the user is logged out
        toast.success("Logged out successfully"); // Show a success message
        // Optionally redirect the user to the homepage or login page
      } else {
        throw new Error(data.message || 'Failed to logout');
      }
    } catch (error) {
      console.error("Logout error:", error);
      toast.error("Logout failed"); // Show an error message
    }
  };

  return (
    <div className="w-11/12 max-w-[1160px] mx-auto flex flex-row justify-between items-center py-4">
      {/* Logo */}
      <div>
        <Link to="/">
          <img className='mix-blend-multiply'src={Logo
          } alt="Logo" height={32} width={160} loading="lazy" />
        </Link>
      </div>

      <nav>
        <ul className="flex gap-x-6 text-richblack-25">
          {/* Other nav items */}
          <li><Link to="/">Home</Link></li>
          <li><Link to="/HotelList">Our Hotel</Link></li>
          <li><Link to="/Wending">Wending</Link></li>
          <li><Link to="/Ding">Dining</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>

      {/* Button Group */}
      <div className="flex items-center gap-x-4 text-richblack-100">
        {!isLoggedIn ? (
          <>
            <Link to="/login">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log in</button>
            </Link>
            <Link to="/signup">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign up</button>
            </Link>
          </>
        ) : (
          <>
            <Link to="/LogoutButton">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={handleLogout}>Log out</button>
            </Link>
            {/* Dropdown for Admin Section */}
            <div className="relative">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={toggleDropdown}>Admin Section</button>
              {showDropdown && (
                <div className="absolute right-0 mt-2 bg-white rounded-md shadow-lg z-10">
                  <Link to="/addhotel" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>Add Hotel</Link>
                  <Link to="/addding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>Add Dining</Link>
                  <Link to="/addwedding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>Add Wedding</Link>
                  <Link to="/addroom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={closeDropdown}>Add Room</Link>
                </div>
              )}
            </div>
            <Link to="/Bookticket">
              <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">BOOK A STAY</button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
}


export default Navbar;



















// import React from "react";
// import Logo from "../assets/Logo.svg";
// import { Link } from "react-router-dom";
// import toast from 'react-hot-toast';

// const Navbar = (props) => {
//   const isLoggedIn = props.isLoggedIn;
//   const setIsLoggedIn = props.setIsLoggedIn;

//   return (
//     <div className="w-11/12 max-w-[1160px] mx-auto flex flex-row justify-between items-center py-4">
//       {/* Logo */}
//       <div>
//         <Link to="/">
//           <img src={Logo} alt="Logo" height={32} width={160} loading="lazy" />
//         </Link>
//       </div>

//       <nav>
//         <ul className="flex gap-x-6 text-richblack-25">
//           <li>
//             <Link to="/">Home</Link>
//           </li>
         
//           <li>
//             <Link to="/HotelList">Our Hotel</Link>
//           </li>
//           <li>
//           <Link to="/Wending">Wending</Link>
//           </li>
//           <li>
//           <Link to="/Ding">Dining</Link>
//           </li>
//           {/* <li>
//           <Link to="/Wending"></Link>
//           </li> */}
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Button Group  */}
//       <div className="flex items-center gap-x-4 text-richblack-100">
//         {!isLoggedIn && (
//           <Link to="/login">
//             <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Log in</button>
//           </Link>
//         )}

//         {!isLoggedIn && (
//           <Link to="/signup">
//             <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">Sign up</button>
//           </Link>
//         )}

//         {isLoggedIn && (
//           <Link to="/">
//             <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={() => {
//               setIsLoggedIn(false)
//               toast.success("Logged out");
//             }}>Log out</button>
//           </Link>
//         )}
//         {isLoggedIn && (
//           <Link to="/hoteladd">
//             <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700" onClick={() => {
            
//             }}>Admine Section</button>
//           </Link>
//         )}
//         {/* {isLoggedIn && (
//           <Link to="/dashboard">
//             <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">MEMBERSHIP PROGRAMS</button>
//           </Link>
//         )} */}
//         {isLoggedIn && (
//           <Link to="/Bookticket
//           ">
//             <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">BOOK A STAY</button>
//           </Link>
//         )}
//         {/* {isLoggedIn && (
//           <Link to="/Bookticket
//           ">
//             <button className="bg-richblack-800 py-[8px] px-[12px] rounded-[8px] border border-richblack-700">BOOK A STAY</button>
//           </Link>
//         )} */}
//       </div>
//     </div>
//   );
// };


