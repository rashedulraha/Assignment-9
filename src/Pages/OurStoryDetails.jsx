import React from "react";
import { Link } from "react-router";
import {
  IoArrowBack,
  IoBookSharp,
  IoPeople,
  IoHeart,
  IoStar,
} from "react-icons/io5";
import Container from "../Components/Container";

const OurStoryDetails = () => {
  return (
    <Container>
      <div className="min-h-screen  px-4 sm:px-6 pb-20">
        <div className="mb-10  rounded-b-2xl overflow-hidden shadow-lg">
          <img
            src="https://i.pinimg.com/1200x/da/85/21/da852102a5dd05d38b8793208c6bdec9.jpg"
            alt="ToyTopia Journey"
            className="w-full h-64 md:h-96 object-cover"
          />
        </div>

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#0F172A] flex items-center gap-3">
            <IoBookSharp className="text-[#FF6B6B]" />
            Our Story
          </h1>
          <div className="w-24 h-1 bg-[#FFD93D] mt-2"></div>
        </div>

        <div className="mb-12 bg-white p-6  ">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
            The Beginning of ToyTopia
          </h2>
          <p className="text-[#6D8299] leading-relaxed mb-4">
            ToyTopia was born in 2020 from a simple idea: every child deserves
            access to toys that spark imagination, encourage creativity, and
            bring endless joy. Our founder, a former teacher and parent of
            three, noticed a gap in the market for high-quality, educational
            toys that were both fun and developmentally beneficial.
          </p>
          <p className="text-[#6D8299] leading-relaxed">
            What started as a small online store with just 50 carefully selected
            products has now grown into a comprehensive toy destination with
            over 2,000 items, a physical showroom, and a team of passionate toy
            enthusiasts dedicated to helping you find the perfect toy for every
            child.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl  border border-[#FFD93D] flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#FFD93D] flex items-center justify-center mb-4">
              <IoHeart className="text-2xl text-[#0F172A]" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Our Mission
            </h3>
            <p className="text-[#6D8299]">
              To inspire creativity and learning through carefully selected toys
              that bring joy to children and peace of mind to parents.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl  border border-[#FF6B6B]  flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#FF6B6B] flex items-center justify-center mb-4">
              <IoStar className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Quality Promise
            </h3>
            <p className="text-[#6D8299]">
              Every toy in our collection meets strict safety standards and is
              tested for durability, educational value, and fun factor.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-[#6D8299] flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-[#6D8299] flex items-center justify-center mb-4">
              <IoPeople className="text-2xl text-white" />
            </div>
            <h3 className="text-xl font-bold text-[#0F172A] mb-2">
              Community Focus
            </h3>
            <p className="text-[#6D8299]">
              We're building a vibrant community of toy lovers through events,
              workshops, and our annual ToyTopia Festival.
            </p>
          </div>
        </div>

        <div className="mb-12 bg-white p-6 rounded-xl border border-[#FF6B6B]">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-6">
            Our Journey
          </h2>

          <div className="space-y-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src="https://i.pinimg.com/736x/c1/e5/61/c1e5617726d1e96efb73ed6e5a495eeb.jpg"
                  alt="ToyTopia Launch 2020"
                  className="w-full h-48 object-cover rounded-lg "
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-[#FF6B6B] mb-2">
                  2020 - The Beginning
                </h3>
                <p className="text-[#6D8299] leading-relaxed">
                  Despite the challenges of the pandemic, we launched ToyTopia
                  with a curated collection of 50 educational toys. Our focus on
                  quality and customer service helped us build a loyal customer
                  base from day one.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-6">
              <div className="md:w-1/3">
                <img
                  src="https://i.pinimg.com/736x/b2/9d/6a/b29d6a654482922d55303d2a5ef37145.jpg"
                  alt="ToyTopia Expansion 2021"
                  className="w-full h-48 object-cover rounded-lg "
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-[#FF6B6B] mb-2">
                  2021 - Growing Fast
                </h3>
                <p className="text-[#6D8299] leading-relaxed">
                  We expanded our collection to over 500 products and introduced
                  our popular "Toy of the Month" subscription box. Our team grew
                  to 15 passionate toy experts, and we started hosting virtual
                  playdates for kids during lockdowns.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img
                  src="https://i.pinimg.com/1200x/c7/65/f8/c765f826e168615af9b593bfb7d370f0.jpg"
                  alt="ToyTopia Physical Store 2022"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-[#FF6B6B] mb-2">
                  2022 - Going Physical
                </h3>
                <p className="text-[#6D8299] leading-relaxed">
                  We opened our first physical showroom in the heart of the
                  city, allowing customers to experience our toys firsthand. We
                  also launched our community outreach program, donating toys to
                  children's hospitals and schools in need.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse gap-6">
              <div className="md:w-1/3">
                <img
                  src="https://i.pinimg.com/736x/2a/d5/c3/2ad5c3124938d3abb09fbcacd53729d1.jpg"
                  alt="ToyTopia Festival 2023"
                  className="w-full h-48 object-cover rounded-lg "
                />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold text-[#FF6B6B] mb-2">
                  2023 - Community Celebration
                </h3>
                <p className="text-[#6D8299] leading-relaxed">
                  We hosted our first annual ToyTopia Festival, bringing
                  together over 5,000 families for a day of play, learning, and
                  fun. We also expanded our product line to include sustainable
                  and eco-friendly toys, reflecting our commitment to the
                  planet.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4">
            Join Our Toy Community
          </h2>
          <p className="text-[#6D8299] mb-6 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive deals, toy
            recommendations, and invitations to special events.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="px-6 py-3 bg-[#FFD93D] text-[#0F172A] rounded-md font-medium hover:bg-[#FF6B6B] hover:text-white transition duration-300 border-none">
              Explore Our Toys
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-transparent text-[#FF6B6B] border-2 border-[#FF6B6B] rounded-md font-medium hover:bg-[#FF6B6B] hover:text-white transition duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default OurStoryDetails;
