import React, { Component } from 'react'
import "./PrimeNumber.css"

export default class OddEven extends Component {
    constructor(props) {
      super(props)
      this.state = {
        number: 0,
        result: undefined
      }
    }
    handleChange = (e) => {
      this.setState({ number: e.target.value })
    }
    handleClick = () => {
        const { number } = this.state
        let result
        if (number % 2 === 0) {
            result = 'Even'
        } else {
            result = 'Odd'
        }
        this.setState({ result })
    }
  render() {
    return (
      <div className='container'>
        <h1>Odd or Even</h1>
        <input type='number' placeholder='Enter a number' onChange={this.handleChange} />
        <button onClick={this.handleClick}>Check</button>
        {this.state.result && <h2>Result: {this.state.result}</h2>}
      </div>
    )
  }
}
