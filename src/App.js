import React, { Component } from 'react';
import './App.css';
import { Howl } from 'howler'
import Loader from './loader/loader.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Loader />
      </div>
    );
  }
}

export default App;
