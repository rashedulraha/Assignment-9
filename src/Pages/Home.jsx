import { FaStar, FaBoxOpen, FaBook } from "react-icons/fa";
import useProductFetch from "../Hook/useProductFetch";
import Container from "../Components/Container";
import Card from "../Components/Card/Card";
import useArrivalsFetch from "../Hook/useArrivalsFetch";
import Arrival from "../Components/Card/Arrival";
import OurStory from "../Components/OurStory/OurStory";
import Carousel from "../Components/Carousel/Carousel";

const Home = () => {
  const { product } = useProductFetch();
  const sliceData = product.data?.slice(0, 8);

  const { Arrivals } = useArrivalsFetch();
  const ArrivalsData = Arrivals?.data;

  return (
    <div className="min-h-screen bg-white text-[#0F172A]">
      <Container>
        {/* slider  */}
        <Carousel />

        {/* Popular Toys Section */}
        <section className="py-8">
          <h2 className="text-2xl font-bold text-[#FF6B6B] mb-4 flex items-center">
            <FaStar className="mr-2" /> Popular Toys
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sliceData?.map((cardData) => (
              <Card key={cardData?.id} cardData={cardData} />
            ))}
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-bold text-[#0F172A] mb-4 flex items-center">
            <FaBoxOpen className="mr-2" /> New Arrivals
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {ArrivalsData?.map((Arrivals) => (
              <Arrival key={Arrivals?.id} Arrivals={Arrivals} />
            ))}
          </div>
        </section>

        {/* Our Story Section */}
        <OurStory />
      </Container>
    </div>
  );
};

export default Home;
