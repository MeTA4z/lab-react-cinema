import React, { Component } from 'react';
import axios from 'axios';

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get('http://localhost:5000/');
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div>
        <button onClick={this.callMyBackend}>Test Backend Call</button>
        <h1>Welcome to the Nickelodeon Cinema</h1>
      </div>
    );
  }
}
