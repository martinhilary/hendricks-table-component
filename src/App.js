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
      .then(data => this.setState({
        employees: data,
      })
      )
    // need to do a map ontop with id 
    //users.map(user => {
    // const { username, name, email } = user;
    // this.setState({ employees: data })
    console.log(this.state.employees);
  }

  renderTableData() {
    // return this.state.
    console.log(this.state.employees);
    return this.state.employees.map((employee) => {
      const { employee_age, employee_name, employee_salary, id, profile_image } = employee //destructuring
      return (
        <tr key={id}>
          <td>{employee_name}</td>
          <td>{employee_age}</td>
        </tr>
      )
    })
  }
  render() {
    return (
      <div className="App" >
        <h1 id='title'>Hendricks Table Data</h1>
        <table id='employees'>
          <tbody class='table'>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    );
  }
}
export default App;
