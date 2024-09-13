// components/Header.jsx
import React from "react";

function Header({ isAdmin, onLoginClick }) {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-indigo-600">Job Portal</h1>
      {!isAdmin && (
        <button
          onClick={onLoginClick}
          className="bg-indigo-500 text-white px-4 py-2 rounded-full hover:bg-indigo-600 transition-colors duration-300"
        >
          Admin Login
        </button>
      )}
    </header>
  );
}

export default Header;
