import React,{Component} from 'react';
import {Route} from 'react-router-dom';
import Choice from './choice';
import Category from './choice';
import Question from './question';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';

class Routing extends Component{

    render(){
        return(
            <div>    
                
                <div className="App-header">
                    <b >Click on below Button to Route path:</b>
                <div className="border">
                    <Route exact path="/" component={Category} className="App-header"/>
                    <Route exact path="/cho" component={Choice}/>
                    <Route exact path="/que" component={Question}/>
                </div>
                    <NavLink to="/que"><Button variant="link">RouteMe</Button></NavLink>
                </div>

                
            </div>
        )
    }
}  export default  Routing;