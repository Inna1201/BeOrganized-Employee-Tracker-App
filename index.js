const inquirer = require('inquirer');


function mainMenu() {
    inquirer.prompt({
        type: 'input',
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
            'Quit',
            'View all Employees'
        ],
        default: '(Move up and down to reveal more choices.)'

    }).then(answers => {

    })
};

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
                type: 'input',
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
                type: 'input',
                message: 'Please use arrow keys to choose the manager.',
                name: 'role',
                choices: [
                    'Kirsty Morton',
                    'Phillip Potter',
                    'Martine Chan',
                    'Helen Mills' // how to add new managers to this list
                ],
                default: '(Move up and down to reveal more choices.)'
            }


        ]).then(answers => {

        })
};

function updateRole() {
    inquirer.prompt(
        [
            {
                type: 'input',
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
                type: 'input',
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
                    'Salesperson' // how to add new rolet to this list
                ],
                default: '(Move up and down to reveal more choices.)'
            }

        ]).then(answers => {

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
                type: 'input',
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

        })
};


function addDepartment() {
    inquirer.prompt({
                type: 'input',
                message: 'What is the name of the department.',
                name: 'departmentName'
        
            }).then(answers => {

        })
};