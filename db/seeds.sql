INSERT INTO department (dept_name)
VALUES
( 'Management'),
('Customer service'),
('Engineering'),
('Manufacturing'),
('Quality Control'),
('Warehouse'),
('Research');

INSERT INTO roles(title, salary, department_id)
VALUES
('Plant Manager', 140000, 1),
('Sales Manager', 110000, 2),
('Senior Engineer', 80000, 3),
('Manufacturing Chemist', 65000, 4),
('Quality control supervisor', 55000, 5),
('Warehouse clerk', 40000, 6),
('Research Scientist', 75000, 7);

INSERT INTO employee(first_name, last_name, role_id)
VALUES
('Andrea', 'West', 1),
('Marlene', 'Ford', 2),
('Jeff', 'Johnson', 3),
('Andrew', 'Barr', 4),
('Janice', 'Connor', 5),
('Ruby', 'Long', 6),
('Skyler', 'Bing', 7);

UPDATE `Employee_DB`.`employee` SET `manager_id` = '1' WHERE (`id`>'1');
