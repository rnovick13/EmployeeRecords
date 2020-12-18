#from {add db} import models

class Employee():
    first = db.first_name
    last = db.last_name
    salary = db.salary
    hire_date = db.hire_date
    position = db.position
    manager = db.manager

    def __init__(self):
        pass

#create functions, __init__, update, delete
