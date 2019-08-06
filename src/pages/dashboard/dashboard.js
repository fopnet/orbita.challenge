import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import CostLogo from "../../assets/noun_energy_cost.png";
import TopLogo from "../../assets/noun_Graph.png";
import AmountLogo from "../../assets/noun_solar.png";
import PanelService from "../../services/panelService";
import CurrencyFormat from "react-currency-format";
import "./dashboard.css";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      ia: {
        amount: 1,
        state: "",
      },
      higherCost: {
        cost: 0.0,
        zipcode: "",
      },
      top3Amount: [],
    };
  }

  async componentDidMount() {
    const panelService = new PanelService();

    const ia = await panelService.getPanelsByState();
    this.setState({ ia: ia });
    console.log("ia ", this.state.ia);

    const higherCost = await panelService.getPanelsCostByZipcode();
    this.setState({ higherCost: higherCost });
    console.log("higherCost ", this.state.higherCost);

    const top3Amount = await panelService.getPanelTop3Amount();
    this.setState({ top3Amount: top3Amount });
    console.log("topp3Amount ", this.state.top3Amount);
  }

  render() {
    return (
      <div className="container">
        <div className="cards">
          <div className="imgBox">
            <div>
              <img src={AmountLogo} alt="Amount Installations" />
              <h2>Amount Installations</h2>
            </div>
          </div>
          <div className="overlay" />
          <div className="content">
            <h2>Number of Installations Done by user state</h2>
            <h3>
              Informations:
              <ul>
                <li>Total Amount: {this.state.ia.amount}</li>
                <li>User state: {this.state.ia.state}</li>
              </ul>
            </h3>
          </div>
        </div>

        <div className="cards">
          <div className="imgBox">
            <div>
              <img src={CostLogo} alt="Higher Costs" />
              <h2>Higher Costs</h2>
            </div>
          </div>
          <div className="overlay" />
          <div className="content">
            <h2>higher cost installation</h2>
            <h3>
              Informations:
              <ul>
                <li>ZipCode: {this.state.higherCost.zipcode}</li>
                <li>
                  Cost:
                  <CurrencyFormat
                    value={this.state.higherCost.cost}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </li>
              </ul>
            </h3>
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
            <h2>Top 3 largest months number with of installations.</h2>
            <h3>
              Informations:
              <table>
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Total Amount</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.top3Amount.map(it => (
                    <tr key={it.month}>
                      <td>{it.month}</td>
                      <td>{it.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Dashboard);
