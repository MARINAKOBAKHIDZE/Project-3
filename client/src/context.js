import React, { Component } from 'react'

const HouseContext = React.createContext();
//<HouseContext.Provider value={}
class HouseProvider extends Component {
    state={};
  render() {
    return (
      <HouseContext.Provider value="Hello">
      {this.props.children}
      </HouseContext.Provider>
    );
  }
}

const HouseConsumer = HouseContext.Consumer;

export{HouseProvider, HouseConsumer, HouseContext};