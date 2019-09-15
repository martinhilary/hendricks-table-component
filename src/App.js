import React, { Component } from 'react';
import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Table from './Table';
const API = 'http://dummy.restapiexample.com/api/v1/employees'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  // App contains the fetch method
  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => this.setState({ data })
        // Update the App state with the new data
      )
  }

  render() {
    const { data } = this.state;
    return (
      <div className="App" >
        <Table data={data} />
      </div>
    );
  }
}
export default App;
