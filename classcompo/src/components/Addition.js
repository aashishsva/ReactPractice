import React, { Component } from 'react'
import "./PrimeNumber.css"

export default class Addition extends Component {
    constructor(props){
        super(props)
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            result: undefined
        }
    }
    handleAdd = (event) => {
        this.setState({result: parseInt(this.state.firstNumber)+ parseInt(this.state.secondNumber)})
        event.preventDefault();
    }
    handleSub = (event) => {
        this.setState({result: parseInt(this.state.firstNumber)- parseInt(this.state.secondNumber)})
        event.preventDefault();
    }
    handleMul = (event) => {
        this.setState({result: parseInt(this.state.firstNumber)* parseInt(this.state.secondNumber)})
        event.preventDefault();
    }
    handleDiv = (event) => {
        this.setState({result: parseInt(this.state.firstNumber)/ parseInt(this.state.secondNumber)})
        event.preventDefault();
    }
  render() {
    return (
        <>
            <div className='container'>
                <h1>Addition</h1>
                <input type="number" placeholder="Enter first number" onChange={(e)=>this.setState({firstNumber:e.target.value})}/>
                <input type="number" placeholder="Enter second number" onChange={(e)=>this.setState({secondNumber:e.target.value})} />
                <button onClick={this.handleAdd}>Add</button>
                <button onClick={this.handleSub}>Subtraction</button>
                <button onClick={this.handleMul}>Multiplication</button>
                <button onClick={this.handleDiv}>Division</button>

                {this.state.result && <p>Result: {this.state.result}</p>}
            </div>
        </>
    )
  }
}
