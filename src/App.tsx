/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceAreaBanner from './components/ServiceAreaBanner';
import About from './components/About';
import TrustBanner from './components/TrustBanner';
import Reviews from './components/Reviews';
import Work from './components/Work';
import FinalCTA from './components/FinalCTA';
import Map from './components/Map';
import Footer from './components/Footer';
import FloatingContactBar from './components/FloatingContactBar';
import Preloader from './components/Preloader';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ReviewsPage from './pages/ReviewsPage';
import ServicePage from './pages/ServicePage';
import OurWorkPage from './pages/OurWorkPage';

function HomePage() {
  return (
    <div className="min-h-screen bg-enterprise-white">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Services />
        <ServiceAreaBanner />
        <About />
        <TrustBanner />
        <Reviews />
        <Work />
        <FinalCTA />
        <Map />
      </main>
      <Footer />
      <FloatingContactBar />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
      </Routes>
    </BrowserRouter>
  );
}
