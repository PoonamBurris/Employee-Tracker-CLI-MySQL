DROP DATABASE IF EXISTS Employee_DB;
CREATE DATABASE Employee_DB;

CREATE TABLE department (
    did INTEGER(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR (30) NOT NULL,
    PRIMARY KEY (did)
);

CREATE TABLE roles (
id INTEGER (11) AUTO_INCREMENT NOT NULL,
title VARCHAR (30),
salary DECIMAL (9,2),
department_id INTEGER,
PRIMARY KEY (id),
INDEX `index_dept_id`(department_id),
CONSTRAINT `fk_dept_id`
FOREIGN KEY (department_id)
REFERENCES department(did) ON UPDATE CASCADE ON DELETE RESTRICT
);

CREATE TABLE employee (
id INTEGER (11) AUTO_INCREMENT NOT NULL,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INTEGER,
manager_id INTEGER,
PRIMARY KEY (id),
INDEX `index_role`(role_id),
CONSTRAINT `fk_role_id`
FOREIGN KEY (role_id)
REFERENCES role(id) ON UPDATE CASCADE ON DELETE RESTRICT,
INDEX `index_manager`(manager_id),
CONSTRAINT `fk_manager_id`
FOREIGN KEY (manager_id)
REFERENCES role(id) ON UPDATE CASCADE ON DELETE RESTRICT
);

SELECT * FROM employee;
SELECT * FROM roles;
SELECT * FROM department;

INSERT INTO department(name)
VALUES ('copy')
SELECT * FROM department
SELECT name AS "Departments" FROM department

