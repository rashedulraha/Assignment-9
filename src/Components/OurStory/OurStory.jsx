import React from "react";
import { Link } from "react-router";
import { IoBookSharp } from "react-icons/io5";

const OurStory = () => {
  return (
    <section className="mt-8  p-6 ">
      <h2 className="text-2xl font-bold  mb-4 flex items-center gap-2 text-[#FF6B6B]">
        <IoBookSharp />
        Our Story
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="w-full md:w-1/2">
          <img
            src="https://i.pinimg.com/1200x/da/85/21/da852102a5dd05d38b8793208c6bdec9.jpg"
            alt="Our Story"
            className="w-full h-48 object-cover rounded-md shadow-md transition-transform hover:scale-105"
          />
        </div>
        <div className="w-full md:w-1/2">
          <p className="text-[#6D8299] leading-relaxed">
            Welcome to ToyTopia, where we bring the joy of play to every child.
            Founded in 2020, our mission is to provide the best toys and foster
            a vibrant community for toy enthusiasts. Discover our journey and
            join us!
          </p>
          <Link
            to="/our-story-details"
            className="btn shadow-none w-fit mt-2 bg-[#FFD93D] text-[#0F172A] rounded-md font-medium hover:bg-[#FF6B6B] hover:text-white transition duration-30 border-none">
            Read More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
