import React from 'react';
import { useNavigate } from 'react-router-dom';
import product1 from "../../Assets/wasgung.png"; // Replace with the actual image path

const WashingMachineTypes = () => {
  const navigate = useNavigate();

  const machineTypes = [
    {
      id: 101,
      name: '6 KG Capacity Washing Machine',
      price: '₹3658 (Including GST)',
      description: 'Compact washing machine perfect for small families. Washes clothes efficiently within 7 to 10 minutes.',
      image: product1, // Replace with actual path
      specifications: {
        capacity: '6 KG',
        priceDetails: '₹3100 + GST 18% = ₹3658',
        washTime: '7 to 10 minutes',
        shirts: 6,
        pants: 3,
        sarees: 3,
        bedsheets: 1,
        warranty: '10 Years (1 year full free service, balance 9 years material cost only)',
        motor: 'Quarter HP motor',
        power: '145 Watts',
        dimensions: {
          height: '25 inches',
          weight: '11 kg',
          width: '15 inches',
        },
        additionalInfo: 'We should wash all clothes separately.',
      },
    },
    {
      id: 201,
      name: '8 KG Capacity Washing Machine',
      price: '₹4366 (Including GST)',
      description: 'Versatile washing machine for larger families. Washes clothes efficiently within 7 to 10 minutes.',
      image: product1, // Replace with actual path
      specifications: {
        capacity: '8 KG',
        priceDetails: '₹3700 + GST 18% = ₹4366',
        washTime: '7 to 10 minutes',
        shirts: 8,
        pants: 4,
        sarees: 4,
        bedsheets: 1,
        pillowCovers: 1,
        warranty: '10 Years (1 year full free service, balance 9 years material cost only)',
        motor: 'One Third HP motor',
        power: '165 Watts',
        dimensions: {
          height: '25 inches',
          weight: '12 kg',
          width: '15 inches',
        },
        additionalInfo: 'We should wash all clothes separately.',
      },
    },
    {
      id: 202,
      name: '9 KG Capacity Washing Machine',
      price: '₹4799 (Including GST)',
      description: 'Advanced washing machine with buzzer model. Washes clothes efficiently within 7 to 10 minutes.',
      image: product1, // Replace with actual path
      specifications: {
        capacity: '9 KG',
        priceDetails: '₹4067 + GST 18% = ₹4799',
        washTime: '7 to 10 minutes',
        shirts: 10,
        pants: 5,
        sarees: 5,
        bedsheets: 1,
        pillowCovers: 1,
        warranty: '10 Years (1 year full free service, balance 9 years material cost only)',
        motor: 'Half HP motor',
        power: '175 Watts',
        dimensions: {
          height: '25 inches',
          weight: '12 kg',
          width: '15 inches',
        },
        additionalInfo: 'We should wash all clothes separately.',
      },
    },
  ];

  const handleCardClick = (machineId) => {
    navigate(`/machine/${machineId}`);
  };

  return (
    <div className="container my-3">
  <h2 className="text-center mb-4 text-dark font-weight-bold my-4 mb-5">
    Explore Our Washing Machine Types
  </h2>
  
  {/* Responsive Grid */}
  <div className="row">
    {machineTypes.map((type) => (
      <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={type.id}>
        <div
          className="card border-0 rounded-lg shadow-lg h-100 transition-transform duration-300 hover:shadow-2xl hover:scale-105"
          style={{ backgroundColor: '#f8f9fa', borderRadius: '1rem', overflow: 'hidden' }}
        >
          {/* Image Section */}
          <div className="position-relative">
            <img
              src={type.image}
              alt={type.name}
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
              className="card-title text-dark font-weight-bold mb-3"
              style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1.4rem', textTransform: 'capitalize', letterSpacing: '0.5px' }}
            >
              {type.name}
            </h5>
            <p
              className="card-text text-muted mb-4"
              style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1rem', lineHeight: '1.8', color: '#6c757d' }}
            >
              {type.description}
            </p>

            <div className="mt-auto">
              <h6
                className="text-primary font-weight-bold mb-3"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1.1rem' }}
              >
                Specifications:
              </h6>
              <ul
                className="list-unstyled mb-0"
                style={{ fontFamily: 'Roboto, sans-serif', fontSize: '1rem', color: '#495057', lineHeight: '1.7' }}
              >
                <li className="mb-2"><strong>Capacity:</strong> {type.specifications.capacity}</li>
                <li className="mb-2"><strong>Price:</strong> {type.price}</li>
                <li className="mb-2"><strong>Wash Time:</strong> {type.specifications.washTime}</li>
                <li className="mb-2"><strong>Shirts:</strong> {type.specifications.shirts}</li>
                <li className="mb-2"><strong>Bedsheets:</strong> {type.specifications.bedsheets}</li>
                <li className="mb-2"><strong>Power:</strong> {type.specifications.power}</li>
                <li className="mb-2"><strong>Weight:</strong> {type.specifications.weight}</li>
                <li><strong>Warranty:</strong> {type.specifications.warranty}</li>
              </ul>
            </div>

            <div className="text-center mt-4">
              <button
                className="btn btn-primary btn-lg rounded-pill px-5 py-2"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '1rem', letterSpacing: '0.75px', backgroundColor: '#007bff', borderColor: '#007bff', transition: 'all 0.3s ease-in-out' }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}
                onClick={() => handleCardClick(type.id)}
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default WashingMachineTypes;
