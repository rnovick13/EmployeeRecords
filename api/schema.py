class EmployeeSchema():
    id = fields.int()
    first_name = fields.str()
    last_name = fields.str()
    salary = fields.float()
    hire_date = fields.str()
    position = fields.str()
    manager = fields.str()
