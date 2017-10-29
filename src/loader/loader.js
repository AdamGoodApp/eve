import React, { Component } from 'react';
import './loader.css';

class Loader extends Component {

  constructor(props) {
    super(props);
    this.state = {url: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({url: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.url);
    event.preventDefault();
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.url} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }

}

export default Loader;
