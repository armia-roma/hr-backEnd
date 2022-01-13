BEGIN;
ALTER TABLE department
DROP COLUMN code;
DELETE FROM department WHERE name = "202112150910_alter_department_table_add_code_column";
COMMIT;
