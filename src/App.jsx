import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import Header from './components/Header';
import Footer from './components/Footer';
import StickyChat from './components/StickyChat';

// Pages
import Home from './pages/Home';
import HowItWorks from './pages/HowItWorks';
import Workflows from './pages/Workflows';
import Academy from './pages/Academy';
import Demo from './pages/Demo';
import Pricing from './pages/Pricing';
import Policies from './pages/Policies';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="flex flex-col" style={{ minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/workflows" element={<Workflows />} />
              <Route path="/academy" element={<Academy />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/policies" element={<Policies />} />
            </Routes>
          </main>
          <Footer />
          <StickyChat />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
