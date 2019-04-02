import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Page1 extends Component {
  render() {
    return (
      <div className="App">
        <p>Hello from Page 1</p>
        <Link to="/">Home</Link>
        <br></br>
        <Link to="/Page2">Page2</Link>
      </div>
    );
  }
}

export default Page1;
