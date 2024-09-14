function Header({ isAdmin, onLoginClick, onLogout }) {
  return (
    <header className="bg-indigo-600 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Job Portal</h1>
      <div>
        {isAdmin ? (
          <button
            onClick={onLogout}
            className="bg-red-500 px-4 py-2 rounded hover:bg-red-600 transition-colors duration-300"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={onLoginClick}
            className="bg-white text-indigo-600 px-4 py-2 rounded hover:bg-gray-200 transition-colors duration-300"
          >
            Admin Login
          </button>
        )}
      </div>
    </header>
  );
}

export default Header;
