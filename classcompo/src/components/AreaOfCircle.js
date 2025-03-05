import React, { Component } from 'react'

export default class AreaOfCircle extends Component {
    constructor(props){
        super(props)
        this.state = {
            radius: 0,
            area: undefined
        }
    }
    
    handleClick = () => {
        const radius = parseFloat(this.state.radius)
        if(isNaN(radius) || radius <= 0){
            alert("Invalid radius")
            return
        }
        const area = Math.PI * radius * radius
        this.setState({area})
        console.log(area)
  
    }

  render() {
    return (
      <>
        <div>AreaOfCircle</div>
        <input type="text" placeholder="Enter radius" onChange={(e)=> this.setState({radius:e.target.value})} />
        <button onClick={this.handleClick}>Calculate</button>
        {this.state.area && <h2>Area of Circle is: {this.state.area}</h2>}
      </>
    )
  }
}
