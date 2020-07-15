import React, { Component } from 'react'

export default class state extends Component {
    constructor()
    {
        super();
        this.state={
            name:"Kasyap",
        }
    }
    clickMe=()=>{
        this.setState(
            {
                name:"Kasyap Velavarthipati"
            }
        )
    }
    render() {
        return (
            <div>
                <h1>Here we are using class component</h1>
        <h2>{this.state.name}</h2>
        <button onClick={()=> this.clickMe()}>ClickMe..</button>
            </div>
        )
    }
}
