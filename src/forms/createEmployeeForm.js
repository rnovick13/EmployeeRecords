import React, {Component} from 'react'

class createEmployeeForm extends Component {

  constructor() {
    super();
    this.state = {
      first: "",
      last: "",
      salary: "",
      hireDate: "",
      position: "",
      manager: ""
    }
  }

  componentDidMount() {
    
  }

  handleSubmit = event => {
    event.preventDefault();
    //use a function for a post request
  }
render() {
  return(
    <form onSubmit={event => this.handleSubmit(event)}>
      <label>
        Name:
        <input type="text" name="First" value={this.state.first}/>
        <input type="text" name="Last" value={this.state.last}/>
      </label>
      <label>
        Salary:
        <input type="text" name="Salary" value={this.state.salary}/>
      </label>
      <label>
        Hire Date:
        <input type="text" name="Hire Date" value={this.state.hireDate}/>
      </label>
      <label>
        Position:
        <input type="text" name="Position" value={this.state.position}/>
      </label>
      <label>
        Manager:
        <input type="text" name="Manager" value={this.state.manager}/>
      </label>
      <input type="submit" value="submit" />
    </form>
    )
  }
}

export default createEmployeeForm
