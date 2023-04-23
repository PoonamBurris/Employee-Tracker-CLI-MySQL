INSERT INTO department (department)
VALUES
( 'Management'),
('Customer service'),
('Engineering'),
('Manufacturing'),
('Quality Control'),
('Warehouse'),
('Research');

INSERT INTO roles(title, salary, department)
VALUES
('Plant Manager', 140000, 'Management'),
('Sales Manager', 110000, 'Customer service'),
('Senior Engineer', 80000, 'Engineering'),
('Manufacturing Chemist', 65000, 'Manufacturing'),
('Quality control supervisor', 55000, 'Quality Control'),
('Warehouse clerk', 40000, 'Warehouse'),
('Research Scientist', 75000, 'Research');

INSERT INTO employee(first_name, last_name, title, salary, department,manager)
VALUES
('Andrea', 'West', 'Plant Manager', 140000, 'Management', 'null'),
('Marlene', 'Ford','Sales Manager', 110000, 'Customer service', 'null'),
('Jeff', 'Johnson','Senior Engineer', 80000, 'Engineering','Joe Z'),
('Andrew', 'Barr','Manufacturing Chemist', 65000, 'Manufacturing','McDonald G'),
('Janice', 'Connor','Quality control supervisor', 55000, 'Quality Control', 'Amber P'),
('Ruby', 'Long','Warehouse clerk', 40000, 'Warehouse','Rosie M'),
('Skyler', 'Bing','Research Scientist', 75000, 'Research', 'Kao K');

UPDATE `Employee_DB`.`employee` SET `manager_id` = '1' WHERE (`id`>'1');
