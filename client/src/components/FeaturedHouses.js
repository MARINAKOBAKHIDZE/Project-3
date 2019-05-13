// import React, { Component } from "react";
// import Title from "./Title";
// import { HouseContext } from "../context";
// import House from "./House";
// import Loading from "./Loading";
// import { FaRestroom } from "react-icons/fa";
// export default class FeaturedHouses extends Component {
//   static contextType = HouseContext;

//   render() {
//     let { loading, featuredHouses: houses } = this.context;

//     houses = rooms.map(house => {
//       return <House key={house.id} house={house} />;
//     });
//     return (
//       <section className="featured-houses">
//         <Title title="featured houses" />
//         <div className="featured-houses-center">
//           {loading ? <Loading /> : houses}
//         </div>
//       </section>
//     );
//   }
// }
