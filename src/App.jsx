import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from './components/ContactUs';
import TermsOfService from "./components/TermsOfService";
import PrivacyPolicy from "./components/PrivacyPolicy";
import UpiPayment from "./components/UpiPayment";
import AboutUs from "./components/AboutUs";
import HelpCenter from "./components/HelpCenter";


const Home = lazy(() => import("./pages/Home"));
const Register = lazy(() => import("./pages/Register"));
const Platform = lazy(() => import("./pages/Platform"));

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/AboutUs" element={<AboutUs />} />
              <Route path="/register" element={<Register />} />
              <Route path="/platform" element={<Platform />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/pay-subscription" element={<UpiPayment />} />
              <Route path="/HelpCenter" element={< HelpCenter />} />
            </Routes>
          </Suspense>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;


