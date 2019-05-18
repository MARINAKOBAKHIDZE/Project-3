import React, {Fragment} from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Services from "../components/Services";
// import Footer from "../components/Footer";
const home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner title="Luxurious Housing" subtitle="Your Dream House Is Our Mission">
          <Link to="/houses" className="btn-primary">
            Listings
          </Link>
        </Banner>
      </Hero>
      <Services />
      {/* <Footer /> */}
    </Fragment>
  );
};

export default home;
