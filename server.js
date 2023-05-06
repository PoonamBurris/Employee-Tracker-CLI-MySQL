const express = require('express');
const inquirer = require('inquirer');
const cTable = require('console.table');
const chalk = require("chalk");
const figlet = require("figlet");

// Import and require mysql2
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: 'Employee_DB',
    },
    console.log(`Connected to the Employee_DB database.`)
  );

const roleQuery ='SELECT * FROM roles; SELECT CONCAT (e.first_name,"",e.last_name) AS full_name FROM employee e';
const questionsNE =[
'What is the first name?',
'What is the last name?',
'Enter their role',
'Who is their manager?',
];

//Connected database to display on terminal
db.connect((err) =>{
    if(err) throw err;
    console.table(chalk.white('\nConnected to the Employee_DB database. \n'));
    console.table(chalk.blue.bold(
          `===================================================================================================================================`
    ));
    console.log(``);
    console.table(chalk.yellowBright.bold(figlet.textSync("Employee Database Tracker")));
    console.log(``);
    console.log(``);
    console.table(
        chalk.blue.bold(
            `================================================================================================================================`
        ));
options();
});

//Initial questions
const options= () =>{
    inquirer.prompt(
        {
          name: 'action',
          type: 'list',
          message: 'What would you like to do?',
          choices:[
            'View All Departments',
            'View All Roles',
            'View All Employees',
            'Add Department',
            'Add Role',
            'Add Employee',
            'Update Employee Role',
            'Update Employee Managers',
            'View Employees by Manager',
            'View Employees by Department',
            'Delete Department',
            'Delete Role',
            'Delete Employees',
            'View the total utilized budget of a Department',
            'Quit',
          ],  
        })
        .then ((ans)=>{
            switch(ans.action){
                case 'View All Departments':
                viewDept ();
                break;

                case 'View All Roles':
                viewRoles ();
                break;

                case 'View All Employees':
                viewEmply ();
                break;

                case 'Add Department':
                addDept ();
                break;

                case 'Add Role':
                addRole ();
                break;

                case 'Add Employee':
                addEmply ();
                break;

                case 'Update Employee Role':
                updateEmplyrole ();
                break;

                case 'Update Employee Managers':
                updateEmplymanagers ();
                break;

                case 'View Employees by Manager':
                viewEmplymanager ();
                break;

                case 'View Employees by Department':
                viewEmplydept ();
                break;

                case 'Delete Department':
                delDept ();
                break;

                case 'Delete Role':
                delRole ();
                break;

                case 'Delete Employees':
                DelEmply ();
                break;

                case 'View the total utilized budget of a Department':
                viewBudg ();
                break;

                case 'Quit':
                Exit ();
                break;

                default:
                console.log(`Retry:${ans.action}`);
            }});
};

const viewDept= ()=> {
const query = "SELECT * FROM department";
db.query(query,(err,results) =>{
    if (err) throw err;
    console.table(results);
    options();
});
};

const viewRoles= () =>{
    const query = "SELECT * FROM roles";
    
    db.query(query,(err,results) =>{
        if (err) throw err;
        console.table(results);
        options();
});
};

const viewEmply= () =>{
    const query = "SELECT * FROM employee";
    db.query(query,(err,results) =>{
        if (err) throw err;
        console.table(results);
        options();
    });
};

