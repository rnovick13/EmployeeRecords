class EmployeeSchema():
    id = fields.Int
    first_name = fields.str()
    last_name = fields.str()
    salary = fields.float()
    hire_date = fields.str()
    position = fields.str()
    manager = fields.str()
