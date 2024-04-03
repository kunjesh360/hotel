import React, { useState } from 'react';

const HotelReviewForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    description: '',
    hotelName: '',
    rating: 0, // Initialize rating as 0
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRatingChange = (ratingValue) => {
    setFormData({
      ...formData,
      rating: ratingValue,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    
  // Create a FormData object and populate it with formData state
const data = new FormData();
Object.keys(formData).forEach(key => data.append(key, formData[key]));

// Correct way to log FormData content
for (let [key, value] of data.entries()) {
  console.log(`${key}: ${value}`);
}
    try {
      // Make a POST request with the FormData object
      const response = await fetch('/hotelfeedback', {
        method: 'POST',
        body: data, // No need to set Content-Type header, browser does it automatically with FormData
      });


      const result = await response.json();
      console.log('Success:', result);
      alert('Feedback submitted successfully!');

      // // Reset the form after successful submission
      // setFormData({
      //   username: '',
      //   description: '',
      //   hotelName: '',
      //   rating: 0,
      // });

    } catch (error) {
      console.error('Error submitting feedback:', error);
      alert('Failed to submit feedback.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-4 space-y-4">
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
      <input
        type="text"
        name="hotelName"
        placeholder="Hotel Name"
        value={formData.hotelName}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md"
      />
     <div>
        <span className="text-lg">Rating:</span>
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(star)}
            onMouseEnter={(e) => e.target.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
            onAnimationEnd={(e) => e.target.style.transform = 'scale(1)'}
            className={`text-lg cursor-pointer transition-transform duration-150 ease-in-out ${star <= formData.rating ? 'text-yellow-500' : 'text-gray-400'}`}
            style={{ transform: 'scale(1)', transition: 'transform 0.1s ease' }}
          >
            ★
          </button>
        ))}
      </div>
      
      <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700">
        Submit
      </button>
    </form>
  );
};




export default HotelReviewForm;
