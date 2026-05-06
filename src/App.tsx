/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import ServiceLevels from './components/ServiceLevels';
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
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import GalleryPage from './pages/GalleryPage';
import ServiceAreasPage from './pages/ServiceAreasPage';
import CareersPage from './pages/CareersPage';
import SubmissionVideoPopup from './components/SubmissionVideoPopup';

function HomePage() {
  return (
    <div className="min-h-screen bg-enterprise-white">
      <Preloader />
      <Header />
      <main>
        <Hero />
        <Services />
        <ServiceLevels />
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

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <SubmissionVideoPopup />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/our-work" element={<OurWorkPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/service-areas" element={<ServiceAreasPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
    </BrowserRouter>
  );
}
