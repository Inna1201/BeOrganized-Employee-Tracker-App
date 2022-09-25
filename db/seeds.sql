INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 1000000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kirsty" "Morton", "Sales Lead", 1, null),
       ("Carl" "Patel", "Salesperson", 2, 1),
       ("Phillip" "Potter", "Lead Engineer", 3, null),
       ("Heather" "Owens", "Software Engineer", 4, 3),
       ("Martine" "Chan", "Account Manager", 5, null),
       ("Richard" "Watson", "Accountant", 6, 5),
       ("Helen" "Mills", "Legal Team Lead", 7, null),
       ("Karen" "Skene", "Lawyer", 8, 7);

