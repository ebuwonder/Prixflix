import React from "react";


function Footer() {
  return (
    <footer className='footer mt-auto py-3 bg-dark text-white'>
      <div className='container'> <small>&copy;{new Date().getFullYear()} Amayah - All Rights Reserved</small></div>
    </footer>
  );
}

export default Footer;
