import React from 'react';
import { useNavigate } from 'react-router-dom';

import grinderImg1 from "../../Assets/Heater/premiummain.jpg";
import grinderImg2 from "../../Assets/Heater/classicmain.jpg";
import grinderImg3 from "../../Assets/Heater/economymain.png"; // Replace with the actual image path

const InstantWaterHeaterTypes = () => {
  const navigate = useNavigate();

  const waterHeaterModels = [
    {
      id: 301,
      name: 'Premium Model',
      price: '₹2,891',
      capacity: '1 liter',
      inletOutlet: 'Threaded Inlet / Outlet',
      warranty: '10 Years',
      color: 'Black',
      image: grinderImg1,
      power: {
        current: '1 hour runs will take 2½ units',
        mcb: '16A MCB',
        switch: '16A On/Off Switch',
      },
      features: [
        'Durable ABS Tank',
        '24/7 heat water guarantee',
        'Shock and water proof',
        'Thermostat available (automatically cuts off if temperature exceeds 70°C)',
      ],
    },
    {
      id: 302,
      name: 'Classic Model',
      price: '₹2,478',
      capacity: '1 liter',
      inletOutlet: 'N/A',
      warranty: '10 Years',
      color: 'Grey',
      image: grinderImg2,
      power: {
        current: '1 hour runs will take 2½ units',
        switch: '16A On/Off Switch only',
      },
      features: [
        'Durable ABS Tank',
        '24/7 heat water guarantee',
        'Shock and water proof',
        'Thermostat available (automatically cuts off if temperature exceeds 70°C)',
      ],
    },
    {
      id: 303,
      name: 'Economy Model',
      price: '₹1,829',
      capacity: '750 ml',
      inletOutlet: 'N/A',
      warranty: '10 Years',
      color: 'Grey and Black',
      image: grinderImg3,
      power: {
        current: '1 hour runs will take 2½ units',
        switch: 'N/A',
      },
      features: [
        'PP Tank',
        '24/7 heat water guarantee',
        'Shock and water proof',
        'Compact stand',
        'Thermostat available (automatically cuts off if temperature exceeds 70°C)',
      ],
    },
  ];

  const handleCardClick = (modelId) => {
    navigate(`/water-heater/specifications/${modelId}`);
  };
  

  return (
    <div className="container">
      <h2 className="text-center my-4 text-dark font-weight-bold">Explore Our Instant Water Heater Models</h2>
      
      <div className="row">
        {waterHeaterModels.map((model) => (
          <div className="col-sm-12 col-md-6 col-lg-4 mb-4 mt-2" key={model.id}>
            <div 
              className="card border-0 rounded-lg shadow-lg h-100 transition-transform duration-300 hover:shadow-2xl hover:scale-105" 
              style={{ backgroundColor: '', borderRadius: '1rem', overflow: 'hidden' }}
            >
              {/* Image Section */}
              <div className="position-relative">
                <img
                  src={model.image}
                  alt={model.name}
                  className="card-img-top img-fluid"
                  style={{
                    height: '250px',
                    objectFit: 'contain',
                    transition: 'transform 0.4s ease-in-out',
                  }}
                />
              </div>

              {/* Card Body */}
              <div className="card-body d-flex flex-column p-4" style={{ backgroundColor: '#ffffff' }}>
                <h5 
                  className="card-title text-primary font-weight-bold text-uppercase" 
                  style={{ fontSize: '1.4rem', letterSpacing: '0.5px' }}
                >
                  {model.name}
                </h5>
                <p className="card-text text-secondary mb-3" style={{ fontSize: '1rem' }}>
                  <strong>Price:</strong> {model.price}
                </p>

                {/* Specifications */}
                <h6 className="mt-3 text-muted" style={{ fontSize: '1rem' }}>Specifications:</h6>
                <ul className="list-unstyled" style={{ fontSize: '0.95rem' }}>
                  <li className="mb-1"><strong>Capacity:</strong> {model.capacity}</li>
                  <li className="mb-1"><strong>Color:</strong> {model.color}</li>
                  <li className="mb-1"><strong>Inlet/Outlet:</strong> {model.inletOutlet}</li>
                  <li className="mb-1"><strong>Warranty:</strong> {model.warranty}</li>
                  <li className="mb-1"><strong>Power Consumption:</strong> {model.power.current}</li>
                  {model.power.mcb && <li className="mb-1"><strong>MCB:</strong> {model.power.mcb}</li>}
                  {model.power.switch && <li className="mb-1"><strong>Switch:</strong> {model.power.switch}</li>}
                  <li><strong>Features:</strong></li>
                  <ul>
                    {model.features.map((feature, index) => (
                      <li key={index} className="mb-1">• {feature}</li>
                    ))}
                  </ul>
                </ul>

                {/* Button */}
                <button
                  className="btn btn-primary mt-auto rounded-pill shadow-sm"
                  onClick={() => handleCardClick(model.id)}
                  style={{ transition: 'background-color 0.3s, transform 0.3s' }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#0056b3'}
                  onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#007bff'}
                >
                  View Specifications
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InstantWaterHeaterTypes;
