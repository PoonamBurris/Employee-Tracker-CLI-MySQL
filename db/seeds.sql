INSERT INTO department ( name)
VALUES
( 'Management'),
('Customer service'),
('Engineering'),
('Manufacturing'),
('Quality Control'),
('Warehouse'),
( 'Research');

INSERT INTO roles( title, salary, department_id)
VALUES
('Plant Manager', 140000, 1),
( 'Sales Manager', 110000, 2),
( 'Senior Engineer', 80000, 3),
( 'Manufacturing Chemist', 65000, 4),
( 'Quality control supervisor', 55000, 5),
( 'Warehouse clerk', 40000, 6),
( 'Research Scientist', 75000, 7);

INSERT INTO employee( first_name, last_name, roles_id,department_id,salary,manager)
VALUES
( 'Andrea', 'West', 1,1,140000, 'Null'),
( 'Marlene', 'Ford',2,2,110000, 'Null' ),
( 'Jeff', 'Johnson',3,3,80000, 'Roger'),
( 'Andrew', 'Barr',4,4,65000, 'Cody'),
( 'Janice', 'Connor',5,5,55000,'Chris'),
( 'Ruby', 'Long',6,6,40000, 'Rosie'),
('Skyler', 'Bing',7,7,75000, 'Kim');

UPDATE `Employee_DB`.`employee` SET `manager_id` = '1' WHERE (`id`>'1');
