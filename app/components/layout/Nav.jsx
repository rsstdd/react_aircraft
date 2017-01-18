import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <nav role="navigation" id="nav">
          <input className="trigger" type="checkbox" id="mainNavButton" />
          <label htmlFor="mainNavButton">Menu</label>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About Us</a>
              <ul>
                <li><a href="#">Sub Nav Item</a></li>
                <li><a href="#">Sub Nav Item</a>
                  <ul>
                    <li><a href="#">Sub Sub Nav Item</a></li>
                    <li><a href="#">Sub Sub Nav Item</a></li>
                    <li><a href="#">Sub Sub Nav Item</a></li>
                    <li><a href="#">Sub Sub Nav Item</a></li>
                  </ul>
                </li>
                <li><a href="#">Sub Nav Item</a></li>
                <li><a href="#">Sub Nav Item</a></li>
              </ul>
            </li>
            <li><a href="#">Products</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Specials</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </nav>
      </div>
    );
  }
}
