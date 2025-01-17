import React, { useState, useEffect } from 'react';
import {  useNavigate } from "react-router-dom";
import {  Route, Routes, Link,useLocation } from 'react-router-dom';


function HotelList() {
  const [hotels, setHotels] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [items, setitems] = useState([]);
  const navigate = useNavigate();
    
  const getAllData = async () => {
    try {
      const getPeople = await fetch(
        `/allhotel`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("kunjesh999");
      let names = [];
      const res = await getPeople.json();
      console.log("res000000000000===",res)
      setHotels(res.data);
      console.log("res--hotel",res.data);
      console.log("res--hotel",res.data[0]);
      const hot=res.data;
      const newItems = hot.map(person => person.hotelName);
      setitems(newItems)
     
      console.log("new-",newItems);
    
      console.log("item",items);
    } catch (error) {
      console.log("error");
      console.log(error);
    }
  };
  useEffect(() => {
    console.log("newItems updated:", items);
  }, [items]);
  useEffect(() => {
    getAllData()
  }, []);

   
  // const handleSearchChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };
  // const filteredItems = items.filter(item => 
  //   item.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Filter hotels based on the search term
  const filteredHotels = hotels.filter(hotel =>
    hotel.hotelName.toLowerCase().includes(searchTerm.toLowerCase())
  );
  console.log("item",items);
  console.log("fitem",filteredHotels);
const navegate =(hotel)=>{
  console.log("kunjinside hotelist");
  navigate("/hotel", { state: {hotel} });
}


  return (
    <div className='bg-white	'>
     <h1>kunjesh</h1>

       {/* Search Input */}
       <div className="max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

     

      <div className="container mx-auto p-4">
        {filteredHotels.length >0 ? filteredHotels.map(hotel => (
          <div key={hotel._id} className="flex flex-row w-full h-64 rounded overflow-hidden shadow-lg mb-6">
           
            <img className="object-cover min-h-[200px] sm:min-h-[300px] md:min-h-[400px] transform transition duration-300 ease-in-out hover:scale-105" src={hotel.images} alt={hotel.hotelName} />

         
            <div className="w-2/3 px-6 py-4 flex flex-col justify-between">
              <div>
                <div className="font-bold text-xl mb-2">{hotel.hotelName}</div>
                <div className="font-style: italic text-xl mb-2">
                  {hotel.description.split(' ').length > 15
                    ? `${hotel.description.split(' ').slice(0, 15).join(' ')}...`
                    : hotel.description
                  }
                </div>
                <p className="text-gray-600 text-base">
                  {hotel.hpDescription.split('=').filter(policy => policy.trim()).map((policy, index) => (
                    <div key={index}>{policy.trim()}</div>
                  ))}
                </p>
                <p className="text-gray-600 text-base">Starting Rate: ${hotel.Price}</p>
              </div>
              <button onClick={() => navegate(hotel)} className="inline-block bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-400 focus:outline-none focus:ring">
                More Details
              </button>
            </div>
          </div>
        )) :
          <p className="text-center"></p>
        }
      </div>


 
    </div>
  );
}




// Sub-components for each route within the Hotel component
const HotelHome = () => {return(
  <div>
   
  </div>
)};
/*************************************** */
const Roomhotel = () => {
  console.log("enter a room");
  const navigate = useNavigate();
  const location = useLocation();
  const { 
    reviews,
    rooms,} = location.state;
  const hotel = location.state?.hotel;
  console.log("kunj--k====",reviews,
  rooms,); 
  console.log("kunj--k2",hotel); 
  console.log("kunj--k2prrr",reviews); 
  console.log("kunj--k2prrr",rooms); 

  
  const generateStars = (rating) => {
    return [...Array(rating).keys()].map((_, index) => (
      <svg key={index} className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.5 3 1-5.5L0 8l5.6-.5L10 3l2.4 4.5L18 8l-4.5 4.5 1 5.5z"/></svg>
    ));
  };

  const roombook= (roomid,hotelid)=>{
       console.log("bookk--",roomid,hotelid);
       navigate('/Roombook',{ state: {
        roomid:roomid,
        hotelid:hotelid

      }})
  }

  return(
  <div>
        
        <h1 className="text-3xl font-bold text-center my-8">Room Details</h1>
        {
  rooms ? (
    rooms.map((room) => (
      <div key={room._id} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl my-5">
        <img className="h-48 w-full object-cover md:h-full md:w-48" src={room.imagePath} alt={room.roomtype} />
        <div className="p-8">
          <h2 className="block mt-1 text-lg leading-tight font-medium text-black">{room.roomtype}</h2>
          <p className="mt-2 text-gray-500">{room.description1}</p>
          <p className="mt-2 text-gray-500">WiFi: {room.wifi}</p>
          <p className="mt-2 text-gray-500">Area: {room.area}</p>
          <p className="mt-2 text-gray-500">Capacity: {room.capacity}</p>
          <p className="mt-2 text-gray-500">Bed: {room.bed}</p>
          <p className="mt-2 text-gray-500">Price: {room.price}</p>
          {/* Add more details as needed */}
          <button 
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => roombook(room._id,hotel._id)}
          >
            Book Room
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center">Loading...</p>
  )
}

      <h1 className="text-white bg-black text-xl font-bold py-4 px-6">reviews</h1>
    {
  reviews ? (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="bg-white shadow-lg rounded-lg p-4">
          <p className="text-gray-700 text-base font-semibold">{review.username}</p>
          <p className="text-gray-600 text-sm">{review.description}</p>
          <div className="flex items-center">
            {generateStars(review.rating)}
          </div>
        </div>
      ))}
    </div>
  ) : (
    <p className="text-center text-xl py-4">Loading...</p>
  )
}
 

  </div>
)};
const Dining = () => {
  console.log("enter a dinig");
  const location = useLocation();
  const navigate = useNavigate();
  const hotel = location.state?.hotel;
  const hotelid = location.state?.hotel._id;
  console.log("hotel id--",hotelid);
  const {   reviews,
    dinings,} = location.state;
  console.log("kunj--k",reviews,
  dinings); 
  console.log("kunj--k2",hotel); 
  
  const generateStars = (rating) => {
    return [...Array(rating).keys()].map((_, index) => (
      <svg key={index} className="w-4 h-4 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.5 3 1-5.5L0 8l5.6-.5L10 3l2.4 4.5L18 8l-4.5 4.5 1 5.5z"/></svg>
    ));
  };

  const booktable =(diningid)=>{
    navigate('/TableBooking',{ state: {
      diningid:diningid,
      hotelid:hotelid

    }})

  }
  
  return(
    <div className="bg-gray-100 min-h-screen">
    <h1 className="text-white bg-black text-xl font-bold py-4 px-6">Dining Options</h1>
    {
  dinings ? (
    dinings.map((dining) => (
      <div key={dining._id} className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden my-5">
        <img className="w-full h-64 object-cover object-center" src={dining.image} alt={dining.restaurantName} />
        <div className="p-6">
          <h2 className="text-lg text-gray-900 font-bold mb-2">{dining.restaurantName}</h2>
          <p className="text-gray-700 text-base mb-4">{dining.description}</p>
          <button 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={()=>booktable(dining._id)}
          >
            Book Table
          </button>
        </div>
      </div>
    ))
  ) : (
    <p className="text-center text-xl py-4">Loading...</p>
  )
}


  </div>
  
)};


