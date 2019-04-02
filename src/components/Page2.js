import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Page2 extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello from page 2</p>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/Page1">Page1</Link>
      </div>
    );
  }
}

export default Page2;
