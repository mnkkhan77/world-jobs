import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4 mt-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} World Job. All rights reserved.</p>
        <p>Designed and developed by mnkkhan77 </p>
      </div>
    </footer>
  );
}

export default Footer;
