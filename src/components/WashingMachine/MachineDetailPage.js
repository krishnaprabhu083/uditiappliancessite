import React from 'react';
import { useParams } from 'react-router-dom';
import product1 from "../../Assets/wasgung.png"; // Replace with the actual image paths
// import product2 from "../Assets/product2.png";
// import product3 from "../Assets/product3.png";

const MachineDetailPage = () => {
  const { id } = useParams(); // Get the machine id from the URL

  // Sample data for machines, in a real app this data should come from an API or a database
  const machines = {
    101: {
      name: 'Front Load 7kg Washing Machine',
      price: '$600',
      description: 'Efficient front-load washing machine with multiple wash programs and energy-saving technology.',
      images: [product1, product1, product1], // Multiple product images
      specifications: {
        capacity: '7kg',
        energyRating: '5-star',
        spinSpeed: '1200 RPM',
        dimensions: '600 x 850 x 600 mm',
        warranty: '2 Years',
        waterConsumption: '50 liters per cycle',
        noiseLevel: '52 dB',
        washPrograms: ['Cotton', 'Delicates', 'Quick Wash', 'Eco', 'Wool', 'Rinse', 'Spin'],
        technology: 'Inverter Motor, Smart Foam Control, Time Delay',
        color: 'White',
        additionalFeatures: ['Child Lock', 'Auto Restart', 'Temperature Control'],
      },
    },
    201: {
      name: 'Top Load 9kg Washing Machine',
      price: '$500',
      description: 'Powerful top-load washing machine with easy loading, smart control features, and quick wash options.',
      images: [product1, product1], // Add other product images
      specifications: {
        capacity: '9kg',
        energyRating: '4-star',
        spinSpeed: '1000 RPM',
        dimensions: '620 x 900 x 650 mm',
        warranty: '2 Years',
        waterConsumption: '70 liters per cycle',
        noiseLevel: '56 dB',
        washPrograms: ['Normal', 'Heavy', 'Delicates', 'Quick Wash', 'Spin', 'Rinse'],
        technology: 'Smart Water Control, Pulsator Wash, Fuzzy Logic',
        color: 'Silver',
        additionalFeatures: ['Child Lock', 'Water Level Selector', 'Auto Restart'],
      },
    },
  };

  const machine = machines[id];

  return (
    <div className="container mb-5" style={{ maxWidth: '1140px' }}>
    {machine ? (
      <>
        {/* Product Image and Basic Info */}
        <div className="row mb-5 align-items-center">
          <div className="col-md-6">
            {/* Bootstrap Carousel for multiple product images */}
            <div id="productCarousel" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
                {machine.images.map((img, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <img
                      src={img}
                      className="d-block w-100"
                      alt={machine.name}
                      style={{ height: '400px', objectFit: 'contain' }}
                    />
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#productCarousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#productCarousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>

          <div className="col-md-6">
            <div className="d-flex flex-column">
            <h2 className="text-dark f font-weight-bold font-size-large" style={{ fontFamily: 'Poppins, sans-serif', lineHeight: '1.2' }}>
  {machine.name}
</h2>

              <h4
                className="text-primary mb-4"
                style={{ fontFamily: 'Poppins, sans-serif', fontSize: '2rem', fontWeight: '600' }}
              >
                {machine.price}
              </h4>
              <p
                className="text-muted mb-4"
                style={{
                  fontFamily: 'Roboto, sans-serif',
                  fontSize: '1.15rem',
                  lineHeight: '1.8',
                  color: '#6c757d',
                }}
              >
                {machine.description}
              </p>

              <div className="d-flex flex-column flex-md-row gap-3">
                <button
                  className="btn btn-primary btn-lg rounded-pill px-4 py-2"
                  style={{ fontSize: '1.1rem', transition: 'background-color 0.3s' }}
                >
                  Add to Cart
                </button>
                <button
                  className="btn btn-outline-secondary btn-lg rounded-pill px-4 py-2"
                  style={{ fontSize: '1.1rem' }}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Specifications Section */}
        <div className="row">
          <div className="col-12">
            <h3
              className="text-dark mb-4"
              style={{ fontSize: '2rem', fontFamily: 'Poppins, sans-serif', fontWeight: 'bold' }}
            >
              Product Specifications
            </h3>
            <div className="bg-light p-4 rounded-lg shadow-sm">
              <table className="table table-borderless">
                <tbody style={{ fontSize: '1.1rem', color: '#495057', fontFamily: 'Roboto, sans-serif' }}>
                  <tr>
                    <th scope="row">Capacity</th>
                    <td>{machine.specifications.capacity}</td>
                  </tr>
                  <tr>
                    <th scope="row">Energy Rating</th>
                    <td>{machine.specifications.energyRating}</td>
                  </tr>
                  <tr>
                    <th scope="row">Spin Speed</th>
                    <td>{machine.specifications.spinSpeed}</td>
                  </tr>
                  <tr>
                    <th scope="row">Dimensions</th>
                    <td>{machine.specifications.dimensions}</td>
                  </tr>
                  <tr>
                    <th scope="row">Warranty</th>
                    <td>{machine.specifications.warranty}</td>
                  </tr>
                  <tr>
                    <th scope="row">Water Consumption</th>
                    <td>{machine.specifications.waterConsumption}</td>
                  </tr>
                  <tr>
                    <th scope="row">Noise Level</th>
                    <td>{machine.specifications.noiseLevel}</td>
                  </tr>
                  <tr>
                    <th scope="row">Wash Programs</th>
                    <td>{machine.specifications.washPrograms.join(', ')}</td>
                  </tr>
                  <tr>
                    <th scope="row">Technology</th>
                    <td>{machine.specifications.technology}</td>
                  </tr>
                  <tr>
                    <th scope="row">Color</th>
                    <td>{machine.specifications.color}</td>
                  </tr>
                  <tr>
                    <th scope="row">Additional Features</th>
                    <td>{machine.specifications.additionalFeatures.join(', ')}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    ) : (
      <p className="text-center text-muted" style={{ fontSize: '1.25rem' }}>Loading machine details...</p>
    )}
  </div>
  );
};

export default MachineDetailPage;
