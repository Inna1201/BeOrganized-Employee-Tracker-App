-- SELECT
-- role.id, role.title, department.name AS department, role.salary
-- FROM role
-- JOIN department ON role.department_id = department.id;


-- SELECT 
-- employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, employee.manager_id
-- FROM employee
-- JOIN role ON employee.role_id = role.id
-- JOIN department ON department.id = role.department_id;


-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- VALUES (); -- answers.firstName, answers.lastName, answers.role, answers.manager

-- INSERT INTO role (title, salary, department_id)
-- VALUES ();

-- INSERT INTO department (name)
-- VALUES ();
