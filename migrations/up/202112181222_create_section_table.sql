BEGIN;
CREATE TABLE section (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    code VARCHAR(250) NOT NULL,
    department INT,
    name VARCHAR(250) NOT NULL
);
INSERT INTO migrations (name)
VALUES ("202112181222_create_section_table");
COMMIT;