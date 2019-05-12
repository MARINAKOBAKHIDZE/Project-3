import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
export default function Home() {
  return (
  <>
  <Hero>
    <Banner title=" Luxurious Homes" subtitle="Our mission is to help you find your dream home">
    <Link to='/houses' className="btn-primary">
    Our Houses
    </Link>
    </Banner>
  </Hero>;
  <Services/>
  </>
  );
}
