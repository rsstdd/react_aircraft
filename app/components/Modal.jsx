import axios from 'axios';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Modal extends React.Component {
  render() {
    return (
      <div>
        <button id="myBtn">Open Modal</button>
        <div className="modal" id="myModal">
          <div className="modal-content">
            <span className="close">&times;</span>
            <p>Some text in the Modal..</p>
          </div>
        </div>
      </div>
    );
  }
}
