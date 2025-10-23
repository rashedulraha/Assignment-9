import {
  FaUser,
  FaEnvelope,
  FaTag,
  FaShoppingCart,
  FaArrowLeft,
} from "react-icons/fa";
import useProductFetch from "../Hook/useProductFetch";
import Container from "../Components/Container";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const Details = () => {
  const [findProduct, setFindProduct] = useState(null);
  const { id } = useParams();

  const { product } = useProductFetch();
  const productData = product?.data;

  useEffect(() => {
    const product = productData?.find((product) => product?.toyId == id);
    setFindProduct(product);
  }, [productData, id]);

  const {
    toyName,
    sellerName,
    sellerEmail,
    price,
    availableQuantity,
    description,
    pictureURL,
    subCategory,
  } = findProduct || {};

  // Function to render star ratings

  return (
    <div className="pb-20">
      <Container>
        <div className=" mx-auto bg-white rounded-2xl  overflow-hidden">
          <div className="p-4 md:p-6 ">
            <Link
              to={"/seller"}
              className="flex items-center gap-2 text-[#FF6B6B] hover:text-[#FF5252] transition-colors">
              <FaArrowLeft /> Back to all seller products
            </Link>
          </div>

          <div className="flex flex-col md:flex-row">
            {/* Image section */}
            <div className="md:w-1/2  flex items-center justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src={pictureURL}
                  alt={toyName}
                  className="w-full h-80 md:h-96 object-cover rounded-xl shadow-lg p-4"
                />
                <div className="absolute top-4 right-4 bg-[#FF6B6B] text-white py-1 px-3 rounded-full text-sm font-medium">
                  {subCategory}
                </div>
              </div>
            </div>

            {/* Details section */}
            <div className="md:w-1/2 ">
              <div className="mb-6">
                <h1 className="text-3xl md:text-4xl font-bold text-[#FF6B6B] mb-2">
                  {toyName}
                </h1>
                <div className="flex items-center mb-4"></div>
              </div>

              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  {description}
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center">
                    <FaUser className="text-[#FF6B6B] mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Seller</p>
                      <p className="font-medium">{sellerName}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <FaEnvelope className="text-[#FF6B6B] mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Contact</p>
                      <p className="font-medium">{sellerEmail}</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <FaTag className="text-[#FF6B6B] mr-3" />
                    <div>
                      <p className="text-sm text-gray-500">Category</p>
                      <p className="font-medium">{subCategory}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Price and availability */}
              <div className="rounded-xl p-6 mb-8 ">
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <p className="text-sm opacity-80">Price</p>
                    <p className="text-3xl font-bold">${price}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm opacity-80">Available</p>
                    <p className="text-2xl font-bold">
                      {availableQuantity} pcs
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="flex-1 btn w-full bg-[#FF6B6B] text-white font-medium hover:bg-[#FF5252] transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FF6B6B] border-none cursor-pointer shadow-none">
                    <FaShoppingCart /> Add to Wishlist
                  </button>
                  <button className="flex-1 btn w-full bg-[#FFD93D] text-[#0F172A] rounded-md font-medium hover:text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#FFD93D] border-none cursor-pointer shadow-none">
                    Buy Now
                  </button>
                </div>
              </div>

              {/* Additional info */}
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Delivery</p>
                  <p className="font-medium">2-3 Business Days</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-500">Warranty</p>
                  <p className="font-medium">2 Months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Details;
