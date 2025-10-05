import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 overflow-x-hidden">
      <div className="text-center px-4 sm:px-6 lg:px-8 max-w-md mx-auto">
        <h1 className="mb-4 text-4xl font-bold break-words">404</h1>
        <p className="mb-4 text-xl text-gray-600 break-words">Oops! Page not found</p>
        <a href="/" className="text-blue-500 underline hover:text-blue-700 break-words">
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
