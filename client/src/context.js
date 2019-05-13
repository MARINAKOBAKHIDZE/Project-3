import React, { Component } from "react";
// import items from "./data";
import Client from "./Contentful";

const HouseContext = React.createContext();

export default class HouseProvider extends Component {
  state = {
    houses: [],
    sortedhouses: [],
    featuredhouses: [],
    loading: true,
    //
    type: "all",
    capacity: 1,
    price: 0,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0
  };

  getData = async () => {
    try {
      let response = await Client.getEntries({
        content_type: "beachResortHouse"
      });
      let houses = this.formatData(response.items);

      let featuredhouses = houses.filter(house => house.featured === true);
      //
      let maxPrice = Math.max(...houses.map(item => item.price));
      let maxSize = Math.max(...houses.map(item => item.size));
      this.setState({
        houses,
        featuredhouses,
        sortedhouses: houses,
        loading: false,
        //
        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getData();
    // let houses = this.formatData(items);
    // let featuredhouses = houses.filter(house => house.featured === true);
    // //
    // let maxPrice = Math.max(...houses.map(item => item.price));
    // let maxSize = Math.max(...houses.map(item => item.size));
    // this.setState({
    //   houses,
    //   featuredhouses,
    //   sortedhouses: houses,
    //   loading: false,
    //   //
    //   price: maxPrice,
    //   maxPrice,
    //   maxSize
    // });
  }

  formatData(items) {
    let tempItems = items.map(item => {
      let id = item.sys.id;
      let images = item.fields.images.map(image => image.fields.file.url);

      let house = { ...item.fields, images, id };
      return house;
    });
    return tempItems;
  }
  getHouse = slug => {
    let temphouses = [...this.state.houses];
    const house = temphouses.find(house => house.slug === slug);
    return house;
  };
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    console.log(name, value);

    this.setState(
      {
        [name]: value
      },
      this.filterhouses
    );
  };
  filterhouses = () => {
    let {
      houses,
      type,
      capacity,
      price,
      minSize,
      maxSize
    } = this.state;

    let temphouses = [...houses];
    // transform values
    // get capacity
    capacity = parseInt(capacity);
    price = parseInt(price);
    // filter by type
    if (type !== "all") {
      temphouses = temphouses.filter(house => house.type === type);
    }
    // filter by capacity
    if (capacity !== 1) {
      temphouses = temphouses.filter(house => house.capacity >= capacity);
    }
    // filter by price
    temphouses = temphouses.filter(house => house.price <= price);
    //filter by size
    temphouses = temphouses.filter(
      house => house.size >= minSize && house.size <= maxSize
    );
    this.setState({
      sortedhouses: temphouses
    });
  };
  render() {
    return (
      <HouseContext.Provider
        value={{
          ...this.state,
          getHouse: this.getHouse,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </HouseContext.Provider>
    );
  }
}
const HouseConsumer = HouseContext.Consumer;

export { HouseProvider, HouseConsumer, HouseContext };

export function withHouseConsumer(Component) {
  return function ConsumerWrapper(props) {
    return (
      <HouseConsumer>
        {value => <Component {...props} context={value} />}
      </HouseConsumer>
    );
  };
}
