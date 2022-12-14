const {Employee, Intern, Manager, Engineer } = require("./lib/index");
  function roleData(role){
    if( role.role == 'Manager'){
        return `office number: ${role.officenumber}`
    }else if(role = "Intern"){
        return `School: ${role.school}`
    }else
        return `Github: ${role.github}`
  }
  
  function generateHTML(data) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Generator</title>
        <link rel ="stylesheet" href=../style/style.css>
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>
    <section>
    <div class="card">
        <div class="card-header">
           <h2> ${data.employeeName}</h2>
           <h3> ${data.role}</h3>
        </div>
        <div class ="card-info-section">
            <div class="card-detail">
               ID: ${data.id}
            </div>
            <div class="card-detail">
               Email: ${data.email}
            </div>
            <div class="card-detail">
                ${roleData(data)}
            </div>
        </div>

    </div>
    </section>
</body>
    </html>
`
  
  }
  
  module.exports = generateHTML