import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './components/Contact';
import OurProducts from './components/OurProducts';
import WashingMachineTypes from './components/WashingMachine/WashingMachineTypes';
import MachineDetailPage from './components/WashingMachine/MachineDetailPage';
import InstantWaterHeaterTypes from './components/WaterHeater/InstantWaterHeaterTypes';
import WaterHeaterSpecificationPage from './components/WaterHeater/WaterHeaterSpecificationPage';
import ScrollToTop from './components/ScrollToTop'

import './App.css'; 

const App = () => {
  return (
    <Router>
     <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ourProducts" element={<OurProducts />} />
          <Route path="/MachineTypes1" element={<WashingMachineTypes />} />
          <Route path="/machine/:id" element={<MachineDetailPage />} />

          <Route path="/MachineTypes2" element={<InstantWaterHeaterTypes />} />
          <Route path="/water-heater/specifications/:modelId" element={<WaterHeaterSpecificationPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
