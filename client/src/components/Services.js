import React, { Component } from "react";
import { FaCcAmex , FaUserSecret } from "react-icons/fa";
import Title from "./Title";
export default class Services extends Component {
  state = {
    services: [
      {
        icon: <FaCcAmex />,
        title: "Bussiness Credit vs Personal Credit ",
        info:
        "Can your work card have an impact on your credit score? The answer may surprise you."
      },
      {
        icon: <FaUserSecret />,
        title: "Do you need an agent?",
        info:
        "Before you make a decision, be sure you understand how much an agent can do for you as a home buyer."
      },
    ]
  };
  render() {
    return (
      <section className="services">
        <Title title="Helping First Time Buyers" />
        <div className="services-center">
          {this.state.services.map(item => {
            return (
              <article key={`item-${item.title}`} className="service">
                <span>{item.icon}</span>
                <h6>{item.title}</h6>
                <p>{item.info}</p>
              </article>
            );
          })}
        </div>
      </section>
    );
  }
}
