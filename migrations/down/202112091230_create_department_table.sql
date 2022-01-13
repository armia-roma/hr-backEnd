BEGIN;
DROP TABLE department;
DELETE FROM migrations WHERE name = "202112091230_create_department_table";
COMMIT;