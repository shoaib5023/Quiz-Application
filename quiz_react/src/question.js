import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

import { Button } from 'react-bootstrap';

class Question extends Component{
    constructor(props){
        super(props);
        this.state={
            question:[],
        }
    }
    render(){
        return(
            <div>
                
                        <div>
                            <h1 className="App-header">Question Page</h1>
                        </div>
                         < NavLink to="cat" > <Button variant="danger">category</Button></NavLink>
                         <div>
                            <NavLink to="cho"> <Button variant="warning">choice</Button></NavLink>
                         </div>
                      
               
           
                           
               
            </div>
        )
    }
}  export default  Question;