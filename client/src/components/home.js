import React, { Component } from 'react';
import './customers.css';
import { Link } from 'react-router-dom'

class Homes extends Component {
//   constructor() {
//     super();
//     this.state = {
//       customers: []
//     };
//   }

//   componentDidMount() {
//     fetch('/api/customers')
//       .then(res => res.json())
//       .then(customers => this.setState({customers}, () => console.log('Customers fetched...', customers)));
//   }


  // allhomes()
  // {
  //   this.
  // }

  render() {
    return (
      <div>
        <a type="button">
          <i> <Link to={"/findahome/"}>find your next home </Link></i>
        </a>
   </div>
    );
  }
}

export default Homes;
