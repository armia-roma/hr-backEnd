BEGIN;
ALTER TABLE department
    add code VARCHAR(250) AFTER id;
INSERT INTO migrations (name)
VALUES ("202112150910_alter_department_table_add_code_column");
COMMIT;