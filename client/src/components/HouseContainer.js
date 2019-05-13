import React from "react";
import { withHouseConsumer } from "../context";
import Loading from "./Loading";
import HouseFilter from "./HouseFilter";
import HouseList from "./HouseList";

function HouseContainer({ context }) {
  const { loading, sortedhouses, houses } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <HouseFilter houses={houses} />
      <HouseList houses={sortedhouses} />
    </>
  );
}

export default withHouseConsumer(HouseContainer);
