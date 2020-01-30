import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import { Button } from 'react-bootstrap';
import { Table } from 'react-bootstrap';
import axios from 'axios';
// import {connect} from 'react-router-dom'


class Category extends Component{
    constructor(props){
        super(props);
        this.state={
            Category:[],
        }
    }

    componentDidMount(){
        axios.get("http://127.0.0.1:8000/quiz/")
        .then(res => res.data)
        .then(data => {
            this.setState({
                Category : data
            })     

        });    
    }


    render(){
        const x = this.state.Category;
        console.log(Category);
        console.log('checking');
        return(
            <div>
                <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                    <th>#</th>
                    <th><h1>Category page</h1></th>
                  
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>  {this.state.Category.map((id,userId)=>(<div key={userId}>{id.title}</div>))}</td>
                    </tr>
                  </tbody>
                    </Table>
                  <b > this page is for Categories :</b>

               

                 <div className="border">
                    <NavLink to="que"><Button variant="danger" onClick={this.state.Category}> Question</Button></NavLink>
                </div>

              
            </div>
        )
    }
}  

export default Category;