import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
class Choice extends Component{
    constructor(props){
        super(props);
        this.state={
            choice:[],
        }
    }
    render(){
        return(
            <div>
                <h1 className="App-header">"Choice page:"</h1>
                <div>
                            <NavLink to="cat"><Button variant="warning">categories</Button></NavLink>
                            <NavLink to="que"><Button variant="primary">question</Button></NavLink>
                </div>
            </div>
        )
    }
}  export default  Choice;