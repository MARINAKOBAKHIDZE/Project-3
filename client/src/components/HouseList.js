import React from "react";
import house from "./house";
const housesList = ({ houses }) => {
  if (houses.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no houses matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className="houseslist">
      <div className="houseslist-center">
        {houses.map(item => {
          return <house key={item.id} house={item} />;
        })}
      </div>
    </section>
  );
};

export default housesList;
