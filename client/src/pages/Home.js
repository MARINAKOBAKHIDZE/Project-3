import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
import Featuredhouses from "../components/FeaturedHouses";
const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious houses"
          subtitle="deluxe houses starting at $299"
        >
          <Link to="/houses" className="btn-primary">
            our houses
          </Link>
        </Banner>
      </Hero>
      <Services />
      <Featuredhouses />
    </>
  );
};

export default home;
