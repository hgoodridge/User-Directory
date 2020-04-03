import React from 'react';
import API from './utils/API';
import './App.css';

class App extends React.Component{
  state = {
    employees:[]
  }

  componentDidMount(){
    API.getEmployees(10)
    .then(res =>this.setState({employees:res.data.results}))
    .catch(err => console.log(err))
  }

  render(){
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
            <input className="search"placeholder="Search for employees!">
            </input>
          </form>
        </div>
      </div>
    );
  }
}

export default App;
