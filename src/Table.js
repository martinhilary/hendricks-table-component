import React, { Component } from 'react';
import style from './table.module.css'

const API = 'https://dummy.restapiexample.com/api/v1/employees'
class Table extends Component {
    constructor(props) {
        super(props);
        this.renderTableData = this.renderTableData.bind(this);
        this.state = {
            search: '',
            value: 0,
            employee: props.employee,
        };
    }
    renderTableData(employees) {
        return employees.map((employee) => {
            //append two other column data
            //provide a true/false for each of the elements
            //map another header component from my side to create a full table with checklist and checkbox using true and false

            const { employee_age, employee_name, employee_salary, id, profile_image } = employee //destructuring
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{employee_name}</td>
                    <td>{employee_salary}</td>
                    <td>{employee_age}</td>
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
    //handle Change with an update for name search
    updateSearch(e) {
        this.setState({ search: e.target.value.substr(0, 20) });
    }
    //handle Change with select form
    handleChange = (event) => {
        this.setState({ value: event.target.value });
        console.log(this.state.value)
    }
    //handle submit from form
    handleSubmit(e) {
        e.preventDefault();
    }

    addEmployee(e) {
        //Prvent page from refreshng --> synthetic event and usually
        //upon form submission the DOM flushes all the stored data/state
        //this allows better control of the state and store data
        e.preventDefault();
    }

    render() {
        let filteredName = this.props.data.filter(
            //Everytime search equals to name then we return
            (employee) => {

                //Create an if else here to simulate search
                console.log('this is the value');
                let store = this.state.value;
                if (store == 1) {
                    return employee.employee_age >= 15 && employee.employee_age <= 20;
                }
                else if (store == 2) {
                    return employee.employee_age >= 20 && employee.employee_age < 30;
                }
                else if (store == 3) {
                    return employee.employee_age >= 30 && employee.employee_age < 40;
                }
                else {
                    return employee.employee_name.indexOf(this.state.search) !== -1;
                }
                //if cannot find this.state.search as an index of employee obj then do not return it
            }
        );

        return (
            <div className="Table" >
                <h1 id='title'>Hendricks Table Data</h1>
                <form onSubmit={this.handleSubmit} className='data-search'>
                    <label>
                        <span className='label-header'>Name:</span>
                    </label>

                    <input type="text"
                        placeholder="Search"
                        value={this.state.search}
                        onChange={this.updateSearch.bind(this)}
                    />
                    <label>
                        <span className='label-header'>Age</span>
                    </label>
                    <div className='age-form'>
                        <select className='' value={this.state.value} onChange={this.handleChange}>
                            <option value="1">15 to 20 Years Old</option>
                            <option value="2">20 to 30 Years Old</option>
                            <option value="3">30 to 40 Years Old</option>
                        </select>
                    </div>
                    <input type="submit" value="Search" />
                </form>


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


//not sure with the config for css modules do we need to install or add to config? 