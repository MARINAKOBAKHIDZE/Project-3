import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
const Houses = () => {
  return <Hero hero="roomsHero">
  <Banner title="Our Homes">
  <Link to='/' className="btn-primary">
  Return to Homepage
  </Link>
  </Banner>
  </Hero>;
};

export default Houses
