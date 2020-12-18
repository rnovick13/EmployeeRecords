import React, {Component} from 'react'

class createEmployeeForm extends Component {

  constructor() {
    super();
    this.state = {
      first: "",
      last: "",
      salary: "",
      hire_date: "",
      position: "",
      manager: ""
    }
  }

<form>
  <label>
    Name:
    <input type="text" name="First"/>
    <input type="text" name="Last"/>
  </label>
  <label>
    Salary:
    <input type="text" name="Salary" />
  </label>
  <label>
    Hire Date:
    <input type="text" name="Hire Date" />
  </label>
  <label>
    Position:
    <input type="text" name="Position" />
  </label>
  <label>
    Manager:
    <input type="text" name="Manager" />
  </label>
  <input type="submit" value="submit" />
</form>

}

export default createEmployeeForm
