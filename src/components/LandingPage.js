import React from 'react';
import Header from './landingPage/Header';
import Features from './landingPage/Feature';
import CoinsInfo from './landingPage/CoinsInfo';
import Testimonials from './landingPage/Testimonials';
import CTASection from './landingPage/CTASection';
import Footer from './landingPage/Footer';
import '../styles/landing-page.css';

export default function LandingPage() {
  return (
    <>
      <Header />
      <Features />
      <CoinsInfo />
      <Testimonials />
      <CTASection />
      <Footer />
    </>
  );
}
