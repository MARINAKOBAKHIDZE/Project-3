import React from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <Hero>
      <Banner title="Contact Us" subtitle="Email Us For More Information">
        <Link to="/" className="btn-primary">
          return home
        </Link>
      </Banner>
    </Hero>
  );
};

export default Contact;
