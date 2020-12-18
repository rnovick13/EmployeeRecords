import React, {Component} from 'react'
import EmployeeCard from '../components/EmployeeCard'

class EmployeeContainer extends Component {

  componentDidMount(){
    //fetch all employees from db and put into state
    // fetch(db url)
    //   .then(response => response.json())
    //   .then(resp => {
    //     this.setState({employees: resp}))
    //   })
  }
  render(){
    // const employeeCards = this.state.employees.map(employee => <EmployeeCard key={employee.id} employee={employee})
    return(
    //   <div>{employeeCards}</div>
    )
  }
}

export default EmployeeContainer

//needs to fetch all employees and display their cards
