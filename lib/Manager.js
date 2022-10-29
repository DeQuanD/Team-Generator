const Employee = require("./Employee");

class Manager extends Employee{
    constructor(officeNumber){
        super(employeeName, id, email, role);
        this.officeNumber =officeNumber
    };

    getRole(){
        return 'Manager'
    }
};

module.exports = Manager;