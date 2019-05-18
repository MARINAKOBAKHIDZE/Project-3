import React, {Fragment} from "react";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import { Link } from "react-router-dom";
import HouseContainer from "../components/HouseContainer";
const houses = () => {
  return (
    <Fragment>
      <Hero hero="housesHero">
        <Banner title="Home Sweet Home">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
      <HouseContainer />
    </Fragment>
  );
};

export default houses;
