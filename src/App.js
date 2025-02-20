import React from 'react';
import './css/App.css'; // If you have custom CSS styles
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router
import Navbar from './Navbar'; // Assuming you have a Navbar component

// Example components for the routes
import Home from './pages/Home.js'; // Default page
import About from './pages/About.js'; // Page to show after clicking the button

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <main>
          <div id="main-div">
            <h1>Welcome!!</h1>
            <hr></hr>
            <Routes>
              <Route path="/" element={<Home />} />  {/* Default page */}
              <Route path="/about" element={<About />} />  {/* About page */}
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
