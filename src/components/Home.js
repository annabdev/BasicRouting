import React, { Component } from 'react';
import { Link } from "react-router-dom"



class Home extends Component {
  render() {
    return (
      <div className="App">
        <h2>Hello from Home</h2>
        <Link to="/Page1">Page1</Link>
        <br></br>
        <Link to="/Page2">Page2</Link>
      </div>
    );
  }
}
//Comment for no reason at all

export default Home;
