import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <div className="row">
        <ul className="nav">
          <img src="./images/aircraft_logo.png" />
          <li><a href="#">Home</a></li>
          <li><a href="#">Collection</a></li>
          <li><a href="#">Login</a></li>
          <li><a href="#">Sign Up</a></li>
          <li className="active">Active</li>
        </ul>
      </div>
    );
  }
}
