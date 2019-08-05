import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import TopLogo from "../../assets/noun_Graph.png";
import CostLogo from "../../assets/noun_energy_cost.png";
import AmountLogo from "../../assets/noun_solar.png";
import "./dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.amountInstallations = {
      total: 0.0,
      state: "NY",
    };
    this.higherCost = {
      total: 0.0,
      zipCode: "122",
    };
    this.higherAmountInstallations = {
      amount: 0.0,
      month: "May",
    };
  }
  componentDidMount() {}

  render() {
    return (
      <div className="container">
        <div className="cards">
          <div className="imgBox">
            <div>
              <img src={CostLogo} alt="Higher Costs" />
              <h2>Higher Costs</h2>
            </div>
          </div>
          <div className="overlay" />
          <div className="content">
            <h2>Higher Costs</h2>
            <p>....</p>
          </div>
        </div>

        <div className="cards">
          <div className="imgBox">
            <div>
              <img src={AmountLogo} alt="Amount Installations" />
              <h2>Amount Installations</h2>
            </div>
          </div>
          <div className="overlay" />
          <div className="content">
            <h2>Amount Installations</h2>
            <p>....</p>
          </div>
        </div>

        <div className="cards">
          <div className="imgBox">
            <div>
              <img src={TopLogo} alt="Top Amount Installations" />
              <h2>Top Amount Installations</h2>
            </div>
          </div>
          <div className="overlay" />
          <div className="content">
            <h2>Top Amount Installations</h2>
            <p>....</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
