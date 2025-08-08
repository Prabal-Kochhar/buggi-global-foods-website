import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import WhyChooseUs from './components/WhyChooseUs';
import Traction from './components/Traction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Scroll to the top when the page changes
    window.scrollTo(0, 0);
  }, [currentPage]);

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Hero navigateTo={navigateTo} />;
      case 'about':
        return <About />;
      case 'products':
        return <Products />;
      case 'why-choose-us':
        return <WhyChooseUs />;
      case 'traction':
        return <Traction />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero navigateTo={navigateTo} />;
    }
  };

  return (
    <div className="app-container"> {/* Using a global class for the main container */}
      <Header navigateTo={navigateTo} />
      <main className="main-content"> {/* Using a global class for main content */}
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
