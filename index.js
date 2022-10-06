const inquirer = require('inquirer');
const mysql = require("mysql2");
const db = require('./db/connections.js');
require('console.table');


function mainMenu() {
    inquirer.prompt({
        type: 'list',
        message: 'What would you like todo?',
        name: 'main',
        choices: [
            'View All Employees',
            'Add Emplyee',
            'Update Employee Role',
            'View All Roles',
            'Add Role',
            'View All Departments',
            'Add Department',
            'Quit'
        ],
        default: 'Move up and down to reveal more choices.'

    }).then(answers => {
        if (answers.main === "View All Employees") {
            viewEmployees()
        }

        if (answers.main === "Add Emplyee") {
            addEmployee()
        }

        if (answers.main === "Update Employee Role") {
            updateRole()
        }

        if (answers.main === "View All Roles") {
            viewRoles()
        }

        if (answers.main === "Add Role") {
            addRole()
        }

        if (answers.main === "View All Departments") {
            viewDepartments()
        }

        if (answers.main === "Add Department") {
            addDepartment()
        }

        if (answers.main === "Quit") {
            process.exit();
        }

    })
};

const viewEmployees = () => {
    db.promise().query(`SELECT 
                employee.id, employee.first_name, employee.last_name, role.title, department.department_name AS department, role.salary, employee.manager_id
                FROM employee
                JOIN role ON employee.role_id = role.id
                JOIN department ON department.id = role.department_id;`
    ).then(([response]) => {
        console.table(response);
        mainMenu()
    })

};

const viewDepartments = () => {
    db.promise().query(`SELECT * FROM department;`
    ).then(([response]) => {
        console.table(response);
        mainMenu()
    })

};

const viewRoles = () => {
    db.promise().query(`SELECT
                role.id, role.title, department.department_name AS department, role.salary
                FROM role
                JOIN department ON role.department_id = department.id;`
    ).then(([response]) => {
        console.table(response);
        mainMenu()
    })

};

async function addEmployee() {


    const [roles] = await db.promise().query("SELECT * FROM role")
    const roleChoices = roles.map(({ title, id }) => (
        { name: title, value: id }
    ));

    const [managers] = await db.promise().query("SELECT * FROM employee WHERE manager_id IS NULL")
    const managerChoices = managers.map(({ first_name, last_name, id }) => (
        { name: first_name + " " + last_name, value: id }
    ));
    managerChoices.push({name: 'None', value: null });
   

    inquirer.prompt(
        [
            {

                type: 'input',
                message: 'Please enter the first name.',
                name: 'firstName',
            },
            {
                type: 'input',
                message: 'Please enter the last name.',
                name: 'lastName',
            },
            {
                type: 'list',
                message: 'Please use arrow keys to choose the role.',
                name: 'role',
                choices: roleChoices,
                default: '(Move up and down to reveal more choices.)'
            },
            {
                type: 'list',
                message: 'Please use arrow keys to choose the manager.',
                name: 'manager',
                choices:  managerChoices, 
                default: '(Move up and down to reveal more choices.)'
            }



        ]).then(async (answers) => {
            const employee = { first_name: answers.firstName, last_name: answers.lastName, role_id: answers.role, manager_id: answers.manager }
            const response = await db.promise().query("INSERT INTO employee SET ?", employee)
            console.log(response)
            viewEmployees()

        })
};

async function updateRole() {

    const [employees] = await db.promise().query("SELECT * FROM employee")
    const employeeChoices = employees.map(({ first_name, last_name, id }) => (
        { name: first_name + " " + last_name, value: id }
    ));

    const [roles] = await db.promise().query("SELECT * FROM role")
    const roleChoices = roles.map(({ title, id }) => (
        { name: title, value: id }
    ));


    inquirer.prompt(
        [
            {
                type: 'list',
                message: 'Please select employee whch role you want to update.',
                name: 'selectEmployee',
                choices: employeeChoices,
                default: '(Move up and down to reveal more choices.)'

            },
            {
                type: 'list',
                message: 'Please choose the role that you want to assign the selected employee',
                name: 'selectRole',
                choices: roleChoices,
                default: '(Move up and down to reveal more choices.)'
            }

        ]).then(async answers => {
            const response = await db.promise().query("UPDATE employee SET role_id =? WHERE id = ?", [answers.selectRole, answers.selectEmployee])
            viewEmployees()

        })
};

async function addRole() {

    const [departments] = await db.promise().query("SELECT * FROM department")
    const departmentChoices = departments.map(({ department_name, id }) => (
        { name: department_name, value: id }
    ));
    
    inquirer.prompt(
        [
            {
                type: 'input',
                message: 'What is the name of the role?',
                name: 'roleName',
            },
            {
                type: 'input',
                message: 'What is the salary of the role?',
                name: 'roleSalary',
            },
            {
                type: 'list',
                message: 'Which department does the role belongs to?',
                name: 'roleDepartment',
                choices: departmentChoices
            },

        ]).then(async (answers) => {
            console.log(answers);
            const newRole = { title: answers.roleName, salary: answers.roleSalary, department_id: answers.roleDepartment }
            const response = await db.promise().query("INSERT INTO role SET ?", newRole)
            console.log(response)
            viewRoles()

        })
};

function addDepartment() {
    inquirer.prompt({
        type: 'input',
        message: 'What is the name of the department.',
        name: 'departmentName'

    }).then(async (answers) => {
        const department = { department_name: answers.departmentName }
        const response = await db.promise().query("INSERT INTO department SET ?", department)
        console.log(response)
        viewDepartments()

    })
};

mainMenu();
