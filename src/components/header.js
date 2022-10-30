import React, { useState } from 'react';
import Navbar from './navbar';
import About from "./about";
import Portfolio from './portfolio';
import Contact from './contact';
import Resume from './resume';

function Header() {
  const [currentPage, handlePageChange] = useState("About");

  const renderPage = () => {
    switch (currentPage) {
      case "About":
        return <About />;
      case "Portfolio":
        return <Portfolio />;
      case "Contact":
        return <Contact />;
      case "Resume":
        return <Resume />;

      default:
        return <About />;
    }
  };
  return (
    <div>
      <nav className='navbar'>
        <Navbar
          currentPage={currentPage}
          handlePageChange={handlePageChange}
        />
      </nav>
      <main>
        <div>{renderPage(currentPage)}</div>
      </main>
    </div>


  )
}
export default Header;
