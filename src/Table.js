import React, { Component } from 'react';
import style from './table.module.css'

const API = 'http://dummy.restapiexample.com/api/v1/employees'
class Table extends Component {
    constructor(props) {
        super(props);
        this.renderTableData = this.renderTableData.bind(this);
        this.state = {
            search: '',
            employee: props.employee,
        };
    }

    renderTableData(employees) {
        // return this.state.
        return employees.map((employee) => {
            //append two other column data
            //provide a true/false for each of the elements
            //map another header component from my side to create a full table with checklist and checkbox using true and false

            const { employee_age, employee_name, employee_salary, id, profile_image } = employee //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{employee_name}</td>
                    <td>{employee_age}</td>
                    <td>{employee_salary}</td>
                    <td>{profile_image}</td>
                </tr>
            )
        })
    }
    renderTableHeader() {
        let obj = { id: "170887", employee_name: "Sourabh006", employee_salary: "50000", employee_age: "26", profile_image: "" }
        //Not sure why Object keys does not work with my json obj when
        // I did the Object.keys with (this.props.data[0])
        let header = Object.keys(obj)
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    render() {
        let filteredName = this.props.data.filter(
            //Everytime search equals to name then we return
            (employee) => {
                //if cannot find this.state.search as an index of employee obj then do not return it
                return employee.employee_name.indexOf(this.state.search) !== -1;
            }
        );
        console.log("Filtered Name");
        console.log(filteredName);
        return (
            <div className="Table" >
                <h1 id='title'>Hendricks Table Data</h1>
                <input type="text"
                    placeholder="Search"
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />
                {/* <form>
                    <>
                </form> */}
                <table id='employees'>
                    <tbody className='table'>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData(filteredName)}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table;
