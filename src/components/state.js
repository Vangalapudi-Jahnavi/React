import React, { Component } from 'react'

export default class state extends Component {
    constructor()
    {
        super();
        this.state={
            name:"Jahnavi",
        }
    }
    clickMe=()=>{
        this.setState(
            {
                name:"Vangalapudi Jahnavi"
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
