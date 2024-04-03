


import React, { useState } from 'react';

function SignupForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    typeacouent: 'customer',
    postalCode: '',
    country: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    console.log(formData);
  };

  async function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission behavior
    
    // Basic validation example (extend according to your needs)
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
  
    console.log("data=", formData);
  
    try {
      const savedUserResponse = await fetch(
        `/signup`, // Ensure this matches your server's endpoint
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...formData }),
        }
      );
  
      if (!savedUserResponse.ok) {
        // You can refine this by handling different status codes differently
        throw new Error(`HTTP error! status: ${savedUserResponse.status}`);
      }
  
      // Assuming the server responds with JSON
      const responseBody = await savedUserResponse.json();
      console.log("FORM RESPONSE......", responseBody);
  
      // Provide user feedback
      alert("Signup successful!");
      // Redirect or update UI as needed here
  
    } catch (error) {
      console.error("Form submission error:", error);
      // Provide user feedback
      alert("An error occurred. Please try again.");
    }
  }
  
  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto my-10 p-8 shadow-lg rounded-lg bg-gray-50">
    <div className="space-y-4">
        <input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
        <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border rounded-md text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>

    <div className="flex items-center mt-4">
        <input type="radio" id="typeaccountCustomer" name="typeacouent" value="customer" checked={formData.typeacouent === 'customer'} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
        <label htmlFor="typeaccountCustomer" className="ml-2 text-sm font-medium text-gray-900">Customer</label>
    </div>

    <div className="flex items-center mt-2">
        <input type="radio" id="typeaccountAdmin" name="typeacouent" value="admin" checked={formData.typeacouent === 'admin'} onChange={handleChange} className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
        <label htmlFor="typeaccountAdmin" className="ml-2 text-sm font-medium text-gray-900">Admin</label>
    </div>

    <button type="submit" className="mt-6 w-full px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:bg-blue-700">Submit</button>
</form>

  );
}

export default SignupForm;










{/* <form onSubmit={handleSubmit}>

<input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
<input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
<input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
<input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
<input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
<input type="text" name="postalCode" placeholder="Postal Code" value={formData.postalCode} onChange={handleChange} />
<input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
<input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
<div>
  <input
   className='bg-white tex text-slate-100	'
    type="radio"
    id="typeacouent"
    name="typeacouent"
    value="customer"
    checked={formData.typeacouent === 'customer'}
    onChange={handleChange}
  />
  <label  className=' text-slate-100	' htmlFor="subscriptionYes">customer</label>
</div>

<div>
  <input
   className='bg-white text-slate-100	'
    type="radio"
    id="typeacouent"
    name="typeacouent"
    value="admin"
    checked={formData.typeacouent === 'admin'}
    onChange={handleChange}
  />
  <label className=' text-slate-100	' htmlFor="subscriptionNo">admin</label>
</div>

<button className='bg-white' type="submit">Submit</button>
</form> */}



// import React, { useState } from "react";
// import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
// import toast from "react-hot-toast";
// import { useNavigate } from "react-router-dom";

// const SignupForm = ({setIsLoggedIn}) => {
//   const [accountType, setAccountType] = useState("student");

//   const navigate = useNavigate();

//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     createPassword: "",
//     confirmPassword: "",
  
//   });

//   function changeHandler(event) {
//     setFormData((prev) => ({
//       ...prev,
//       [event.target.name]: event.target.value,
//     }));
//   }

//   const [showPassword, setShowPassword] = useState({
//     createPassword: false,
//     confirmPassword: false,
//   });

//   const handleClick = (buttonName) => {
//     setShowPassword({
//       ...showPassword,
//       [buttonName]: !showPassword[buttonName],
//     });
//   };

//   const submitHandler = (event) => {
//     event.preventDefault();
//     if (formData.createPassword != formData.confirmPassword) {
//       toast.error("Passwords do not match");
//       return;
//     }

