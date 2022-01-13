BEGIN;
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(250) NOT NULL,
    name VARCHAR(250) NOT NULL,
    type int
);
INSERT INTO migrations (name)
VALUES ("202112091230_create_department_table");
COMMIT;
