import React, { Component } from 'react'
import items from './data'
const HouseContext = React.createContext();
//<HouseContext.Provider value={}
class HouseProvider extends Component {
    state={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };
   // getData

   componentDidMount(){
       let homes = this.formatData(items)
        console.log(homes);
    } 

   formatData(items){
       let tempItems = items.map(item =>{
        let id = items.sys.id
        let images = items.fields.images.map(image => image.fields.file.url);

        let house = {...item.fields,images,id}
        return house;

       });

       return
   }


  render() {
    return (
      <HouseContext.Provider value={{...this.state}}>
      {this.props.children}
      </HouseContext.Provider>
    );
  }
}

const HouseConsumer = HouseContext.Consumer;

export{HouseProvider, HouseConsumer, HouseContext};