DROP DATABASE IF EXISTS Employee_DB;
CREATE DATABASE Employee_DB;

USE Employee_DB;

CREATE TABLE department (
    id INTEGER(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    dept_name VARCHAR (40) NOT NULL
    
);

CREATE TABLE roles (
id INTEGER (11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR (40) NOT NULL,
salary DECIMAL,
department_id INTEGER,
-- PRIMARY KEY (id),
-- INDEX `index_dept_id`(department_id),
CONSTRAINT `fk_dept_id`
FOREIGN KEY (department_id)
REFERENCES department(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE employee (
id INTEGER (11) AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INTEGER,
manager_id INTEGER,
-- PRIMARY KEY (id),
INDEX `index_role`(role_id),
CONSTRAINT `fk_role_id`
FOREIGN KEY (role_id)
REFERENCES roles(id) ON UPDATE CASCADE ON DELETE RESTRICT,
INDEX `index_manager`(manager_id),
CONSTRAINT `fk_manager_id`
FOREIGN KEY (manager_id)
REFERENCES roles(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

-- SELECT * FROM employee;
-- SELECT * FROM roles;
-- SELECT * FROM department;

-- INSERT INTO department(name)
-- VALUES ('copy')
-- SELECT * FROM department
-- SELECT name AS "Departments" FROM department

