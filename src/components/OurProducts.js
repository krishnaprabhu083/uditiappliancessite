import React from 'react';
import { Link } from 'react-router-dom';
import product1 from "../Assets/wasgung.png"
import heatermain from "../Assets/Heater/heatermain.jpg"

const ProductPage = () => {
    const products = [
        {
          id: 1,
          name: 'Washing Machine',
          description: 'High-efficiency washing machine with multiple settings.',
          price: '$499',
          image:product1,
        },
        {
          id: 2,
          name: 'Water Heater',
          description: 'Durable grinder perfect for spices and coffee.',
          price: '$99',
          image: heatermain
        },
        {
          id: 3,
          name: 'Pump',
          description: 'Reliable pump for various applications.',
          price: '$199',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 4,
          name: 'Refrigerator',
          description: 'Energy-efficient refrigerator with ample storage.',
          price: '$899',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 5,
          name: 'Microwave',
          description: 'Compact microwave with multiple cooking modes.',
          price: '$149',
          image: 'https://via.placeholder.com/150',
        },
        {
          id: 6,
          name: 'Air Conditioner',
          description: 'Cooling solution with energy-saving technology.',
          price: '$599',
          image: 'https://via.placeholder.com/150',
        },
      ];
    
  return (
    <div className="container mt-4 ">
    <h2 
      className="text-center"
      style={{
        fontSize: "1.5rem", 
        fontWeight: "700", 
        color: "#333", 
        textTransform: "uppercase", 
        letterSpacing: "1px", 
        textShadow: "2px 2px 4px rgba(0,0,0,0.1)", 
        marginBottom: "2rem",
        position: "relative",
      }}
    >
      Our Products
      <div 
        style={{
          content: '""', 
          position: "absolute", 
          width: "60px", 
          height: "4px", 
          backgroundColor: "#ff416c", 
          bottom: "-10px", 
          left: "50%", 
          transform: "translateX(-50%)"
        }}
      ></div>
    </h2>
  
    {/* Responsive grid: 1 column on mobile, 2 columns on medium, 3 columns on large screens */}
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gx-5 gy-4 mt-1">
      {products.map((product) => (
        <div className="col mb-4" key={product.id}>
          <div
            className="product-card shadow-sm hover-card bg-white h-100 border"
            style={{
              borderRadius: "1rem",
              overflow: "hidden",
              backgroundColor: "#fff",
              transition: "transform 0.3s, box-shadow 0.3s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "scale(1.02)";
              e.currentTarget.style.boxShadow = "0px 12px 24px rgba(0, 0, 0, 0.15)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            {/* Image Section */}
            <div className="w-100" style={{ height: "300px" }}>
              <img
                src={product.image}
                alt={product.name}
                className="img-fluid"
                style={{
                  objectFit: "contain",
                  height: "100%",
                  width: "100%",
                  borderRadius: "0.5rem",
                  transition: "transform 0.3s",
                }}
                onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
            </div>
  
            {/* Card Body */}
            <div className="card-body d-flex flex-column p-4">
              <h5
                className="product-name card-title mb-3"
                style={{ fontSize: "1.2rem", fontWeight: "600", textShadow: "1px 1px 2px rgba(0,0,0,0.1)" }}
              >
                {product.name}
              </h5>
              <p
                className="product-description card-text flex-grow-1"
                style={{
                  color: "#666",
                  fontSize: "0.95rem",
                }}
              >
                {product.description}
              </p>
            </div>
  
            {/* Card Footer */}
            <div className="card-footer d-flex justify-content-between align-items-center p-3 h-auto" style={{ backgroundColor: "#f9f9f9" }}>
              <h6
                className="product-price mb-0"
                style={{
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  color: "#ff4b2b",
                }}
              >
                {product.price}
              </h6>
              <Link
                to={`/MachineTypes${product.id}`}
                className="btn btn-primary buy-button"
                style={{
                  background: "linear-gradient(45deg, #ff4b2b, #ff416c)",
                  border: "none",
                  padding: "0.6rem 1rem",
                  borderRadius: "0.5rem",
                  fontSize: "0.85rem",
                  transition: "background 0.3s ease-in-out",
                }}
                onMouseOver={(e) => (e.currentTarget.style.background = "linear-gradient(45deg, #ff416c, #ff4b2b)")}
                onMouseOut={(e) => (e.currentTarget.style.background = "linear-gradient(45deg, #ff4b2b, #ff416c)")}
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  
  );
};

export default ProductPage;
