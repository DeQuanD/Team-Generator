const Employee = require("./Employee");

class Engineer extends Employee{
    constructor(github){
        super(employeeName, id, email, role)
        this.github = github
    };
    
    getGithub(){
        return this.github
    };

    getRole(){
     return 'Engineer'
    }
};


module.exports = Engineer;