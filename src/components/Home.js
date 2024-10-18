import React from 'react';
import whashingImg4 from '../Assets/IMG8.png';
import logo from "../Assets/logo2.png"
import logoU from "../Assets/logoU.png"
import OurProducts from './OurProducts'

const Home = () => {
 
  return (
    <div
    className="container-fluid text-center"
    style={{
      background: "linear-gradient(180deg, #f8f9fa, #e9ecef)",
      borderRadius: "0.5rem",
    }}
  >
    <div className="welcome-section container rounded pt-3">
      <div className="row justify-content-center text-center">
        <div className="col-lg-9 col-md-10 col-12 mb-4">
          {/* Logo */}
          <img 
            src={logo} 
            alt="Uditi Appliances Logo" 
            style={{ 
              width: "100px", 
              height: "95px", 
              marginBottom: "0rem",
              maxWidth: '100%', // Responsive image
            }} 
          />
          
          {/* Title and Description */}
          <h4 
            className="fw-bold mb-0" 
            style={{ fontSize: "2.2rem", position: "relative" }}
          >
            <span className='fw-bold' style={{ fontSize: "inherit" }}>
              <img 
                src={logoU} 
                alt="Uditi Logo" 
                style={{ 
                  width: "35px", 
                  marginBottom: "28px",
                  maxWidth: '100%', // Responsive image
                }} 
              />
            </span>
            <span className='mt-2'>diti Appliances</span>
            
            {/* Description with responsive font */}
            <p
              className="home-description mt-0 mb-2"
              style={{
                fontSize: "1rem", // Increased size for better readability
                color: "#7f8c8d", // Subtle gray for description
                fontStyle: "italic", // Add italics for sophistication
                letterSpacing: "0.03rem",
              }}
            >
              Smart Appliances, Smart Life...
            </p>
          </h4>
  
          {/* Image of the Washing Machine */}
          <img
            src={whashingImg4}
            alt="Washing Machine"
            className="img-fluid mt-4"
            style={{ 
              width: "100%", 
              maxWidth: '70%', 
              borderRadius: "1rem",
              height: 'auto' // Maintain aspect ratio
            }}
          />
        </div>
      </div>
    </div>
  
    {/* OurProducts Section */}
    <div className="products-container container">
      <OurProducts />
    </div>
  </div>
  
  );
};

export default Home;
