import { ChevronRight, Home } from "lucide-react";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-white dark:bg-gray-900 py-3 px-4 shadow-md border border-gray-200 dark:border-gray-700 rounded-md"
    >
      <div className="max-w-7xl mx-auto">
        <ol className="flex items-center space-x-2 text-sm">
          {/* Home Link */}
          <li>
            <Link
              to="/"
              className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100 flex items-center"
              aria-label="Go to homepage"
            >
              <Home size={16} className="mr-1" />
              Home
            </Link>
          </li>

          {/* Breadcrumb Items */}
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
            const isLast = index === pathnames.length - 1;
            const displayName = name.charAt(0).toUpperCase() + name.slice(1);

            return (
              <React.Fragment key={name}>
                {/* Breadcrumb separator */}
                {index !== 0 && (
                  <span className="text-gray-400 dark:text-gray-500">
                    <ChevronRight size={16} />
                  </span>
                )}

                {/* Current Breadcrumb Link or Text */}
                <li>
                  {isLast ? (
                    <span className="text-gray-900 dark:text-white font-medium">
                      {displayName}
                    </span>
                  ) : (
                    <Link
                      to={routeTo}
                      className="text-gray-800 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-100"
                      aria-label={`Go to ${displayName}`}
                    >
                      {displayName}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}
