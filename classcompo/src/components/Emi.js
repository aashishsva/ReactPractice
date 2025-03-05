import React, { Component } from "react";

export default class Emi extends Component {
  constructor(props) {
    super(props);
    this.state = {
      principal: 0,
      rate: 0,
      time: 0,
      result: 0,
    };
    this.calculateEmi = this.calculateEmi.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  calculateEmi(e) {
    e.preventDefault();
    let annualPrincipal = parseFloat(this.state.principal);
    let annualRate = parseFloat(this.state.rate);
    let time = parseFloat(this.state.time);
    let monthlyInterestRate = annualRate / 100 / 12;
    let numberOfMonths = time * 12;
    let emi = (annualPrincipal * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfMonths));
    this.setState({ result: emi.toFixed(2) });
  }

  render() {
    return (
      <>
        <div className="container">
          <h2>EMI Calculator</h2>
          <form onSubmit={this.calculateEmi}>
            <label>Principal:</label>
            <br />
            <input
              type="number"
              name="principal"
              value={this.state.principal}
              onChange={this.handleInputChange}
              required
            />
            <br />
            <label>Rate of Interest:</label>
            <br />
            <input
              type="number"
              name="rate"
              value={this.state.rate}
              onChange={this.handleInputChange}
              required
            />
            <br />
            <label>Time (in years):</label>
            <br />
            <input
              type="number"
              name="time"
              value={this.state.time}
              onChange={this.handleInputChange}
              required
            />
            <br />
            <button type="submit">Calculate EMI</button>
            <p>Total EMI: {this.state.result}</p>
          </form>
        </div>
      </>
    );
  }
}
