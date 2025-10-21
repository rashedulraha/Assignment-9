import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterest,
  FaHeart,
} from "react-icons/fa";
import Container from "../Container";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" text-[#0F172A] py-10">
      <Container>
        <div className="flex flex-col md:flex-row justify-between items-start mb-10">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <div className="flex items-center mb-4">
              <div className="bg-[#FF6B6B] w-10 h-10 rounded-lg flex items-center justify-center text-white mr-3">
                <FaHeart className="text-xl" />
              </div>
              <h3 className="text-2xl font-bold"> BabyBuzz</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Your magical destination for toys that spark joy and imagination.
            </p>
            <div className="flex space-x-3">
              <Link
                to={"https://www.facebook.com/rashedulraha"}
                className="bg-[#FF6B6B] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FF5252] transition">
                <FaFacebookF />
              </Link>
              <Link
                to={"https://www.instagram.com/rashedulraha/"}
                className="bg-[#FF6B6B] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FF5252] transition">
                <FaInstagram />
              </Link>
              <Link
                to={"https://x.com/rashedulraha"}
                className="bg-[#FF6B6B] text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-[#FF5252] transition">
                <FaTwitter />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:w-3/4">
            <div>
              <h4 className="font-bold text-lg text-[#FF6B6B] mb-4 flex items-center">
                <span className="bg-[#FF6B6B] w-1 h-5 mr-2"></span>
                BabyBuzz
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <span className="mr-2">›</span> Toys
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <span className="mr-2">›</span> Sellers
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <span className="mr-2">›</span> Categories
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <span className="mr-2">›</span> Brands
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <span className="mr-2">›</span> Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-[#FF6B6B] mb-4 flex items-center">
                <span className="bg-[#FF6B6B] w-1 h-5 mr-2"></span>
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <span className="mr-2">›</span> Community
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <span className="mr-2">›</span> Events
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <span className="mr-2">›</span> Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <span className="mr-2">›</span> Reviews
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <span className="mr-2">›</span> Guides
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-lg text-[#FF6B6B] mb-4 flex items-center">
                <span className="bg-[#FF6B6B] w-1 h-5 mr-2"></span>
                Connect
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <FaFacebookF className="mr-2" /> Facebook
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <FaInstagram className="mr-2" /> Instagram
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <FaTwitter className="mr-2" /> Twitter
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <FaYoutube className="mr-2" /> YouTube
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/"}
                    className="text-gray-600 hover:text-[#FF6B6B] transition flex items-center">
                    <FaPinterest className="mr-2" /> Pinterest
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-600 mb-4 md:mb-0">
              © 2024{" "}
              <Link
                className="text-info"
                to={"https://www.linkedin.com/in/rashedulraha/"}>
                Rashedul Islam
              </Link>
              . All rights reserved
            </p>
            <div className="flex flex-wrap justify-center space-x-4">
              <Link
                to={"/"}
                className="text-[#4D96FF] hover:text-[#FF6B6B] transition text-sm">
                Privacy policy
              </Link>
              <Link
                to={"/"}
                className="text-[#4D96FF] hover:text-[#FF6B6B] transition text-sm">
                Terms of service
              </Link>
              <Link
                to={"/"}
                className="text-[#4D96FF] hover:text-[#FF6B6B] transition text-sm">
                Cookie settings
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
