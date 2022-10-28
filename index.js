const {Employee, Intern, Manager, Engineer } = require("./lib/index");
const inquirer =require("inquirer")
const fs = require('fs');
const generatehtml = require("./generatehtml")

function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) =>{
        if (err) throw err
        console.log(err)})}

const addEmployee = () => {
    inquirer
           .prompt([
               {
                type: "input",
                message:"What is the employee's name",
                name: "Name"
               },
               {
                type: "input",
                message:"What is the employee's ID number",
                name: "Id"
               },
               {
                type: "input",
                message:"What is the employee's email",
                name: "Email"
               },
               {
                   type: "checkbox",
                   message: "What is their Role",
                   name: "Role",
                   choices:["Manager","Engineer","Intern"]
               },
               {
                    type: "input",
                    message: "What school did they graduate from?",
                    name: "School",
                    when: (role) => role.Role == "Intern"
                },
                {
                    type: "input",
                    message: "What is their Github profile?",
                    name: "Github",
                    when: (role) => role.Role == "Engineer"
                },
                {
                     type: "input",
                    message: "What is their Office number?",
                    name: "Office",
                    when: (role) => role.Role == "Manager"
                }])
           .then((answers) => {
                //console.log(answers);
                if(answers.Role == 'Manager'){
               manager = new Manager(employeeName = answers.Name, id = answers.Id, email = answers.Email, officeNumber = answers.Office)
                    //console.log(manager)
                }else if(answers.Role == 'Intern'){
                    return(
                intern = new Intern(employeeName =answers.Name, id =answers.Id, email = answers.Email, school = answers.School))
                }else{
                    return(
                intern = new Engineer( employeeName =answers.Name, id = answers.Id, email = answers.Email, github =answers.Github))
                    }})
            .then((input)=>{console.log(`the new employee is ${JSON.stringify(input)}`)})
           .catch((err) => {console.error(err)})
     };
   
   addEmployee()
   
   /*.then((answer)=>{
    writeToFile("index.html", generatehtml({...answer}))*/