const addDept= ()=> {
    const query = "SELECT * FROM department";
    db.query(query,(err,results) =>{
        if (err) throw err;
        console.table(results);

        inquirer.prompt([
                {
                    name:'newdepartment',
                    type:'input',
                    message:'What Department would you like to add?',
                },
            ])
            .then((ans)=>{
                const newdepartment = ans.newdepartment;
                db.query(
                    `INSERT INTO department(name) VALUES('${newdepartment}')`,
                    [ans.newdepartment],
                    (err,results)=>{
                    options();
                    }
                );
                });
            });
    };


    const addRole= () =>{
        const query = "SELECT * FROM roles";
        db.query(query,(err,results) => {
            if (err) throw err;
            console.table(results[0]);
            inquirer.prompt([
                    {
                        name:'newRole',
                        type:'input',
                        message:'What is the the new Role?'
                    },
                    {
                        name:'newSal',
                        type:'input',
                        message:'What is the the new Salary?'  
                    },
                    {
                        name:'newdept',
                        type:'input',
                        message:'What is the the Department id for new role?'
                      
                    },
                ]
                )
                .then((ans)=>{
                    db.query(`INSERT INTO roles(title, salary, department_id)
                    VALUES('${ans.newRole}','${ans.newSal}','${ans.newdept}')`),
                    options();
                });
    });
    };

    const addEmply= () =>{
        const query = "SELECT * FROM employee";
        db.query(query,(err,results) => {
            if (err) throw err;
            console.table(results[0]);
            inquirer.prompt([
                    {
                        name:'newFname',
                        type:'input',
                        message:'What is the the new employees first name?'
                    },
                    {
                        name:'newLname',
                        type:'input',
                        message:'What is the new employees last name?'  
                    },
                    {
                        name:'newrole',
                        type:'input',
                        message:'What is the new employees role id?'
                    },
                    {
                        name:'newSal',
                        type:'input',
                        message:'What is the the new Salary?'  
                    },
                    {
                        name:'newdept',
                        type:'input',
                        message:'What is the the Department id for new role?'
                      
                    },
                    {
                        name:'newManager',
                        type:'input',
                        message:'Who is the new employees Manager?'
                    },
                ]
                )
                .then((ans)=>{
                    db.query(`INSERT INTO employee(first_name, last_name,roles_id,department_id,salary,manager)
                    VALUES('${ans.newFname}','${ans.newLname}','${ans.newrole}','${ans.newdept}','${ans.newSal}','${ans.newManager}')`),
                    options();
                });
    });
    };


//update Employee roles
const updateEmplyrole = () => {
    inquirer
    .prompt([
      {
        name: "id",
        type: "input",
        message: "What is your employee ID?",
      },
      {
        name: "role",
        type: "input",
        message: "What is your role ID?",
      },
    ])
    .then((answers) => {
      db.query (`UPDATE employee SET roles_id = ${answers.role} WHERE id = ${answers.id}`,
      (err, results) => {
        if (err) throw err;
        console.log(results);
        options();
      });
    })
    .catch((err) => {
      throw err;
    });
};

    // //get id and and name from employees; choose what employee's role will be updated
    // db.query("SELECT * FROM employee", (err, results) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         let empQueryArray = results.map((obj) => {
    //             return {
    //                 //taking values from query and renaming the keys
    //                 value: obj.id,
    //                 name: obj.first_name + ' ' + obj.last_name
    //             };
    //         });
    //         // console.log(empQueryArray);
    //         //query to get roles to choose to update to; need id and role title
    //         db.query(`SELECT id, title FROM roles`, async (err, results) => {
    //             if (err) {
    //                 console.log(err);
    //             } else {
    //                 let roleQueryArray = results.map((obj) => {
    //                     return {
    //                         value: obj.id,
    //                         name: obj.title
    //                     };
    //                 });
                    // console.log(roleQueryArray);
//                     await inquirer.prompt([
//                         {
//                             type: 'list',
//                             name: 'employeeName',
//                             message: `Which employee's role do you want to update?`,
//                             choices: empQueryArray,
//                           },
//                           {
//                             type: 'list',
//                             name: 'roleName',
//                             message: 'Which role do you want to assign the selected employee?',
//                             choices: roleQueryArray,
//                           },
//                     ])
//                     .then((ans) => {
//                         const empName = ans.employeeName;
//                         const roleName = ans.roleName;
        
//                         db.query(`UPDATE employee SET role_id = ${roleName} WHERE id = ${empName}`, (err, results) => {
//                             if (err) {
//                                 console.log(err);
//                             } else {
//                                 console.log('');
//                                 console.log('EMPLOYEE ROLE UPDATED'.bold.brightCyan);
//                                 console.log('');
//                             };
//                         });
//                         options();
//                     });
//                 };
//             });
//         };
//     });
// }

    // Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });