import { Link } from "react-router";
import {
  FaExclamationTriangle,
  FaHome,
  FaSearch,
  FaArrowLeft,
} from "react-icons/fa";
import Container from "../Components/Container";

const NotFound = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <Container>
        <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto relative z-10">
          {/* Animated 404 text */}
          <div className="mb-8 relative">
            <h1 className="text-9xl md:text-[200px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF6B6B] to-[#FFD93D] opacity-20 absolute top-0 left-1/2 transform -translate-x-1/2">
              404
            </h1>
            <h1 className="text-7xl md:text-9xl font-bold text-[#0F172A] relative">
              404
            </h1>
          </div>

          {/* Icon with animation */}
          <div className="mb-6 animate-bounce">
            <div className="border bg-[#FF6B6B] bg- w-24 h-24 rounded-full flex items-center justify-center text-white shadow-lg">
              <FaExclamationTriangle className="text-4xl" />
            </div>
          </div>

          {/* Error message */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
            The page you are looking for might have been removed, had its name
            changed, or is temporarily unavailable.
          </p>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
