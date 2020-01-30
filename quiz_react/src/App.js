import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routing from './router.js';

class App extends Component {
  render() {
    return (
      <div className="border">
     
      <div>
          <h2>this Application is to perform Quiz test</h2>
      </div>

          <BrowserRouter>
            <Routing/>
          </BrowserRouter>
        
      </div>
    );
  }
}

export default App;