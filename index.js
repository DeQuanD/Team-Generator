const {Employee, Intern, Manager, Engineer } = require("./lib/index");
const inquirer =require("inquirer")
const fs = require('fs');

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
                name: "name"
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
               }])
           .then((answer)=>{
               writeToFile("index.html")
           })
           .catch((err) => {console.error(err)})
     };
   
   addEmployee()
   
   
