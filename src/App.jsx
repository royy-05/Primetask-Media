import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CustomCursor } from './components/Cursor/CustomCursor';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { FloatingActions } from './components/FloatingActions/FloatingActions';
import { ScrollToTop } from './components/ScrollToTop';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/Services';
import { ContactPage } from './pages/Contact';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToTop />
        <CustomCursor />
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
      </div>
    </BrowserRouter>
  );
}

export default App;
