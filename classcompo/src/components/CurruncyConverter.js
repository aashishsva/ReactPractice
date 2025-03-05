import React, { Component } from "react";

export default class CurruncyConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      fromCurrency: "",
      toCurrency: "",
      rate: 74,
      convertedAmount: null, // Change to null
    };
  }

  convertDollars = (e) => {
    e.preventDefault();
    if (this.state.amount) {
      this.setState({ convertedAmount: this.state.amount * this.state.rate });
    } else {
      this.setState({ convertedAmount: null });
    }
  };

  convertInr = (e) => {
    e.preventDefault();
    if (this.state.amount) {
      this.setState({ convertedAmount: this.state.amount / this.state.rate });
    } else {
      this.setState({ convertedAmount: null });
    }
  };

  render() {
    return (
      <>
        <div className="container">
          <h2> CurrencyConverter </h2>
          <div>
            <input
              type="number"
              placeholder="Enter Amount"
              value={this.state.amount}
              onChange={(e) => this.setState({ amount: e.target.value })}
            />
            <button type="button" onClick={this.convertDollars}>
              Convert into Dollars
            </button>
            <button type="button" onClick={this.convertInr}> {/* Fixed here */}
              Convert into INR
            </button>
          </div>
          {this.state.convertedAmount !== null && (
            <h3>Converted currency is: {this.state.convertedAmount}</h3>
          )}
        </div>
      </>
    );
  }
}
