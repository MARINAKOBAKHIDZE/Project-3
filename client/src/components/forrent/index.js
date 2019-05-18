import React, { Component } from 'react';
import API from "../../utils/API";
import homeList from "../homeList";
class Rent extends Component {

  state = {
    results:[]
  };

  componentDidMount() {

    console.log("searchHome");
    this.searchHome();
 
  }

  searchHome = () => {
    API.get()

    .then(res => this.setState({ results: res.data.property}))
    .catch(err => console.log(err));
    
  }

  componentDidUpdate(){
    console.log("update");

    console.log(this.state.results);
  


  }
    
  renderHomes = () => {
        
    // for(let i = 0; i < 10; i++){
    //   this.state.results.push({
        

    //   })

    // }


      // { this.results.map(result => result.address.country);}
      
  }

  render() {
    return (
        <div>
          <h2>ren a Home</h2>
         <div>

        
        {this.state.results.map(object => object.address.country)}
         </div>
        </div>




    );


  }
}

export default Rent;