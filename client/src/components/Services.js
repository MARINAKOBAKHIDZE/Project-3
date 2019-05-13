import React, { Component } from 'react'
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info: 
                    'Yadadadadadadadad1'
            },
            {
                icon:<FaHiking/>,
                title:"Hiking",
                info: 
                    'Yadadadadadadadad2'
            },
            {
                icon:<FaShuttleVan/>,
                title:"free Shuttle",
                info: 
                    'Yadadadadadadadad3'
            },
            {
                icon:<FaBeer/>,
                title:"free Beers!",
                info: 
                    'Yadadadadadadadad4'
            },
        ]
    }
  render() {
    return (
      <section className="services">
            <Title title='services'/>
            <div className="services-center">
            {this.state.services.map((item,index) => {
                return (<article key={index} className="service">
                    <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                </article>
                );
            })}
            </div>
      </section>
    )
  }
}
