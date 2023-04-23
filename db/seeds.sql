INSERT INTO department (id, dept_name)
VALUES
(1, 'Management')
(2, 'Customer service')
(3, 'Engineering')
(4, 'Manufacturing')
(5, 'Quality Control')
(6, 'Warehouse')
(7, 'Research')

INSERT INTO roles(id, title, salary, department_id)
VALUES
(1, 'Plant Manager', 140000, 1),
(2, 'Sales Manager', 110000, 2),
(3, 'Senior Engineer', 80000, 3),
(4, 'Manufacturing Chemist', 65000, 4),
(5, 'Quality control supervisor', 55000, 5),
(6, 'Warehouse clerk', 40000, 6),
(7, 'Research Scientist', 75000, 7);

INSERT INTO employee(id,first_name, last_name, role_id)
VALUES
(1, 'Andrea', 'West', 1),
(2, 'Marlene', 'Ford', 2),
(3, 'Jeff', 'Johnson', 3),
(4, 'Andrew', 'Barr', 4),
(5, 'Janice', 'Connor', 5),
(6, 'Ruby', 'Long', 6),
(7, 'Skyler', 'Bing', 7);

UPDATE `Employee_DB`.`employee` SET `manager_id` = '1' WHERE (`id`>'1');
