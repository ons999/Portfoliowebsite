import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-3 mt-4">
      <div className="container">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
