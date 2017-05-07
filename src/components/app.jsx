import React, { Component } from 'react';
import '../style/main.css';

import Navbar from './navbar';

export default class app extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />

      </div>
    );
  }
}
