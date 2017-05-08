import React, { Component } from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div className="navbar-container">
        <div className="navbar-top">
          <p className="navbar-title">
            Contacts Keeper
          </p>
        </div>
        <div className="navbar-greyspace"></div>
      </div>
    )
  }
}
