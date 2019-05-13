import React, { Component } from 'react'
import {HouseContext} from '../context'
export default class FeaturedHouses extends Component {
    static contextType = HouseContext
  render() {
      const value = this.context;
      console.log(value);
    return (
      <div> Hello From Featured Homes {value} </div>
    )
  }
}
