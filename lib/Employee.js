//const inquirer = require('inquirer');

class Employee{
    constructor(employeeName, id, email, role){
        this.employeeName=employeeName;
        this.id = id;
        this.email = email;
        this.role =role
    }

    getName(){ 
        return this.name
    };

    getId(){
        return this.id
    };

    getEmail(){
        return this.email
    };

    getRole(){
        return 'Employee'
          
    };

};

module.exports = Employee;