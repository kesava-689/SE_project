import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Product from './components/Product';
import WhatCanIDoOnFocusmate from './components/WhatCanIDoOnFocusmate';
import Features from './components/Features';
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import FAQDetailed from "./components/FAQDetailed";
import SignIn from './components/SignIn';
import ForgotPassword from './components/ForgotPassword';
import SignUp from './components/SignUp';
import Footer from './components/Footer';
import ScienceBehindFocusmate from './components/ScienceBehindFocusmate';
import Pricing from './components/Pricing';
import Global from './components/Global';
import BlogPage from './components/BlogPage';
import CommunityGuidelines from './components/CommunityGuidelines';
import HelpCenter from './components/HelpCenter';
import About from './components/About';
import Contact from './components/Contact';
import HowItWorks from './components/HowItWorks';



function App() {
  return (
    <div>
      <Navbar />
      <Global />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/features" element={<Features />} />
        <Route path="/product" element={<Product />} />
        <Route path="/what-can-i-do" element={<WhatCanIDoOnFocusmate />} />
        <Route path="/science-behind-focusmate" element={<ScienceBehindFocusmate />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/detailed-faq" element={<FAQDetailed />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/community-guidelines" element={<CommunityGuidelines />} />
        <Route path="/help-center" element={<HelpCenter />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
