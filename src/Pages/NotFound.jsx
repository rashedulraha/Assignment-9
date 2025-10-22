import { Link } from "react-router";
import { FaExclamationTriangle } from "react-icons/fa";
import Container from "../Components/Container";

const NotFound = () => {
  return (
    <div className="py-10 md:py-20 flex items-center justify-center p-4 bg-white">
      <Container>
        <div className="flex flex-col items-center justify-center text-center">
          <div className="mb-6">
            <div className="bg-[#FF6B6B] w-16 h-16 rounded-lg flex items-center justify-center text-white shadow-md">
              <FaExclamationTriangle className="text-3xl" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-[#0F172A] mb-2">404</h1>
          <p className="text-gray-500 text-lg mb-4">Oops! Page Not Found</p>
          <p className="text-gray-600 mb-6">
            The page you are looking for might have been removed or is
            temporarily unavailable.
          </p>
          <Link
            to="/"
            className="bg-[#FF6B6B] text-white py-2 px-4 rounded-md font-medium hover:bg-[#FF5252] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B] shadow-md">
            Go Back Home
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default NotFound;
