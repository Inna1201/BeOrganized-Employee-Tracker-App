INSERT INTO department (id, name)
VALUES (1, "Sales"),
       (2, "Engineering"),
       (3, "Finance"),
       (4, "Legal");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 1000000, 1),
       (2, "Salesperson", 80000, 1),
       (3, "Lead Engineer", 150000, 2),
       (4, "Software Engineer", 120000, 2),
       (5, "Account Manager", 160000, 3),
       (6, "Accountant", 125000, 3),
       (7, "Legal Team Lead", 250000, 4),
       (8, "Lawyer", 190000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Kirsty" "Morton", "Sales Lead", 1),
       (2, "Carl" "Patel", "Salesperson", 2, 1),
       (3, "Phillip" "Potter", "Lead Engineer", 3),
       (4, "Heather" "Owens", "Software Engineer", 4, 3),
       (5, "Martine" "Chan", "Account Manager", 5),
       (6, "Richard" "Watson", "Accountant", 6, 5),
       (7, "Helen" "Mills", "Legal Team Lead", 7),
       (8, "Karen" "Skene", "Lawyer", 8, 7);

