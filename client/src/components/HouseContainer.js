import React, {Fragment} from "react";
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
    <Fragment>
      <HouseFilter houses={houses} />
      <HouseList houses={sortedhouses} />
    </Fragment>
  );
}

export default withHouseConsumer(HouseContainer);
