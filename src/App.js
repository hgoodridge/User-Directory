import React from 'react';
import API from './utils/API';
import './App.css';
import EmployeeCard from '/components/EmployeeCard/'
import EmployeeWrap from '/components/EmployeeWrap/'

class App extends React.Component {
  state = {
    employees: []
  }

  componentDidMount() {
    API.getEmployees(10)
      .then(res => {
        this.setState({ employees: res.data.results })
        // var firstName = this.state.employees[0].name
        
      //  const soter = this.state.employees.sort(function(a,b){
      //     return a.name.first - b.name.first
      //     return firstName
      //   })
      //   console.log(firstName)
      //   console.log(this.state.employees)
      //   // console.log(Date())
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <div className="bluediv text-white ">
          <h1 className="text-center textmiddle" >
            Employee Directory
          </h1>
          <p className="text-center">
            Click on controls to filter by heading or use the search box to narrow your results
          </p>
        </div>
        <div className="d-flex justify-content-center mt-3">
          <form >
            <input className="search" placeholder="Search for employees!">
            </input>
          </form>
        </div>
        <div className ="mt-4">
          <EmployeeWrap>
          {this.state.employees.map(employee =>(
            
            <EmployeeCard
            key={employee.phone}
            image={employee.picture.thumbnail}
            name={`${employee.name.first} ${employee.name.last}`}
            phone={employee.phone}
            email={employee.email}
            dob={employee.dob.date}
            
            />
            ))}
            </EmployeeWrap>
        </div>
      </div>
    );
  }
}

export default App;
