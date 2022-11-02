import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Skills from './pages/Skills';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home currentPage={currentPage} handlePageChange={handlePageChange}/>;
    }
    if (currentPage === 'About') {
      return <About />;
    }
    if (currentPage === 'Work') {
      return <Work />;
    }
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Skills') {
      return <Skills />;
    }
    return <Resume />
  };

  const renderNav = () => {
    if (currentPage !== 'Home') {
      return <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
    }
  }

  const renderFooter = () => {
    if (currentPage !== 'Home') {
      return <Footer />
    }
  }

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {renderNav()}
      <div className="portfolioContainer">
      {renderPage()}
      </div>
      {renderFooter()}
    </div>
  );
}
