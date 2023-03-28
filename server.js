const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;
const chalk = require('chalk');
const { default: inquirer } = require('inquirer');
//const figlet = require('figlet');

const roleQuery ='SELECT * FROM roles; SELECT CONCAT (e.first_name,"",e.last_name) AS full_name FROM employee e';

// Connect to database
const db = mysql.createConnection(
    {
      host: '127.0.0.1',
      // MySQL username,
      user: 'root',
      // TODO: Add MySQL password here
      password: 'password',
      database: 'Employee_DB'
    },
    console.log(`Connected to the Employee_DB database.`)
  );
//Connected database to display on terminal
connection.connect((err) =>{
    if(err) throw err;
    console.table(chalk.white('\nConnected to the Employee_DB database. \n'));

    console.table(chalk.white.bold(
          `===========================================================`
    ));
    console.log(``);
    console.table(chalk.greenBright('\n Employee Manager \n'));
    console.log(``);
    console.log(``);
    console.table(
        chalk.white.bold(
            `==========================================================`
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
connection.query(query,(err,results) =>{
    if (err) throw err;
    console.table(results);
    options();
});
};

const viewRoles= () =>{
    const query = "SELECT * FROM roles";
    connection.query(query,(err,results) =>{
        if (err) throw err;
        console.table(results);
        options();
});
};

const viewEmply= () =>{
    const query = "SELECT * FROM employee";
    connection.query(query,(err,results) =>{
        if (err) throw err;
        console.table(results);
        options();
    });
};

const addDept= ()=> {
    const query = "SELECT * FROM department";
    connection.query(query,(err,results) =>{
        if (err) throw err;
        console.table(results);

        inquirer.prompt([
                {
                    name:'newDept',
                    type:'input',
                    message:'What Department would you like to add?',
                },
            ])
            .then((ans)=>{
                connection.query(
                    `INSERT INTO department(name) VALUES(?)`,
                    [ans.newDept],
                    (err,results)=>{
                    options();
                    }
                );
                });
            });
    };

    const addRole= () =>{
        const query = `SELECT * FROM roles";SELECT * FROM department;`;
        connection.query(query,(err,results) => {
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
                        name:'dept',
                        type:'list',
                        choice: function(){
                            let choices = results[1].map((choice)=> choice.name);
                            return choices
                        },
                        message: 'Select the Department fo rthe new Role?',
                    },
                ])
                .then((ans)=>{
                    connection.query(`INSERT INTO roles(title, salary, department_id)
                    VALUES('${ans.newRole}','${ans.newSal}',
                    (SELECT did FROM department WHERE name = '${ans.dept}'));`);
                    options();
                });
    });
    };

    const addEmply= () =>{
            connection.query(roleQuery,(err,results) =>{
            if (err) throw err;
            inquirer.prompt([{
                name: 'newFname'
                
            }])
        });
    };