import React, { Component } from "react";
import "./PrimeNumber.css"

export default class PrimeNumber extends Component {
    constructor(props) {
      super(props);
      this.state = { number:0 , prime: false };
    }
    handleChange = (event) => {
      this.setState({ number: event.target.value });
    }
    checkPrime = () => {
      let num = this.state.number;
      let isPrime = true;
  
      if (num <= 1) {
        isPrime = false;
      } else {
        for (let i = 2; i < num; i++) {
          if (num % i === 0) {
            isPrime = false;
            break;
          }
        }
      }
      this.setState({ prime: isPrime });
    }
  render() {
    return (
      <div className="container">
        <h2>Prime Number Calculator</h2>
        <input type="number" value={this.state.number} onChange={this.handleChange} />
        <button onClick={this.checkPrime}>Check</button>
        <p>{this.state.prime? "Prime" : "Not Prime"}</p>

      </div>
    );
  }
}
