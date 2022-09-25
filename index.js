const inquirer = require('inquirer');
// const db = require('./db/schema.sql')


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
        if (answers.type === "View All Employees") {
            // show emplyee+role+department tables
            viewEmployees()

        }

        if (answers.type === "Add Emplyee") {
            addEmployee()
        }

        if (answers.type === "Update Employee Role") {
            updateRole()
        }

        if (answers.type === "View All Roles") {
            // show role+department table
        }

        if (answers.type === "Add Role") {
            addRole()
        }

        if (answers.type === "View All Departments") {
            // show department table
        }

        if (answers.type === "Add Department") {
            addDepartment()
        }

        if (answers.type === "Quit") {
            // exit app???
        }

    })
};

 const viewEmployees = () => {
                db.query(`SELECT 
                employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id
                FROM employee
                JOIN role ON employee.role_id = role.id
                JOIN department ON department.id = role.department_id;`
                ), (err, result) => {
                    console.table(result)
                }
                mainMenu() 
            }


function addEmployee() {
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
                choices: [
                    'Sales Lead',
                    'Lead Engineer',
                    'Software Engineer',
                    'Account Manager',
                    'Accountant',
                    'Legal Team Lead',
                    'Lawyer',
                    'Salesperson' // how to add new roles to this list
                ],
                default: '(Move up and down to reveal more choices.)'
            },
            {
                type: 'list',
                message: 'Please use arrow keys to choose the manager.',
                name: 'manager',
                choices: [
                    'Kirsty Morton',
                    'Phillip Potter',
                    'Martine Chan',
                    'Helen Mills' // how to add new managers to this list
                ],
                default: '(Move up and down to reveal more choices.)'
            }


        ]).then(answers => {
            const employee = (answers.firstName, answers.lastName, answers.role, answers.manager)
            console.log(employee)
            // add records to table
            mainMenu()

        })
};


function updateRole() {
    inquirer.prompt(
        [
            {
                type: 'list',
                message: 'Please select employee whch role you want to update.',
                name: 'selectEmployee',
                choices: [
                    'Kirsty Morton',
                    'Phillip Potter',
                    'Martine Chan',
                    'Helen Mills',
                    'Carl Patel',
                    'Heather Owens',
                    'Richard Watson',
                    'Karen Skene' // how to add new employees to this list
                ],
                default: '(Move up and down to reveal more choices.)'

            },
            {
                type: 'list',
                message: 'Please choose the role that you want to assign the selected employee',
                name: 'selectRole',
                choices: [
                    'Sales Lead',
                    'Lead Engineer',
                    'Software Engineer',
                    'Account Manager',
                    'Accountant',
                    'Legal Team Lead',
                    'Lawyer',
                    'Salesperson' // how to add new roles to this list
                ],
                default: '(Move up and down to reveal more choices.)'
            }

        ]).then(answers => {
             // add records to table
             mainMenu()

        })
};


function addRole() {
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
                name: 'role',
                choices: [
                    'Sales',
                    'Engineering',
                    'Finance',
                    'Legal' // how to add new roles to this list
                ]
            },

        ]).then(answers => {
             // add records to table
             mainMenu()

        })
};


function addDepartment() {
    inquirer.prompt({
                type: 'input',
                message: 'What is the name of the department.',
                name: 'departmentName'
        
            }).then(answers => {
                 // add records to table
            mainMenu()

        })
};

mainMenu();
// addEmployee();
// updateRole();
// addRole();
// addDepartment();