
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import ServiceDetail from './pages/ServiceDetail';
import About from './pages/About';
import Contact from './pages/Contact';
import PaymentOptions from './pages/PaymentOptions';
import ReviewsPage from './pages/ReviewsPage';
import RecentWork from "./pages/RecentWork";


function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:serviceSlug" element={<ServiceDetail />} />
            <Route path="/payment" element={<PaymentOptions />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/recentwork" element={<RecentWork />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