function Hotel(){
  console.log("kunj00000000000");
  const [hoteld, sethoteld] = useState({
    roomOptions:{},
    diningOptions:{},
    reviewsOptions:{}
  });
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const shouldDisplayHotelData = currentPath === '/hotel'; 
  const hotelData = location.state?.hotel;
  
  const hotel = location.state?.hotel;
   console.log("hotel----",hotel,"llll",location.state);
   

  const renderh = async (e) => {
    console.log("kunjroooooooooooooooooooooooooooooooooo");
    try {
      const response = await fetch('/onehotel',  {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(hotel),
      });
      const result = await response.json();
      console.log("room----------------------------------",result);
      sethoteld(result.data);
      console.log('Success:', result.data);
      // alert('Data submitted successfully');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to submit data');
    }
  };
   
  useEffect(() => {
    console.log("useeffect9999999999999");
    renderh();
  }, []);

    if(!hoteld)
    {
      alert('login first');
     navigate('/LoginForm')
     return;
    }

  console.log("kunj--k------",hoteld); 
  console.log("kunj--k2",hotel); 
  console.log("kunj--kr2-----",hoteld.reviewsOptions); 
  console.log("kunj--kd2-----",hoteld.diningOptions); 
  console.log("kunj--kro2-----",hoteld.roomOptions); 



  // console.log("kunj--",hotelData.hotel); 
  return(

    <div>
           <h1>hotel!</h1>
           <h2>Rooms</h2>
    
           <nav className="bg-gray-800 text-white p-4">
      <ul className="flex justify-between items-center">
        <li className="mx-2">
          {/* Replacing Link with button and onClick handler */}
          <button
            onClick={() => navigate('/hotel',{ state: {
              hotel:hotel,
              reviews:hoteld.reviewsOptions,
            }})}
            className="hover:text-blue-400 transform transition duration-200 hover:scale-110"
          >
            Hotel detail
          </button>
        </li>
        <li className="mx-2">
          {/* Replacing Link with button and onClick handler */}
          <button
            onClick={() => navigate('/hotel/Roomhotel',{ state: {
              
              hotel:hotel,
              reviews:hoteld.reviewsOptions,
              rooms:hoteld.roomOptions,
              
            }} )}
            className="hover:text-blue-400 transform transition duration-200 hover:scale-110"
          >
            Room
          </button>
        </li>
        <li className="mx-2">
          {/* Replacing Link with button and onClick handler */}
          <button
            onClick={() => navigate('/hotel/Dining',{ state: {
              hotel:hotel,
              reviews:hoteld.reviewsOptions,
              dinings:hoteld.diningOptions,
              }})}
            className="hover:text-blue-400 transform transition duration-200 hover:scale-110"
          >
            Dining
          </button>
        </li>
      </ul>
    </nav>

    {  shouldDisplayHotelData&& (<div>
        {hotelData ? <div className="w-2/3 mx-auto bg-white shadow-lg rounded-lg overflow-hidden" style={{ minHeight: '66vh' }}>
          <img className="w-full" style={{ height: '66vh', objectFit: 'cover' }} src={hotelData.images} alt={hotelData.hotelName} />
          <div className="p-4">
            <div className="font-bold text-xl mb-2">{hotelData.hotelName}</div>
            <div className="text-gray-700 text-base mb-1"><i className="fas fa-phone mr-2"></i>{hotelData.phoneNumber}</div>
            <div className="text-gray-700 text-base mb-1"><i className="fas fa-envelope mr-2"></i>{hotelData.email}</div>
            <div className="text-gray-700 text-base mb-1">{hotelData.description}</div>
            <div className="text-gray-700 text-base mb-1">{hotelData.hpDescription}</div>
            <div className="text-gray-700 text-base">Hotel Policies:- {hotelData.description2}</div>
          </div>
        </div>  :
            <div className="flex justify-center items-center space-x-2">
          <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <div>Loading...</div>
        </div>        
                }


                
        </div>)
    }


       <Routes>
         <Route path="/" element={< HotelHome />} />
         <Route path="/Dining" element={< Dining />} />
         <Route path="/Roomhotel" element={< Roomhotel />} />
       </Routes>
         </div>
  )

}









