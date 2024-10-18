// WaterHeaterSpecificationPage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import grinderImg1 from "../../Assets/grinderImg1.png";
import grinderImg2 from "../../Assets/grinderImg2.png";

const WaterHeaterSpecificationPage = () => {
  const { modelId } = useParams();

  const waterHeaterModels = {
    301: {
      name: 'Premium Model',
      price: '₹2,891',
      capacity: '1 liter',
      inletOutlet: 'Threaded Inlet / Outlet',
      warranty: '10 Years',
      color: 'Black',
      image:grinderImg1,
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
    302: {
      name: 'Classic Model',
      price: '₹2,478',
      capacity: '1 liter',
      warranty: '10 Years',
      color: 'Grey',
      image:grinderImg1,
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
    303: {
      name: 'Economy Model',
      price: '₹1,829',
      capacity: '750 ml',
      warranty: '10 Years',
      color: 'Grey and Black',
      image:grinderImg2,
      power: {
        current: '1 hour runs will take 2½ units',
      },
      features: [
        'PP Tank',
        '24/7 heat water guarantee',
        'Shock and water proof',
        'Compact stand',
        'Thermostat available (automatically cuts off if temperature exceeds 70°C)',
      ],
    },
  };

  const model = waterHeaterModels[modelId];

  return (
    <div className="container" style={{ maxWidth: '1200px' }}>
    {model ? (
      <>
        <h2 className="text-center text-dark font-weight-bold my-4" style={{ fontSize: '2rem', lineHeight: '1.2' }}>
          {model.name} Specifications
        </h2>
        <div className="row mb-5 align-items-center">
          
          {/* Image Section */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <div className="card border-0 rounded-lg shadow-lg overflow-hidden">
              <img
                src={model.image} // Replace with the actual image path
                alt={model.name}
                className="img-fluid"
                style={{
                  height: '100%',
                  maxHeight: '450px',
                  objectFit: 'contain',
                  transition: 'transform 0.3s ease',
                  borderRadius: '0.75rem 0.75rem 0 0',
                }}
              />
            </div>
          </div>
  
          {/* Specifications Section */}
          <div className="col-12 col-md-6">
            <div className="d-flex flex-column p-4">
              <h4 className="text-primary mb-3" style={{ fontSize: '1.8rem', fontWeight: '700' }}>
                {model.price}
              </h4>
              <h6 className="mt-3 text-muted" style={{ fontWeight: '600', fontSize: '1.1rem' }}>Detailed Specifications:</h6>
              <ul className="list-unstyled" style={{ fontSize: '1rem' }}>
                <li className="mb-2"><strong>Capacity:</strong> {model.capacity}</li>
                <li className="mb-2"><strong>Inlet/Outlet:</strong> {model.inletOutlet}</li>
                <li className="mb-2"><strong>Warranty:</strong> {model.warranty}</li>
                <li className="mb-2"><strong>Color:</strong> {model.color}</li>
                <li className="mb-2"><strong>Power Consumption:</strong> {model.power.current}</li>
                <li className="mb-2"><strong>MCB:</strong> {model.power.mcb || 'N/A'}</li>
                <li className="mb-2"><strong>Switch:</strong> {model.power.switch || 'N/A'}</li>
                <li><strong>Features:</strong>
                  <ul className="pl-3">
                    {model.features.map((feature, index) => (
                      <li key={index} className="mb-1">• {feature}</li>
                    ))}
                  </ul>
                </li>
              </ul>
              <button 
                className="btn btn-warning btn-lg rounded-pill mt-4" 
                style={{ 
                  transition: 'background-color 0.3s', 
                  fontSize: '1.1rem', 
                  padding: '10px 20px' 
                }}
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </>
    ) : (
      <p className="text-center text-muted" style={{ fontSize: '1.25rem' }}>Loading water heater details...</p>
    )}
  </div>
  
  );
};

export default WaterHeaterSpecificationPage;
