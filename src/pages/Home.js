import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the `useNavigate` hook

function Home() {
  const navigate = useNavigate(); // To navigate programmatically

  const navigateToAbout = () => {
    navigate('/about'); // Change route to /about when the button is clicked
  };

  return (
    <div>
      <h2>Welcome to the Home Page!</h2>
      <button onClick={navigateToAbout}>Go to About Page</button>
    </div>
  );
}

export default Home;