import React, { Component } from 'react'

export default class SimpleIntrest extends Component {
    constructor(props) {
        super(props)
        this.state = {
            principal: 0,
            rate: 0,
            time: 0,
            result: undefined
        }
    }

    calculateSimpleInterest = (e) => {
        this.setState({
            result: parseInt(this.state.principal) * parseInt(this.state.rate) * parseInt(this.state.time) / 100
        })
        e.preventDefault();
    }

  render() {
    return (
      <div className="container">
        <h2>Simple Interest Calculator</h2>
        <form onSubmit={this.calculateSimpleInterest}>
            <input type="number" value= {this.state.principal} onChange={(e)=> this.setState({principal: e.target.value})} placeholder="Enter Principal Amount" required />
            <input type="number" value= {this.state.rate} onChange={(e)=> this.setState({rate: e.target.value})} placeholder="Enter Rate of Interest" required />
            <input type="number" value= {this.state.time} onChange={(e)=> this.setState({time: e.target.value})} placeholder="Enter Time Period" required />
            <button type="submit">Calculate</button>
        </form>
        {this.state.result && <p>Simple Interest: {this.state.result}</p>}
      </div>
    )
  }
}