//     const finalData = {
//       ...formData,
//       accountType
//     }

//     console.log(finalData);
//     setIsLoggedIn(true);

//     toast.success("Account Create Successfull");
//     async function  handleSubmit () {
     
    
//       const savedUserResponse = await fetch(
//         `/bookticket`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//           },
//           body: JSON.stringify({ ...finalData }),
//         }
//       );
  
//       console.log("FORM RESPONSE......", savedUserResponse);
  
//     };
    
//     navigate("/otp");
//   }

//   return (
//     <div className="mt-8">
//       {/* Button Group */}
//       <div className="flex bg-richblack-800 max-w-max rounded-full p-1 gap-x-1">
//         <button
//           className={`${accountType === "student"
//             ?
//             "bg-richblack-900 text-richblack-5"
//             : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
//           onClick={() => setAccountType("student")}>
//          Customer
//         </button>

//         <button
//           className={`${accountType === "instructor"
//             ?
//             "bg-richblack-900 text-richblack-5"
//             : "bg-transparent text-richblack-200"} py-2 px-5 rounded-full transition-all duration-200`}
//           onClick={() => setAccountType("instructor")}>
//           hotel management
//         </button>
//       </div>

//       {/* Form */}
//       <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-4 mt-6">
//         <div className="flex gap-x-4">
//           <label className="w-full">
//             <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
//               First Name<sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
//               required
//               type="text"
//               name="firstName"
//               id="firstName"
//               onChange={changeHandler}
//               value={formData.firstName}
//               placeholder="Enter first name"
//             />
//           </label>

//           <label className="w-full">
//             <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
//               Last Name<sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
//               required
//               type="text"
//               name="lastName"
//               id="lastName"
//               onChange={changeHandler}
//               value={formData.lastName}
//               placeholder="Enter last name"
//             />
//           </label>
//         </div>

//         <label className="w-full">
//           <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
//             Email Address<sup className="text-pink-200">*</sup>
//           </p>
//           <input
//             className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
//             required
//             type="email"
//             name="email"
//             id="email"
//             value={formData.email}
//             placeholder="Enter email address"
//             onChange={changeHandler}
//           />
//         </label>

//         <div className="flex gap-x-4">
//           <label className="w-full relative">
//             <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
//               Create Password<sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
//               required
//               type={showPassword.createPassword ? "text" : "password"}
//               name="createPassword"
//               id="createPassword"
//               onChange={changeHandler}
//               value={formData.createPassword}
//               placeholder="Enter Password"
//             />

//             <span
//               className="absolute top-[38px] right-3 z-10 cursor-pointer"
//               onClick={() => handleClick("createPassword")}
//             >
//               {showPassword.createPassword ? (
//                 <AiOutlineEyeInvisible />
//               ) : (
//                 <AiOutlineEye />
//               )}
//             </span>
//           </label>

//           <label className="w-full relative">
//             <p className="text-richblack-5 mb-1 text-[0.875rem] leading-[1.375rem]">
//               Create Password<sup className="text-pink-200">*</sup>
//             </p>
//             <input
//               className="bg-richblack-800 rounded-[4px] w-full px-[12px] py-[8px]"
//               required
//               type={showPassword.confirmPassword ? "text" : "password"}
//               name="confirmPassword"
//               id="confirmPassword"
//               onChange={changeHandler}
//               value={formData.confirmPassword}
//               placeholder="Confirm Password"
//             />

//             <span
//               className="absolute top-[38px] right-1.5 z-10 cursor-pointer"
//               onClick={() => handleClick("confirmPassword")}
//             >
//               {showPassword.confirmPassword ? (
//                 <AiOutlineEyeInvisible />
//               ) : (
//                 <AiOutlineEye />
//               )}
//             </span>
//           </label>
//         </div>

//         <button className="bg-yellow-50 text-richblack-900 font-semibold px-[12px] rounded-[8px] py-[8px] mt-6">
//           Create Account
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignupForm;