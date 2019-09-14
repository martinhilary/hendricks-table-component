import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


const API = 'http://dummy.restapiexample.com/api/v1/employees'
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      employees: [],
    };
  }

  componentDidMount() {
    fetch(API)
      .then(response => response.json())
      .then(data => console.log(data[0]))
    // this.setState({ employees: data })
    console.log(this.state.employees);
  }
  render() {
    return (
      <div className="App" >

      </div>
    );
  }
}
export default App;