export {  HotelHome, HotelList,Hotel,Dining,Roomhotel };


//  function Posts() {
//   const [currentUser, setCurrentUser] = React.useState([/*array of post content*/])
   
//     return (
//         <div>
//             <h1>List of posts go here!</h1>
       
//             <Routes>
      
//       <Route path="/new" element={< NewPost />} />
      
//       <Route path="/knew" element={< Kpo />} />
//     </Routes>
//         </div>
//     ) 
// }



// function NewPost() {


//   return (
//     <div>
//       <h1>Welcome, write a new post!</h1>
//       <form>{/* Form contents here */}</form>
//     </div>
//   );
// }


// function Kpo(){
//   return(
//     <div>
//       <h1>Welcome, write a new post!</h1>
//     </div>
//   )
// }


// const Hotel = () => {
//   return (
//     <div>
//       {/* Local Navigation for the Hotel Section */}
      // <nav>
      //   <ul>
      //     <li>
      //       <Link to="/hotel/">Hotel Home</Link>
      //     </li>
      //     <li>
      //       <Link to="/hotel/room">Room</Link>
      //     </li>
      //     <li>
      //       <Link to="/hotel/dining">Dining</Link>
      //     </li>
      //   </ul>
      // </nav>

//       {/* Routes for the Hotel Section */}
//       <Routes>
//         {/* <Route path="/hotel/" element={<HotelHome />} />
//         <Route path="/hotel/room" element={<Roomhotel />} />
//         <Route path="/hotel/dining" element={<Dining />} /> */}
//       </Routes>
//     </div>
//   );
// };



























// {/* <h1>{hotels}</h1>
// {hotels.map(hotel => (
   
//    <div key={hotel._id}>
//      <h2>{hotel.hotelName}</h2>
//      <p>{hotel.description}</p>
//      {/* Add other hotel details here */}
//      <img src={hotel.images} alt={hotel.hotelName} style={{ width: '100px', height: '100px' }} />
//    </div> */}
//  ))}
// {hotels.map(hotel => (
        
//     <div key={hotel._id}>
//       <h2>{hotel.hotelName}</h2>
//       <p>{hotel.description}</p>
//       {/* Add other hotel details here */}
//       <img src={hotel.images} alt={hotel.hotelName} style={{ width: '100px', height: '100px' }} />
//     </div>
//   ))}