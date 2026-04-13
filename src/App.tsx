/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

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

export default function App() {
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


